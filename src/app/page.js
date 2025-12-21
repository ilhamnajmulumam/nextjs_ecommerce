import NavigationBar from '@/component/NavigationBar';
import { Flame, Archive } from 'lucide-react';
import BooksSlider from '@/component/BooksSlider';
import Image from 'next/image';

export default function Home() {
    const books = [
        {
            id: 1,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 100000,
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 125000,
        },
        {
            id: 3,
            title: '1984',
            author: 'George Orwell',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 90000,
        },
        {
            id: 4,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 110000,
        },
        {
            id: 5,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 95000,
        },
        {
            id: 6,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 120000,
        },
        {
            id: 7,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 300000,
        },
        {
            id: 8,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 85000,
        },
        {
            id: 9,
            title: 'The Da Vinci Code',
            author: 'Dan Brown',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 130000,
        },
        {
            id: 10,
            title: 'The Hunger Games',
            author: 'Suzanne Collins',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
            price: 115000,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <NavigationBar />

            {/* Content */}
            <main className="pt-32 px-10 pb-10 max-w-screen-2xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl font-bold">Koleksi Buku</h1>
                <p className="mt-2 text-gray-600">
                    Jelajahi berbagai koleksi buku menarik di toko kami.
                </p>

                {/* Popular Books */}
                <section className="mt-12">
                    <h2 className="flex items-center text-2xl font-semibold mb-4">
                        <Flame size={26} className="text-red-500 mr-2" />
                        Popular Books
                    </h2>

                    <BooksSlider books={books} />
                </section>

                {/* Archives */}
                <section className="mt-16">
                    <div className="flex justify-between items-center w-full mb-8">
                        <div>
                            <h2 className="flex items-center text-2xl font-semibold">
                                <Archive
                                    size={26}
                                    className="text-blue-600 mr-2"
                                />
                                Archives
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Temukan berbagai buku dari arsip lengkap kami.
                            </p>
                        </div>

                        <a
                            href="#"
                            className="text-blue-600 font-medium hover:underline whitespace-nowrap"
                        >
                            View All Archives →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {books.map((book) => (
                            <div
                                key={book.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
                            >
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    width={300}
                                    height={350}
                                    className="w-full object-contain bg-gray-100"
                                    unoptimized
                                />

                                <div className="p-4 flex flex-col flex-1">
                                    <h3 className="text-lg font-semibold">
                                        {book.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        by {book.author}
                                    </p>

                                    <p className="mt-2 text-lg font-bold text-blue-600">
                                        Rp {book.price.toLocaleString('id-ID')}
                                    </p>

                                    <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
