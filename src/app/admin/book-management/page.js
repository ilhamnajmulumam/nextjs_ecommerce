import { BookmanagementClient } from './Bookmanagement-client';
import { initialBooks } from '@/data/books';

export default function BookmanagementPage() {
    return (
        <div className="bg-gray-200 min-h-screen w-screen p-10">
            <BookmanagementClient initialBooks={initialBooks} />
        </div>
    );
}
