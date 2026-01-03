'use client';

import { deleteBook } from '@/lib/books-management-action';
import { Trash } from 'lucide-react';

export function DeleteBookButton({ bookId }) {
    return (
        <form action={deleteBook}>
            <input type="hidden" name="bookId" value={bookId} />
            <button
                type="submit"
                className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                onClick={(e) => {
                    if (!confirm('Yakin ingin menghapus buku ini?')) {
                        e.preventDefault();
                    }
                }}
            >
                <Trash className="w-4 h-4" />
            </button>
        </form>
    );
}
