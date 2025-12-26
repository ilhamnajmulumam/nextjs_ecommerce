'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    ArrowLeftRight,
    CirclePlus,
    LogOut,
    SlidersVertical,
} from 'lucide-react';
import Image from 'next/image';

export default function UserNavigationBar({ session }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        router.push('/login');
    };

    const menus = [
        {
            name: 'Dashboard',
            href: '/user',
            icon: <LayoutDashboard size={20} />,
        },
        {
            name: 'Orders History',
            href: '/user/orders-history',
            icon: <ArrowLeftRight size={20} />,
        },
        {
            name: 'Wishlists',
            href: '/user/wishlists',
            icon: <CirclePlus size={20} />,
        },
        {
            name: 'Profile Settings',
            href: '/user/profile-settings',
            icon: <SlidersVertical size={20} />,
        },
    ];

    return (
        <aside className="flex flex-col w-[20%] md:w-72 h-full bg-white border-r border-gray-200 shadow-sm">
            {/* Header */}
            <div className="px-4 py-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <Image
                        src="/profile.jpg"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full w-15 h-15 object-cover object-top border-2 border-indigo-500"
                    />
                    <div className="hidden md:block">
                        <h1 className="text-lg font-semibold text-gray-900">
                            {session.user.name}
                        </h1>
                        <p className="text-sm text-gray-400">User Platinum</p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-1 mt-4">
                {menus.map((menu) => {
                    const isActive = pathname === menu.href;

                    return (
                        <Link
                            key={menu.name}
                            href={menu.href}
                            className={`flex items-center gap-3 px-4 py-3 mx-3 rounded-xl transition-all
                                ${
                                    isActive
                                        ? 'bg-linear-to-r from-[#f59c0c] to-[#fa7b14] text-white shadow-md'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }
                                justify-center md:justify-start
                            `}
                        >
                            {menu.icon}
                            <span className="hidden md:inline font-medium">
                                {menu.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout */}
            <button
                onClick={handleSignOut}
                className="flex items-center gap-3 px-4 py-3 mx-3 mt-auto mb-4 rounded-xl text-red-500 hover:bg-red-50 transition-all justify-center md:justify-start"
            >
                <LogOut size={20} />
                <span className="hidden md:inline font-medium">Logout</span>
            </button>
        </aside>
    );
}
