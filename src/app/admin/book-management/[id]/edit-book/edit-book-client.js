'use client';

import { updateBook } from '@/lib/books-management-action';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function EditBookClient({ book, categories }) {
    const router = useRouter();
    const [selectedCategories, setSelectedCategories] = useState(
        book.bookCategories.map((bc) => bc.category.id)
    );

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
                Form Update Book
            </h2>

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
                >
                    <ArrowLeft size={18} />
                    Kembali
                </button>
            </div>

            <form action={updateBook} className="grid grid-cols-1 gap-6">
                <input type="hidden" name="bookId" value={book.id} />

                {/* Title */}
                <div>
                    <label className="label">Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Book Title"
                        className="input"
                        defaultValue={book.title}
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
                        defaultValue={book.description}
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
                            defaultValue={book.author}
                        />
                    </div>

                    <div>
                        <label className="label">ISBN</label>
                        <input
                            name="isbn"
                            type="text"
                            placeholder="ISBN Number"
                            className="input"
                            defaultValue={book.isbn}
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
                            defaultValue={book.publisher}
                        />
                    </div>

                    <div>
                        <label className="label">Year Published</label>
                        <input
                            name="publishedYear"
                            type="number"
                            placeholder="2024"
                            className="input"
                            defaultValue={book.publishedYear}
                        />
                    </div>
                </div>

                {/* Categories */}
                <div>
                    {selectedCategories.map((id) => (
                        <input
                            key={id}
                            type="hidden"
                            name="categoryIds"
                            value={id}
                        />
                    ))}
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
                                    checked={selectedCategories.includes(
                                        cat.id
                                    )}
                                    onChange={() => toggleCategory(cat.id)}
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
                            defaultValue={book.rating}
                        />
                    </div>

                    <div>
                        <label className="label">Price</label>
                        <input
                            name="price"
                            type="number"
                            placeholder="50000"
                            className="input"
                            defaultValue={book.price}
                        />
                    </div>

                    <div>
                        <label className="label">Stock</label>
                        <input
                            name="stock"
                            type="number"
                            placeholder="10"
                            className="input"
                            defaultValue={book.stock}
                        />
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 font-semibold shadow-md w-fit"
                >
                    Update Book
                </button>
            </form>
        </section>
    );
}
