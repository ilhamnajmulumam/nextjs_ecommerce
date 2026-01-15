import ProductClient from './product-client';

export default function ProductPage() {
    const book = {
        sku: 'SKU-001',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        image: 'https://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg',
        description:
            "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
        price: 100000,
        institution: 'Penerbit A',
        category: 'Fiksi',
        bidangIlmu: 'Pendidikan',
        isbn: '1234567890',
        ukuran: '20 x 30 cm',
        halaman: 300,
        ketersediaan: 'Tersedia',
        tahun: 1925,
    };

    return (
        <div className="min-h-screen ">
            <ProductClient book={book} />
        </div>
    );
}
