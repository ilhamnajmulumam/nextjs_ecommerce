import NewBookClient from './new-book-client';
import { auth } from '@/lib/auth';
import { getCategories } from '@/lib/categories-action';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function NewBookPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/login');
    }

    if (session.user.role !== 'ADMIN') {
        redirect('/user');
    }

    const categories = await getCategories();

    return (
        <div className="bg-gray-200 p-10">
            <NewBookClient categories={categories} />
        </div>
    );
}
