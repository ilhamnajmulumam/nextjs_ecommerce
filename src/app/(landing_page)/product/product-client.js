'use client';

import Image from 'next/image';
import {
    SwatchBook,
    Package,
    PanelLeftDashed,
    PackageOpen,
    Banknote,
} from 'lucide-react';
import { useState } from 'react';

export default function ProductClient({ book }) {
    const [activeSection, setActiveSection] = useState('specification');

    return (
        <section>
            <main className="pt-32 px-6 pb-16 max-w-7xl mx-auto ">
                {/* Breadcrumb */}
                <p className="text-sm text-gray-500">
                    Beranda / Produk /{' '}
                    <span className="text-gray-800">Detail Produk</span>
                </p>

                {/* Card */}
                <div className="mt-8 bg-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src={book.image}
                            width={500}
                            height={700}
                            alt={book.title}
                            className="rounded-lg w-auto h-170 object-cover"
                            unoptimized
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">
                            {book.title}
                        </h1>
                        <p className="text-gray-500 mt-1">
                            oleh{' '}
                            <span className="font-semibold">{book.author}</span>
                        </p>
                        <p className="text-sm mt-2">
                            SKU:{' '}
                            <span className="font-semibold">{book.sku}</span>
                        </p>

                        {/* Price */}
                        <div className="mt-3">
                            <p className="text-4xl font-bold text-orange-500">
                                Rp {book.price.toLocaleString('id-ID')}
                            </p>
                            <p className="text-sm text-green-600 mt-1">
                                {book.ketersediaan}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-gray-500 text-justify">
                            {book.description}
                        </p>

                        {/* Tabs */}
                        <div className="flex mt-6  ">
                            <button
                                onClick={() =>
                                    setActiveSection('specification')
                                }
                                className={`flex items-center gap-2 pb-3 font-semibold px-3 ${
                                    activeSection === 'specification'
                                        ? 'border-b-2 border-orange-500 text-orange-500'
                                        : 'text-gray-500 hover:text-orange-500'
                                }`}
                            >
                                <SwatchBook size={18} />
                                Spesifikasi
                            </button>

                            <button
                                onClick={() => setActiveSection('shipping')}
                                className={`flex items-center gap-2 pb-3 font-semibold px-3 ${
                                    activeSection === 'shipping'
                                        ? 'border-b-2 border-orange-500 text-orange-500'
                                        : 'text-gray-500 hover:text-orange-500'
                                }`}
                            >
                                <Package size={18} />
                                Pengiriman
                            </button>

                            <button
                                onClick={() => setActiveSection('guide')}
                                className={`flex items-center gap-2 pb-3 font-semibold px-3 ${
                                    activeSection === 'guide'
                                        ? 'border-b-2 border-orange-500 text-orange-500'
                                        : 'text-gray-500 hover:text-orange-500'
                                }`}
                            >
                                <PanelLeftDashed size={18} />
                                Panduan
                            </button>
                        </div>

                        {activeSection === 'specification' && (
                            <div className="mt-6 border rounded-sm">
                                <table className="w-full text-sm border border-gray-200">
                                    <tbody>
                                        {[
                                            ['Penulis', book.author],
                                            ['Institusi', book.institution],
                                            ['Kategori', book.category],
                                            ['Bidang Ilmu', book.bidangIlmu],
                                            ['ISBN', book.isbn],
                                            ['Ukuran', book.ukuran],
                                            ['Jumlah Halaman', book.halaman],
                                            ['Tahun Terbit', book.tahun],
                                        ].map(([label, value]) => (
                                            <tr
                                                key={label}
                                                className="border-b last:border-none"
                                            >
                                                <td className="px-4 py-3 font-medium bg-gray-50 w-1/3">
                                                    {label}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeSection === 'shipping' && (
                            <div className="mt-6 border rounded-sm p-4 flex flex-col gap-6">
                                <div className="flex gap-4">
                                    <PackageOpen size={40} />
                                    <div>
                                        <h2 className="font-semibold text-xl">
                                            Pengiriman
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            Estimasi 3–5 hari kerja menggunakan
                                            ekspedisi terpercaya.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Banknote size={40} />
                                    <div>
                                        <h2 className="font-semibold text-xl">
                                            Pembayaran
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            Mendukung transfer bank & e-wallet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'guide' && (
                            <div className="mt-6 border rounded-sm p-4">
                                <h2 className="font-semibold text-xl mb-2">
                                    Panduan Pembelian
                                </h2>
                                <ol className="list-decimal list-inside text-sm text-gray-500">
                                    <li className="mb-1">
                                        Pilih produk yang Anda inginkan dan klik
                                        tombol &quot;Tambah ke Keranjang&quot;.
                                    </li>
                                    <li className="mb-1">
                                        Setelah selesai memilih produk, klik
                                        ikon keranjang belanja di pojok kanan
                                        atas layar.
                                    </li>
                                    <li className="mb-1">
                                        Klik tombol &quot;Beli Sekarang&quot;
                                        pada keranjang belanja.
                                    </li>
                                    <li className="mb-1">
                                        Masukkan alamat pengiriman dan klik
                                        tombol &quot;Bayar Sekarang&quot;.
                                    </li>
                                    <li className="mb-1">
                                        Pilih metode pembayaran yang Anda
                                        inginkan dan ikuti instruksi untuk
                                        menyelesaikan pembayaran.
                                    </li>
                                    <li className="mb-1">
                                        Setelah pembayaran berhasil, Anda akan
                                        menerima email konfirmasi beserta detail
                                        pesanan Anda.
                                    </li>
                                </ol>
                            </div>
                        )}

                        <hr className="my-6" />
                        <div>
                            <h3 className="text-xl font-bold">
                                Beli buku ini secara online
                            </h3>
                            <p className="text-sm text-gray-500">
                                Dapatkan kemudahan berbelanja buku favorit Anda
                                secara online dengan berbagai metode pembayaran
                                yang aman dan terpercaya.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-4 stretch">
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                                    Tambah ke Keranjang
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition ml-4">
                                    Shopee
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition ml-4">
                                    Tokopedia
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition ml-4">
                                    Google Books
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition ml-4">
                                    Baca Buku
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition ml-4">
                                    Via WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
