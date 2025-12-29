'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { prisma } from './prisma';
import { revalidatePath } from 'next/cache';

export async function getCategories() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) throw new Error('Unauthorized');

    const categories = await prisma.category.findMany({
        orderBy: { name: 'asc' },
    });

    return categories;
}

export async function addCategories(formData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) throw new Error('Unauthorized');

    const name = formData.get('name');
    const description = formData.get('description');

    if (!name || name.trim() === '') return new Error('Name is required');
    if (!description || description.trim() === '')
        return new Error('Description is required');

    await prisma.category.create({
        data: {
            name,
            description,
        },
    });

    revalidatePath('/admin/categories');
}

export async function updateCategory(fromData) {
    const id = fromData.get('id');
    const name = fromData.get('name');
    const description = fromData.get('description');

    if (!id) return new Error('Id is required');
    if (!name) return new Error('Name is required');

    await prisma.category.update({
        where: { id },
        data: {
            name,
            description,
        },
    });

    revalidatePath('/admin/categories');
}

export async function deleteCategory(fromData) {
    const id = fromData.get('id');

    if (!id) return new Error('Id is required');

    await prisma.category.delete({ where: { id } });

    revalidatePath('/admin/categories');
}
