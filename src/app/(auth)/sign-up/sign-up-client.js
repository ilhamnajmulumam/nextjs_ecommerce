'use client';
import { signUp } from '@/lib/auth-action';
import { useState } from 'react';
import Link from 'next/link';

export default function SignUpClient() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Invalid email format');
            setIsLoading(false);
            return;
        }

        try {
            const result = await signUp({ email, password, name });
            if (!result.user) {
                setError(result.error || 'Sign up failed');
            }
        } catch (err) {
            setError(
                `Authentication error: ${
                    err instanceof Error ? err.message : 'Unknown error'
                }`
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-7xl w-full bg-white shadow sm:rounded-lg flex flex-1">
            {/* Left */}
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                {/* Header */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-extrabold text-center text-indigo-600">
                        Create Account
                    </h1>
                    <p className="mt-4 text-sm text-center text-gray-500">
                        Daftar untuk mulai menggunakan aplikasi
                    </p>
                </div>

                <form
                    onSubmit={handleSignUp}
                    className="mt-12 flex flex-col items-center"
                >
                    <h2 className="text-2xl xl:text-3xl font-extrabold">
                        Sign Up
                    </h2>

                    <div className="w-full flex-1 mt-8">
                        {/* Social buttons */}
                        <div className="flex flex-col items-center">
                            <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition hover:shadow">
                                <span>Sign Up with Google</span>
                            </button>

                            <button className="w-full max-w-xs mt-5 font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition hover:shadow">
                                <span>Sign Up with GitHub</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="my-12 border-b text-center">
                            <span className="px-2 text-sm text-gray-600 bg-white relative -top-3">
                                Or sign up with e-mail
                            </span>
                        </div>

                        {/* Form */}
                        <div className="mx-auto max-w-xs">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-8 py-4 rounded-lg bg-gray-100 border focus:outline-none focus:bg-white"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full mt-5 px-8 py-4 rounded-lg bg-gray-100 border focus:outline-none focus:bg-white"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="w-full mt-5 px-8 py-4 rounded-lg bg-gray-100 border focus:outline-none focus:bg-white"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full mt-5 px-8 py-4 rounded-lg bg-gray-100 border focus:outline-none focus:bg-white"
                                required
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />

                            {error && (
                                <p className="mt-4 text-sm text-red-600 text-center">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="mt-5 w-full py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                            >
                                {isLoading ? 'Signing Up...' : 'Sign Up'}
                            </button>

                            {/* Login CTA */}
                            <p className="mt-6 text-sm text-center text-gray-600">
                                Sudah punya akun?{' '}
                                <Link
                                    href="/login"
                                    className="text-indigo-600 font-semibold hover:underline"
                                >
                                    Login di sini
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>

            {/* Right */}
            <div className="hidden lg:flex flex-1 bg-indigo-100 items-center justify-center">
                <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
                    }}
                />
            </div>
        </div>
    );
}
