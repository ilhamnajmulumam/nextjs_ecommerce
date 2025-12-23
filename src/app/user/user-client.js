'use client';

import { ShoppingBag, Clock, Heart, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import OrderStatusBadge from '@/component/OrderStatusBadge';

export default function UserClient({ totalSpent, activeOrders, myOrders }) {
    const router = useRouter();

    return (
        <div className="space-y-6">
            {/* Header */}
            <header>
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome, Ilham Najmul Umam 👋
                </h1>
                <p className="text-gray-600 mt-2">
                    Here is your dashboard to manage orders and profile.
                </p>
            </header>

            {/* Statistik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Total Belanja */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Total Belanja
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Rp {totalSpent.toLocaleString('id-ID')}
                            </h2>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <ShoppingBag className="text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Pesanan Aktif */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Pesanan Aktif
                            </p>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {activeOrders}
                            </h2>
                        </div>
                        <div className="bg-green-100 p-3 rounded-lg">
                            <Clock className="text-green-600" />
                        </div>
                    </div>
                </div>

                {/* Wishlist */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Wishlists</p>
                            <h2 className="text-2xl font-bold text-gray-900">
                                12
                            </h2>
                        </div>
                        <div className="bg-orange-100 p-3 rounded-lg">
                            <Heart className="text-orange-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Pesanan Terbaru */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
                <div className="p-6 border-b border-stone-100 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Pesanan Terbaru</h3>
                    <button
                        onClick={() => router.push('/user/orders-history')}
                        className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center"
                    >
                        Lihat Semua
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                </div>

                <div className="divide-y divide-stone-100">
                    {myOrders.slice(0, 3).map((order) => (
                        <div
                            key={order.id}
                            className="p-6 hover:bg-stone-50 transition"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-medium text-gray-900">
                                            #{order.id}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {new Date(
                                                order.date
                                            ).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {order.items
                                            .map((i) => i.bookTitle)
                                            .join(', ')}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-gray-900">
                                        Rp {order.total.toLocaleString('id-ID')}
                                    </span>
                                    <OrderStatusBadge status={order.status} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
