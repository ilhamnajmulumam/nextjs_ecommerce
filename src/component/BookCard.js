import Image from 'next/image';

export default function BookCard({ title, author, image, price }) {
    return (
        <div className="w-72 h-100 m-2 p-2  bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative w-full h-80     rounded-t-xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>
            <div className="p-2 flex flex-col">
                <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>
                <p className="text-xs text-gray-500 mt-1">{author}</p>
                <p className="text-xs text-gray-500 mt-1  font-bold">
                    Rp. {price}
                </p>
            </div>
        </div>
    );
}
