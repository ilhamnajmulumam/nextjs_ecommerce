import CategoriesClient from './categories-client';
import { categories } from '@/data/categories';
import { auth } from '@/lib/auth';
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

    return (
        <div className="bg-gray-200 min-h-screen w-screen p-10">
            <CategoriesClient categories={categories} />
        </div>
    );
}
