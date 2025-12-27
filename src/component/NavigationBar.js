import { BookText, Search, Menu } from 'lucide-react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { logout } from '@/lib/auth-action';
import NavAuthButton from './NavAuthButton';

export default async function NavigationBar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const handleSignOut = async () => {
        try {
            await logout();
            router.push('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <nav className="w-7/8 bg-white shadow-md px-8 py-4 flex items-center justify-between rounded-xl fixed top-4 left-1/2 -translate-x-1/2 z-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <BookText size={40} className="text-blue-600" />
                <h1 className="font-bold text-3xl tracking-wide">
                    Book<span className="text-blue-600">Store</span>
                </h1>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center border rounded-xl px-3 py-2 w-1/3 focus-within:ring-2 focus-within:ring-blue-500">
                <Search size={24} className="text-gray-500" />
                <input
                    type="text"
                    placeholder="Search books..."
                    className="ml-2 w-full outline-none text-lg"
                />
            </div>

            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Auth Button (CLIENT) */}
            <NavAuthButton session={session} />

            {/* Mobile Menu Icon */}
            <button className="md:hidden">
                <Menu size={32} />
            </button>
        </nav>
    );
}
