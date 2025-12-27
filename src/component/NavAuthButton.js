'use client';

import { useRouter } from 'next/navigation';
import { logout } from '@/lib/auth-action';

export default function NavAuthButton({ session }) {
    const router = useRouter();

    const handleSignOut = async () => {
        await logout();
        router.push('/login');
    };

    if (!session) {
        return (
            <div className="hidden md:flex items-center gap-4">
                <a href="/login" className="hover:text-blue-600 transition">
                    Login
                </a>
                <a
                    href="/sign-up"
                    className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Signup
                </a>
            </div>
        );
    }

    return (
        <div className="hidden md:flex items-center gap-4">
            <a
                href={session.user.role === 'ADMIN' ? '/admin' : '/user'}
                className="hover:text-blue-600 transition"
            >
                Dashboard
            </a>
            <button
                onClick={handleSignOut}
                className="text-red-500 hover:text-red-600 transition "
            >
                Logout
            </button>
        </div>
    );
}
