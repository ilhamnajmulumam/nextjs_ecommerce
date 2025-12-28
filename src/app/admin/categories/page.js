import CategoriesClient from './categories-client';
import { auth } from '@/lib/auth';
import { getCategories } from '@/lib/categories-action';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function CategoriesPage() {
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
        <div className="bg-gray-200 min-h-screen w-screen p-10">
            <CategoriesClient categories={categories} />
        </div>
    );
}
