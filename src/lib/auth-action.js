'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function signUp(email, password, name) {
    return await auth.api.signUpEmail({
        body: {
            email,
            password,
            name,
        },
    });
}

export async function login(email, password) {
    return await auth.api.loginEmail({
        body: {
            email,
            password,
        },
    });
}

export async function logout() {
    const hdr = await headers();
    return await auth.api.logout({
        headers: hdr,
    });
}
