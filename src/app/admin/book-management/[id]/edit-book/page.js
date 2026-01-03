import { prisma } from '@/lib/prisma';
import EditBookClient from './edit-book-client';

export default async function EditBookPage({ params }) {
    const { id } = await params;

    const book = await prisma.book.findUnique({
        where: { id },
        include: { bookCategories: { include: { category: true } } },
    });

    const categories = await prisma.category.findMany();

    if (!book) {
        return (
            <div className="p-6">
                <p>Book not found</p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <EditBookClient book={book} categories={categories} />
        </div>
    );
}
