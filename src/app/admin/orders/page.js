import OrdersClient from './orders-client';
import { orders } from '@/data/orders';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function OrdersPage() {
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
            <OrdersClient orders={orders} />
        </div>
    );
}
