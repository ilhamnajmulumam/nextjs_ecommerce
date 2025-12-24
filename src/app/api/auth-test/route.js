import { auth } from '@/lib/auth';

export async function POST() {
    console.log('API REGISTER TEST');

    await auth.api.signUpEmail({
        body: {
            email: 'test@mail.com',
            password: '123456',
            name: 'Ilham',
        },
    });

    console.log('USER REGISTERED');

    return new Response('OK', { status: 200 });
}
