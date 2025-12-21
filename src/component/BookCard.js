import Image from 'next/image';

export default function BookCard({ title, author, image }) {
    return (
        <div className="w-50 h-80 m-2 p-2  bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="relative w-full h-55 rounded-t-xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>
            <div className="p-2">
                <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>
                <p className="text-xs text-gray-500 mt-1">{author}</p>
            </div>
        </div>
    );
}
