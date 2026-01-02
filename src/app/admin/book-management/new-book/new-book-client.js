'use client';

import { addBook } from '@/lib/books-management-action';
import { useState } from 'react';

export default function NewBookClient({ categories }) {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (categoryId) => {
        setSelectedCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    return (
        <section className="max-w-3xl mx-auto space-y-6 bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="font-bold text-3xl text-slate-900 border-b pb-4">
                Form New Book
            </h2>

            <form action={addBook} className="grid grid-cols-1 gap-6">
                {/* Title */}
                <div>
                    <label className="label">Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Book Title"
                        className="input"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        placeholder="Book Description"
                        rows={3}
                        className="input"
                    />
                </div>

                {/* Author & ISBN */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="label">Author</label>
                        <input
                            name="author"
                            type="text"
                            placeholder="Author Name"
                            className="input"
                        />
                    </div>

                    <div>
                        <label className="label">ISBN</label>
                        <input
                            name="isbn"
                            type="text"
                            placeholder="ISBN Number"
                            className="input"
                        />
                    </div>
                </div>

                {/* Publisher & Year */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="label">Publisher</label>
                        <input
                            name="publisher"
                            type="text"
                            placeholder="Publisher Name"
                            className="input"
                        />
                    </div>

                    <div>
                        <label className="label">Year Published</label>
                        <input
                            name="publishedYear"
                            type="number"
                            placeholder="2024"
                            className="input"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <label className="label">Categories</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {categories.map((cat) => (
                            <label
                                key={cat.id}
                                className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg border hover:bg-gray-100 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    name="categoryIds"
                                    value={cat.id}
                                    className="rounded text-indigo-600"
                                />
                                {cat.name}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div>
                    <label className="label">Book Image</label>
                    <input
                        name="cover"
                        type="file"
                        accept="image/*"
                        className="input-file"
                    />
                </div>

                {/* Rating, Price, Stock */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <label className="label">Rating</label>
                        <input
                            name="rating"
                            type="number"
                            step="0.1"
                            placeholder="4.5"
                            className="input"
                        />
                    </div>

                    <div>
                        <label className="label">Price</label>
                        <input
                            name="price"
                            type="number"
                            placeholder="50000"
                            className="input"
                        />
                    </div>

                    <div>
                        <label className="label">Stock</label>
                        <input
                            name="stock"
                            type="number"
                            placeholder="10"
                            className="input"
                        />
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 font-semibold shadow-md w-fit"
                >
                    Save Book
                </button>
            </form>
        </section>
    );
}
