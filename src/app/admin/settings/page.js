import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

export default function SettingPage() {
    return (
        <section className="bg-gray-100 w-full min-h-screen p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h1 className="text-3xl font-bold text-gray-800">
                    Dashboard Overview
                </h1>

                <select className="w-fit border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>7 Hari Terakhir</option>
                    <option>Bulan Ini</option>
                    <option>Tahun Ini</option>
                </select>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
                {/* Total Penjualan */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Total Penjualan
                            </p>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Rp 10.000.000
                            </h2>
                            <p className="text-sm text-green-600 mt-1">
                                +15% dari bulan lalu
                            </p>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <DollarSign className="text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Total Pesanan */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Total Pesanan
                            </p>
                            <h2 className="text-2xl font-bold text-gray-800">
                                8
                            </h2>
                            <p className="text-sm text-green-600 mt-1">
                                +15% dari bulan lalu
                            </p>
                        </div>
                        <div className="bg-purple-100 p-3 rounded-lg">
                            <ShoppingBag className="text-purple-600" />
                        </div>
                    </div>
                </div>

                {/* Pelanggan Baru */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Pelanggan Baru
                            </p>
                            <h2 className="text-2xl font-bold text-gray-800">
                                8
                            </h2>
                            <p className="text-sm text-green-600 mt-1">
                                +15% dari bulan lalu
                            </p>
                        </div>
                        <div className="bg-green-100 p-3 rounded-lg">
                            <Users className="text-green-600" />
                        </div>
                    </div>
                </div>

                {/* Rata-rata Order */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Rata-rata Order
                            </p>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Rp 200.000
                            </h2>
                            <p className="text-sm text-green-600 mt-1">
                                +15% dari bulan lalu
                            </p>
                        </div>
                        <div className="bg-orange-100 p-3 rounded-lg">
                            <TrendingUp className="text-orange-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
                {/* Tren Penjualan */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-800 mb-6">
                        Tren Penjualan
                    </h2>

                    <div className="flex items-end gap-4 h-64">
                        {[40, 70, 55, 90, 65, 80, 50].map((value, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2 flex-1"
                            >
                                <div
                                    className="w-8 bg-blue-500 rounded-md"
                                    style={{ height: `${value}%` }}
                                />
                                <span className="text-xs text-gray-500">
                                    Hari {index + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Penjualan per Kategori */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-800 mb-6">
                        Penjualan per Kategori
                    </h2>

                    <div className="space-y-4">
                        {[
                            { name: 'Novel', value: 70 },
                            { name: 'Komik', value: 50 },
                            { name: 'Edukasi', value: 80 },
                            { name: 'Teknologi', value: 40 },
                        ].map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-700">
                                        {item.name}
                                    </span>
                                    <span className="text-gray-500">
                                        {item.value}%
                                    </span>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full">
                                    <div
                                        className="h-3 bg-green-500 rounded-full"
                                        style={{ width: `${item.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
