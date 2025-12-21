import NavigationBar from '@/component/NavigationBar';
import { Flame } from 'lucide-react';
import BooksSlider from '@/component/BooksSlider';

export default function Home() {
    const books = [
        {
            id: 1,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 3,
            title: '1984',
            author: 'George Orwell',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 4,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 5,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 6,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 7,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 8,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 9,
            title: 'The Da Vinci Code',
            author: 'Dan Brown',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
        {
            id: 10,
            title: 'The Hunger Games',
            author: 'Suzanne Collins',
            image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        },
    ];

    return (
        <div className="px-10">
            <NavigationBar />

            <main className="mt-10">
                <h1 className="text-2xl font-bold">Koleksi Buku</h1>
                <p className="mt-2 text-gray-600">
                    Jelajahi berbagai koleksi buku menarik di toko kami.
                </p>

                <section className="mt-10">
                    <h2 className="flex items-center text-xl font-semibold">
                        <Flame size={24} className="text-red-500 mr-2" />
                        Popular Books
                    </h2>

                    <BooksSlider books={books} />
                </section>
            </main>
        </div>
    );
}
