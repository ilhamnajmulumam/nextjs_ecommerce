import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function WishlistsPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/login');
    }

    if (session.user.role !== 'USER') {
        redirect('/admin');
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Wishlists</h1>
            <p>This is the Wishlists page.</p>
        </div>
    );
}
