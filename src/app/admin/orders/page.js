import OrdersClient from './orders-client';
import { orders } from '@/data/orders';

export default function OrdersPage() {
    return (
        <div className="bg-gray-200 min-h-screen w-screen p-10">
            <OrdersClient orders={orders} />
        </div>
    );
}
