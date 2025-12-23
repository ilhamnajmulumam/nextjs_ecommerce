import CategoriesClient from './categories-client';
import { categories } from '@/data/categories';

export default function CategoriesPage() {
    return (
        <div className="bg-gray-200 min-h-screen w-screen p-10">
            <CategoriesClient categories={categories} />
        </div>
    );
}
