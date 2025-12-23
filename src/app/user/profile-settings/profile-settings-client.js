'use client';

import Image from 'next/image';

export default function ProfileSettingsClient({ user }) {
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
                <div className="lg:col-span-2 space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                defaultValue={user.name}
                                onChange={(e) => console.log(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                defaultValue={user.email}
                                onChange={(e) => console.log(e.target.value)}
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
                                type="text"
                                placeholder="Nomor Telepon"
                                defaultValue={user.phone}
                                onChange={(e) => console.log(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tanggal Bergabung
                            </label>
                            <input
                                type="date"
                                placeholder="Tanggal Bergabung"
                                defaultValue={user.joinDate}
                                onChange={(e) => console.log(e.target.value)}
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
                            rows={4}
                            placeholder="Alamat Pengiriman"
                            defaultValue={user.address}
                            onChange={(e) => console.log(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                        />
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button className="px-6 py-2 bg-linear-to-r from-[#f59c0c] to-[#fa7b14] text-white rounded-lg font-medium hover:opacity-90 transition">
                            Simpan Perubahan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
