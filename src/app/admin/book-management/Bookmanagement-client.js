'use client';

import { DeleteBookButton } from '@/component/DeleteBookButton';
import { Edit, Plus, Search, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export function BookmanagementClient({ initialBooks, categories }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const toggleCategory = (id) => {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const filteredBooks = useMemo(() => {
        return initialBooks.filter((book) => {
            const keyword = searchTerm.toLowerCase();

            const matchSearch =
                book.title.toLowerCase().includes(keyword) ||
                book.author.toLowerCase().includes(keyword) ||
                book.isbn.toLowerCase().includes(keyword);

            const matchCategories =
                selectedCategories.length === 0 ||
                book.categories.some((cat) =>
                    selectedCategories.includes(cat.id)
                );

            return matchSearch && matchCategories;
        });
    }, [initialBooks, searchTerm, selectedCategories]);

    return (
        <section className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-3xl font-bold text-slate-900">
                    Manajemen Buku
                </h2>

                <a
                    href="/admin/book-management/new-book"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 font-medium shadow-sm"
                >
                    <Plus className="w-4 h-4" />
                    Tambah Buku
                </a>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Filter */}
                <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Cari judul, penulis, atau ISBN..."
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsCategoryOpen((o) => !o)}
                            className="border border-slate-200 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:bg-slate-50"
                        >
                            Filter Kategori
                            {selectedCategories.length > 0 && (
                                <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                                    {selectedCategories.length}
                                </span>
                            )}
                        </button>

                        {isCategoryOpen && (
                            <div className="absolute z-20 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg p-3 space-y-2">
                                {categories.map((cat) => (
                                    <label
                                        key={cat.id}
                                        className="flex items-center gap-2 text-sm cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(
                                                cat.id
                                            )}
                                            onChange={() =>
                                                toggleCategory(cat.id)
                                            }
                                            className="rounded border-slate-300"
                                        />
                                        {cat.name}
                                    </label>
                                ))}

                                <button
                                    onClick={() => setSelectedCategories([])}
                                    className="text-xs text-indigo-600 hover:underline mt-2"
                                >
                                    Reset Kategori
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-left">Buku</th>
                                <th className="px-6 py-4 text-left">
                                    Kategori
                                </th>
                                <th className="px-6 py-4 text-left">Harga</th>
                                <th className="px-6 py-4 text-center">Stok</th>
                                <th className="px-6 py-4 text-center">Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {filteredBooks.map((book) => (
                                <tr
                                    key={book.id}
                                    className="hover:bg-slate-50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={book.cover}
                                                alt={book.title}
                                                width={48}
                                                height={64}
                                                unoptimized
                                                className="w-12 h-16 rounded object-cover shadow-sm"
                                            />
                                            <div>
                                                <p className="font-medium text-slate-900">
                                                    {book.title}
                                                </p>
                                                <p className="text-slate-500 text-sm">
                                                    {book.author}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 flex gap-2">
                                        {book.categories.map((cat) => (
                                            <span
                                                key={cat.id}
                                                className="flex gap-2 flex-wrap px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800"
                                            >
                                                <Tag className="w-4 h-4" />
                                                {cat.name}
                                            </span>
                                        ))}
                                    </td>

                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        Rp {book.price.toLocaleString('id-ID')}
                                    </td>

                                    <td className="px-6 py-4 font-medium text-center text-slate-900">
                                        {book.stock}
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-center gap-2">
                                            <Link
                                                href={`/admin/book-management/${book.id}/edit-book`}
                                                className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Link>

                                            <DeleteBookButton
                                                bookId={book.id}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
                    <span>
                        Menampilkan 1–{initialBooks.length} dari{' '}
                        {initialBooks.length} buku
                    </span>

                    <div className="flex gap-2">
                        <button
                            disabled
                            className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50"
                        >
                            Sebelumnya
                        </button>
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
