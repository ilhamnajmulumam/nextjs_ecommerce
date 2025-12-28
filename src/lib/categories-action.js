'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { prisma } from './prisma';

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
