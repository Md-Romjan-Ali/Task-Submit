'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input, Button } from '@heroui/react';
import {
    HiUser,
    HiEnvelope,
    HiLockClosed,
    HiEye,
    HiEyeSlash,
    HiCodeBracket
} from 'react-icons/hi2';

export default function RegisterForm() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full max-w-md p-8 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">

                {/* Header & Logo */}
                <div className="flex flex-col items-center text-center space-y-2 mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-2">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 group-hover:scale-105 transition-transform duration-200">
                            <HiCodeBracket className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        <span className="font-extrabold text-2xl tracking-wide text-slate-800 dark:text-white">
                            Program<span className="text-cyan-500">Hero</span>
                        </span>
                    </Link>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Create an Account</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Join to submit tasks and track your coding progress
                    </p>
                </div>

                {/* Form Elements */}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

                    {/* Name Field */}
                    <div>
                        <Input
                            required
                            name="name"
                            type="text"
                            label="Full Name"
                            placeholder="Enter your name"
                            labelPlacement="outside"
                            startContent={<HiUser className="text-slate-400 w-5 h-5 pointer-events-none" />}
                            variant="bordered"
                            classNames={{
                                inputWrapper: "border-cyan-500/30 hover:border-cyan-500 focus-within:border-cyan-500 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm",
                                label: "text-slate-700 dark:text-slate-200 font-medium text-sm",
                            }}
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <Input
                            required
                            name="email"
                            type="email"
                            label="Email Address"
                            placeholder="Enter your email"
                            labelPlacement="outside"
                            startContent={<HiEnvelope className="text-slate-400 w-5 h-5 pointer-events-none" />}
                            variant="bordered"
                            classNames={{
                                inputWrapper: "border-cyan-500/30 hover:border-cyan-500 focus-within:border-cyan-500 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm",
                                label: "text-slate-700 dark:text-slate-200 font-medium text-sm",
                            }}
                        />
                    </div>

                    {/* Password Field with Show/Hide Toggle */}
                    <div>
                        <Input
                            required
                            name="password"
                            type={isVisible ? "text" : "password"}
                            label="Password"
                            placeholder="Create a strong password"
                            labelPlacement="outside"
                            startContent={<HiLockClosed className="text-slate-400 w-5 h-5 pointer-events-none" />}
                            endContent={
                                <button
                                    type="button"
                                    onClick={toggleVisibility}
                                    aria-label="toggle password visibility"
                                    className="focus:outline-none text-slate-400 hover:text-cyan-500 transition-colors"
                                >
                                    {isVisible ? (
                                        <HiEyeSlash className="w-5 h-5" />
                                    ) : (
                                        <HiEye className="w-5 h-5" />
                                    )}
                                </button>
                            }
                            variant="bordered"
                            classNames={{
                                inputWrapper: "border-cyan-500/30 hover:border-cyan-500 focus-within:border-cyan-500 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm",
                                label: "text-slate-700 dark:text-slate-200 font-medium text-sm",
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 mt-2"
                    >
                        Register Account
                    </Button>
                </form>

                {/* Login Redirect Link */}
                <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="font-semibold text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 underline underline-offset-4"
                    >
                        Sign In
                    </Link>
                </div>

            </div>
        </div>
    );
}