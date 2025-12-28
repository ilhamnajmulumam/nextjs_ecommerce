import { orders } from '@/data/orders';
import { currentUser } from '@/data/users';
import UserClient from './user-client';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function UserDashboard() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/login');
    }

    if (session.user.role !== 'USER') {
        redirect('/admin');
    }

    const myOrders = orders.filter((o) => o.userId === currentUser.id);
    const totalSpent = myOrders.reduce((sum, o) => sum + o.total, 0);
    const activeOrders = myOrders.filter((o) =>
        ['pending', 'processing', 'shipped'].includes(o.status)
    ).length;

    return (
        <section className="bg-gray-100 w-full min-h-screen p-10">
            <UserClient
                session={session}
                totalSpent={totalSpent}
                activeOrders={activeOrders}
                myOrders={myOrders}
            />
        </section>
    );
}
