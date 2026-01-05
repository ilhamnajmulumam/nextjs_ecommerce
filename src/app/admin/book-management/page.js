import { BookmanagementClient } from './Bookmanagement-client';
import { auth } from '@/lib/auth';
import { getBooks } from '@/lib/books-management-action';
import { getCategories } from '@/lib/categories-action';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function BookmanagementPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/login');
    }

    if (session.user.role !== 'ADMIN') {
        redirect('/user');
    }

    const initialBooks = await getBooks();
    const categories = await getCategories();

    return (
        <div className="bg-gray-200 min-h-screen p-10">
            <BookmanagementClient
                initialBooks={initialBooks}
                categories={categories}
            />
        </div>
    );
}
