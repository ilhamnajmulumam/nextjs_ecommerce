import { PrismaClient } from '@prisma/client/';

import categories from './data/categories.js';
import books from './data/books.js';

const prisma = new PrismaClient();

/**
 * Seeds the database with categories and books.
 * It creates categories from the data/categories.js file and books from the data/books.js file.
 * For each book, it creates 1-2 random book categories by selecting random categories from the database and
 * creating book-category relationships.
 * @returns {Promise<void>} A promise that resolves when seeding is completed.
 */

async function main() {
    console.log('Seeding categories...');

    await prisma.category.createMany({
        data: categories,
        skipDuplicates: true,
    });

    const dbCategories = await prisma.category.findMany();

    console.log('Seeding books...');
    for (const book of books) {
        const createdBook = await prisma.book.create({
            data: book,
        });

        // Ambil 1–2 kategori secara random
        const randomCategories = dbCategories
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);

        await prisma.bookCategory.createMany({
            data: randomCategories.map((cat) => ({
                bookId: createdBook.id,
                categoryId: cat.id,
            })),
        });
    }

    console.log('Seeding completed.');
}

main()
    .catch((e) => {
        console.error('❌ Seed error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
