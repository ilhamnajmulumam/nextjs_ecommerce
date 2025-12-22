'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    ArrowLeftRight,
    CirclePlus,
    ChartColumnBig,
    LogOut,
    SlidersVertical,
    UserStar,
    Settings,
} from 'lucide-react';
// import { signOut } from 'next-auth/react'; // aktifkan jika pakai next-auth

export default function AdminNavigationBar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            // await signOut();
            router.push('/sign-in');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const menus = [
        {
            name: 'Dashboard',
            href: '/admin',
            icon: <LayoutDashboard size={22} />,
        },
        {
            name: 'Manage Books',
            href: '/admin/manage-books',
            icon: <ArrowLeftRight size={22} />,
        },
        {
            name: 'Orders',
            href: '/admin/orders',
            icon: <CirclePlus size={22} />,
        },
        {
            name: 'Categories',
            href: '/admin/categories',
            icon: <SlidersVertical size={22} />,
        },

        {
            name: 'Reports',
            href: '/admin/reports',
            icon: <ChartColumnBig size={22} />,
        },
        {
            name: 'Settings',
            href: '/admin/settings',
            icon: <Settings size={22} />,
        },
    ];

    return (
        <aside className="flex flex-col w-[20%] md:w-72 h-screen bg-[#0f1729] text-white shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col px-4 py-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <UserStar size={32} className="text-blue-500" />
                    <h1 className="hidden md:block text-2xl font-bold text-blue-500">
                        Admin Panel
                    </h1>
                </div>
                <p className="hidden md:block text-sm text-gray-400 mt-1">
                    Book Store Manager
                </p>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-1 mt-4">
                {menus.map((menu) => {
                    const isActive = pathname === menu.href;

                    return (
                        <Link
                            key={menu.name}
                            href={menu.href}
                            className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-all
                                ${
                                    isActive
                                        ? 'bg-blue-600 text-white font-semibold'
                                        : 'text-gray-300 hover:bg-white/10'
                                }
                                justify-center md:justify-start
                            `}
                        >
                            {menu.icon}
                            <span className="hidden md:inline">
                                {menu.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout */}
            <button
                onClick={handleSignOut}
                className="flex items-center gap-3 px-4 py-3 mx-2 mt-auto mb-4 rounded-lg
                           text-red-400 hover:bg-red-500/10 transition-all
                           justify-center md:justify-start"
            >
                <LogOut size={22} />
                <span className="hidden md:inline">Logout</span>
            </button>
        </aside>
    );
}
