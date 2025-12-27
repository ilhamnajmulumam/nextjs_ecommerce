'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signUp({ email, password, name }) {
    try {
        const result = await auth.api.signUpEmail({
            body: { email, password, name },
        });
        return { user: result.user };
    } catch (e) {
        return { error: e.message };
    }
}

export async function signIn({ email, password }) {
    return await auth.api.signInEmail({
        body: { email, password },
    });
}

export async function logout() {
    const hdr = await headers();
    return await auth.api.signOut({
        headers: hdr,
    });
}
