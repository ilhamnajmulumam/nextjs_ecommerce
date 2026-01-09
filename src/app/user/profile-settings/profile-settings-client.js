'use client';

import { updateUser } from '@/lib/user-profile-action';
import Image from 'next/image';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const initialState = {
    error: null,
    success: false,
    message: null,
};

export default function ProfileSettingsClient({ user }) {
    const [state, formAction] = useActionState(updateUser, initialState);
    const { pending } = useFormStatus();

    return (
        <div className="space-y-6">
            {/* Title */}
            <h1 className="font-bold text-3xl text-gray-900">Profile Saya</h1>

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left - Avatar */}
                <div className="flex flex-col items-center justify-center lg:items-start">
                    <Image
                        src="/profile.jpg"
                        alt="Profile Picture"
                        width={160}
                        height={160}
                        className="rounded-full object-cover w-40 h-40 border-4 border-indigo-500"
                    />
                    <button className="mt-5 w-40 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                        Ubah Foto Profil
                    </button>
                </div>

                {/* Right - Form */}
                <form action={formAction} className="lg:col-span-2 space-y-5">
                    <input type="hidden" name="userId" value={user.id} />
                    {/* ERROR MESSAGE */}
                    {state.error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                            {state.error}
                        </div>
                    )}

                    {/* SUCCESS MESSAGE */}
                    {state.success && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                            {state.message}
                        </div>
                    )}
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nama Lengkap
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nama Lengkap"
                                defaultValue={user.name}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                defaultValue={user.email}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nomor Telepon
                            </label>
                            <input
                                name="phoneNumber"
                                type="text"
                                placeholder="Nomor Telepon"
                                defaultValue={user.phoneNumber}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tanggal Bergabung
                            </label>
                            <input
                                type="date"
                                value={
                                    new Date(user.createdAt)
                                        .toISOString()
                                        .split('T')[0]
                                }
                                readOnly
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Alamat Pengiriman
                        </label>
                        <textarea
                            name="address"
                            rows={4}
                            placeholder="Alamat Pengiriman"
                            defaultValue={user.address}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                        />
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={pending}
                            className="px-6 py-2 bg-linear-to-r from-[#f59c0c] to-[#fa7b14] text-white rounded-lg font-medium hover:opacity-90 transition cursor-pointer"
                        >
                            {pending ? 'Menyimpan...' : 'Simpan'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
