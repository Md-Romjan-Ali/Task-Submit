'use client';

import Link from 'next/link';
import { Input, Button, Spinner } from '@heroui/react';
import {

    HiCodeBracket
} from 'react-icons/hi2';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import AuthMessage from '@/component/auth/AuthMessage';

export default function LoginForm() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null)
    const [unverified, setUnverified] = useState(false)
    const loginHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage(null)
        setUnverified(false)
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())
        try {
            const { error } = await authClient.signIn.email({
                email: user.email as string,
                password: user.password as string,
            });
            if (error) {
                const errorText = error.message || 'Unable to sign in. Please check your details.'
                const isUnverified = errorText.toLowerCase().includes('not verified') || errorText.toLowerCase().includes('verify your email')
                setUnverified(isUnverified)
                setMessage({ type: 'error', text: isUnverified ? 'Please verify your email before signing in.' : errorText })
            }
        } catch {
            setMessage({ type: 'error', text: 'Unable to sign in. Please try again.' })
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 relative overflow-hidden">

            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full max-w-md p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 transition-colors duration-300">

                {/* Header & Brand Logo */}
                <div className="flex flex-col items-center text-center space-y-2 mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-2">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 group-hover:scale-105 transition-transform duration-200">
                            <HiCodeBracket className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        <span className="font-extrabold text-2xl tracking-wide text-slate-800 dark:text-white">
                            Program<span className="text-cyan-500">Hero</span>
                        </span>
                    </Link>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Welcome Back</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Sign in to access your tasks and dashboard
                    </p>
                </div>

                {/* HeroUI Form Container */}
                <form
                    onSubmit={loginHandle}
                    className="flex flex-col gap-4"
                >
                    {message && <AuthMessage type={message.type}>{message.text}</AuthMessage>}
                    {/* Email Address Input */}
                    <Input
                        required
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        color="primary"
                        className="border-cyan-500/30 hover:border-cyan-500 focus-within:border-cyan-500! bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors"

                    />

                    {/* Password Input with Show/Hide Toggle */}
                    <Input
                        required
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        color="primary"
                        className="border-cyan-500/30 hover:border-cyan-500 focus-within:border-cyan-500! bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors"

                    />

                    {/* Remember Me & Forgot Password Row */}
                    <div className="flex items-center justify-between py-1">
                        <Link href="/forgot-password" className="text-xs font-semibold text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200"
                    >
                        {
                            loading ?
                                <Spinner color="current" />

                                :
                                'Sign In'
                        }

                    </Button>
                </form>
                {unverified && (
                    <Link
                        href="/resend-verification"
                        className="mt-4 block text-center text-sm font-semibold text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                        Resend Verification Email
                    </Link>
                )}
                {/* Register Navigation Link */}
                <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    Do not have an account?{' '}
                    <Link
                        href="/register"
                        className="font-semibold text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 underline underline-offset-4"
                    >
                        Create Account
                    </Link>
                </div>

            </div>
        </div>
    );
}