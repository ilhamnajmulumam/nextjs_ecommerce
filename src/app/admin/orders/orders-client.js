import { Funnel, FileDown, Search, Eye } from 'lucide-react';
import OrderStatusBadge from '@/component/OrderStatusBadge';

export default function OrdersClient({ orders }) {
    return (
        <div>
            <div className="flex  items-center justify-between">
                <h1 className="font-bold text-3xl">Orders</h1>
                <div className="flex gap-4">
                    <button className="flex items-center gap-4 bg-white text-black font-bold px-4 py-2 rounded-md mt-4 border border-gray-300">
                        <Funnel size={20} />
                        Filter Orders
                    </button>
                    <button className="flex items-center gap-4 bg-indigo-600 text-white font-bold px-4 py-2 rounded-md mt-4">
                        <FileDown size={20} />
                        Export Data
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-6 mt-6 flex gap-4 flex-col">
                <div className="flex items-center gap-3 border border-gray-300 bg-white px-4 py-2 w-2/4 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4">ID Pesanan</th>
                                <th className="px-6 py-4">Pelanggan</th>
                                <th className="px-6 py-4">Tanggal</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Total</th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="hover:bg-slate-50 transition-colors"
                                >
                                    <td className="px-6 py-4 font-medium text-indigo-600">
                                        #{order.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-slate-900">
                                            {order.customerName}
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            2 items
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">
                                        {new Date(
                                            order.date
                                        ).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </td>
                                    <td className="px-6 py-4">
                                        <OrderStatusBadge
                                            status={order.status}
                                        />
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        Rp {order.total.toLocaleString('id-ID')}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="inline-flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                                            <Eye className="w-3 h-3" />
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
