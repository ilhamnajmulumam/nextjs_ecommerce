import React from 'react';
import { Package, Truck, CheckCircle, Clock, XCircle } from 'lucide-react';
import { orders } from '@/data/orders';
import { currentUser } from '@/data/users';
import OrderStatusBadge from '@/component/OrderStatusBadge';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function OrderHistoryPage() {
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
    const getStatusIcon = (status) => {
        switch (status) {
            case 'delivered':
                return CheckCircle;
            case 'shipped':
                return Truck;
            case 'processing':
                return Package;
            case 'cancelled':
                return XCircle;
            default:
                return Clock;
        }
    };
    return (
        <div className="bg-gray-100 w-full p-10">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Riwayat Pesanan
                </h2>

                <div className="space-y-4">
                    {myOrders.map((order) => {
                        const StatusIcon = getStatusIcon(order.status);
                        return (
                            <div
                                key={order.id}
                                className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden"
                            >
                                <div className="p-6 border-b border-stone-100 bg-stone-50/50 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex gap-6 text-sm">
                                        <div>
                                            <p className="text-gray-500 mb-1">
                                                Tanggal Pesanan
                                            </p>
                                            <p className="font-medium text-gray-900">
                                                {new Date(
                                                    order.date
                                                ).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 mb-1">
                                                Total
                                            </p>
                                            <p className="font-medium text-gray-900">
                                                Rp{' '}
                                                {order.total.toLocaleString(
                                                    'id-ID'
                                                )}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 mb-1">
                                                No. Pesanan
                                            </p>
                                            <p className="font-medium text-gray-900">
                                                #{order.id}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="text-sm font-medium text-amber-600 hover:text-amber-700">
                                            Lihat Invoice
                                        </button>
                                        <button className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-stone-50 transition-colors">
                                            Beli Lagi
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1 space-y-4">
                                            {order.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex gap-4"
                                                >
                                                    <div className="w-16 h-20 bg-stone-200 rounded object-cover shrink-0" />
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">
                                                            {item.bookTitle}
                                                        </h4>
                                                        <p className="text-sm text-gray-500">
                                                            Jumlah:{' '}
                                                            {item.quantity}
                                                        </p>
                                                        <p className="text-sm font-medium text-amber-600 mt-1">
                                                            Rp{' '}
                                                            {item.price.toLocaleString(
                                                                'id-ID'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="sm:w-64 flex flex-col justify-center border-t sm:border-t-0 sm:border-l border-stone-100 pt-4 sm:pt-0 sm:pl-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <StatusIcon
                                                    className={`w-5 h-5 ${
                                                        order.status ===
                                                        'delivered'
                                                            ? 'text-green-500'
                                                            : order.status ===
                                                              'cancelled'
                                                            ? 'text-red-500'
                                                            : 'text-amber-500'
                                                    }`}
                                                />
                                                <span className="font-medium text-gray-900 capitalize">
                                                    {order.status ===
                                                    'delivered'
                                                        ? 'Pesanan Selesai'
                                                        : order.status ===
                                                          'cancelled'
                                                        ? 'Dibatalkan'
                                                        : 'Dalam Proses'}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-4">
                                                {order.status === 'delivered'
                                                    ? 'Paket telah diterima pada tanggal 24 Okt 2023'
                                                    : 'Estimasi pengiriman 2-3 hari kerja'}
                                            </p>
                                            <OrderStatusBadge
                                                status={order.status}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
