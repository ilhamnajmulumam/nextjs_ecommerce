'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { prisma } from './prisma';
import { revalidatePath } from 'next/cache';

export async function getUser() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) throw new Error('Unauthorized');

    const user = await prisma.user.findUnique({ where: { id: userId } });

    return user;
}

export async function updateUser(prevData, formData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) throw new Error('Unauthorized');

    const name = formData.get('name');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const address = formData.get('address');

    if (!name || !email || !phoneNumber || !address) {
        return {
            error: 'All fields are required',
        };
    }

    await prisma.user.update({
        where: { id: userId },
        data: {
            name,
            email,
            phoneNumber,
            address,
        },
    });

    revalidatePath('/user/profile');

    return {
        success: true,
        message: 'Profile updated successfully',
    };
}
