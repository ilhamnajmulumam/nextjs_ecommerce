'use client';

import { Plus, Search, Edit, Trash2, Tag } from 'lucide-react';
import { useState } from 'react';

export default function CategoriesClient({ categories: initialCategories }) {
    const [categories, setCategories] = useState(initialCategories || []);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleAdd = () => {
        if (!formData.name.trim()) return;

        const newCategory = {
            id: crypto.randomUUID(), // ✅ FIX
            name: formData.name,
            description: formData.description,
            bookCount: 0,
        };

        setCategories([...categories, newCategory]);
        handleCancel();
    };

    const handleEdit = (category) => {
        setEditingCategory(category);
        setFormData({
            name: category.name,
            description: category.description,
        });
        setIsAddModalOpen(true);
    };

    const handleUpdate = () => {
        if (!editingCategory || !formData.name.trim()) return;

        setCategories(
            categories.map((cat) =>
                cat.id === editingCategory.id ? { ...cat, ...formData } : cat
            )
        );

        handleCancel();
    };

    const handleDelete = (id) => {
        if (confirm('Yakin ingin menghapus kategori ini?')) {
            setCategories(categories.filter((cat) => cat.id !== id));
        }
    };

    const handleCancel = () => {
        setEditingCategory(null);
        setIsAddModalOpen(false);
        setFormData({ name: '', description: '' });
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center">
                <h1 className="font-bold text-3xl">Categories Management</h1>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 ml-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    <Plus size={20} />
                    Add New Category
                </button>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl p-6 mt-6 flex flex-col gap-4">
                {/* Search */}
                <div className="flex items-center gap-3 border border-gray-300 px-4 py-2 w-1/2 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search categories..."
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 border-b">
                            <tr>
                                <th className="px-6 py-4">Nama Kategori</th>
                                <th className="px-6 py-4">Deskripsi</th>
                                <th className="px-6 py-4">Jumlah Buku</th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {categories.map((category) => (
                                <tr
                                    key={category.id}
                                    className="hover:bg-slate-50"
                                >
                                    <td className="px-6 py-4 flex gap-3 items-center">
                                        <div className="bg-indigo-100 p-2 rounded-lg">
                                            <Tag className="w-4 h-4 text-indigo-600" />
                                        </div>
                                        <span className="font-medium">
                                            {category.name}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">
                                        {category.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700">
                                            {category.bookCount} buku
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleEdit(category)}
                                            className="p-2 hover:text-indigo-600"
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(category.id)
                                            }
                                            className="p-2 hover:text-red-600"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-sm text-slate-500">
                    Menampilkan {categories.length} kategori
                </div>
            </div>

            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">
                            {editingCategory
                                ? 'Edit Category'
                                : 'Add New Category'}
                        </h2>

                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Nama kategori"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                            <textarea
                                placeholder="Deskripsi"
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                                className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 rounded-lg border hover:bg-gray-50"
                            >
                                Batal
                            </button>

                            <button
                                onClick={
                                    editingCategory ? handleUpdate : handleAdd
                                }
                                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                            >
                                {editingCategory ? 'Update' : 'Tambah'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
