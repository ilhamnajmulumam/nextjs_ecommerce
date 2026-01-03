'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { prisma } from './prisma';
import { revalidatePath } from 'next/cache';

import { writeFile, mkdir } from 'fs/promises';
import { v4 as uuid } from 'uuid';
import path from 'path';

export async function getBooks() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    const books = await prisma.book.findMany({
        orderBy: [
            { title: 'asc' },
            { author: 'asc' },
            { publishedYear: 'desc' },
        ],
        include: {
            bookCategories: {
                include: { category: true },
            },
        },
    });

    return books.map((book) => ({
        ...book,
        categories: book.bookCategories.map((bc) => bc.category),
    }));
}

export async function addBook(formData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    const title = formData.get('title')?.toString();
    const description = formData.get('description')?.toString();
    const author = formData.get('author')?.toString();

    const isbnRaw = formData.get('isbn')?.toString();
    const isbn = isbnRaw && isbnRaw.trim() !== '' ? isbnRaw : null;

    const publisher = formData.get('publisher')?.toString();
    const publishedYear = Number(formData.get('publishedYear')) || null;
    const rating = Number(formData.get('rating')) || null;
    const price = Number(formData.get('price'));
    const stock = Number(formData.get('stock'));

    const categoryIds = formData.getAll('categoryIds');

    if (!title) throw new Error('Title is required');
    if (!author) throw new Error('Author is required');
    if (!price) throw new Error('Price is required');
    if (!stock) throw new Error('Stock is required');
    if (categoryIds.length === 0)
        throw new Error('At least one category is required');

    // ===== UPLOAD COVER =====
    let coverUrl = null;
    const coverFile = formData.get('cover'); // FIXED

    if (coverFile && coverFile.size > 0) {
        const uploadDir = path.join(process.cwd(), 'public/uploads/books');
        await mkdir(uploadDir, { recursive: true });

        const buffer = Buffer.from(await coverFile.arrayBuffer());
        const fileName = `${uuid()}-${coverFile.name}`;
        const filePath = path.join(uploadDir, fileName);

        await writeFile(filePath, buffer);
        coverUrl = `/uploads/books/${fileName}`;
    }

    await prisma.book.create({
        data: {
            title,
            description,
            author,
            isbn,
            publisher,
            publishedYear,
            rating,
            price,
            stock,
            cover: coverUrl,

            bookCategories: {
                create: categoryIds.map((id) => ({
                    category: {
                        connect: { id },
                    },
                })),
            },
        },
    });

    revalidatePath('/admin/books');
}

export async function updateBook(formData) {
    const bookId = formData.get('bookId');

    const categoryIds = [...new Set(formData.getAll('categoryIds'))];

    await prisma.book.update({
        where: { id: bookId },
        data: {
            title: formData.get('title'),
            description: formData.get('description'),
            author: formData.get('author'),
            isbn: formData.get('isbn'),
            publisher: formData.get('publisher'),
            publishedYear: Number(formData.get('publishedYear')),
            rating: Number(formData.get('rating')),
            price: Number(formData.get('price')),
            stock: Number(formData.get('stock')),

            bookCategories: {
                deleteMany: {
                    bookId,
                },
                create: categoryIds.map((id) => ({
                    category: {
                        connect: { id },
                    },
                })),
            },
        },
    });

    revalidatePath('/admin/books-management');
}
