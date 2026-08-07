'use client';

import Link from 'next/link';
import { Button, Input } from '@heroui/react';
import {
    HiCodeBracket,
    HiEnvelope,
    HiPaperAirplane,
    HiHeart
} from 'react-icons/hi2';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaDiscord
} from 'react-icons/fa';

interface FooterLink {
    label: string;
    href: string;
}

const quickLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'My Task', href: '/my-tasks' },
    { label: 'All Task', href: '/all-tasks' },
    { label: 'Leaderboard', href: '/leaderboard' },
];

const resourceLinks: FooterLink[] = [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
    return (
        <footer className="relative z-10 w-full mt-20 border-t border-cyan-500/10 dark:border-cyan-500/20 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-colors duration-300">

            {/* Background Accent Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">

                    {/* Column 1: Brand & Logo (Exact Same Logo from Navbar) */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <div className="p-2 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 group-hover:scale-105 transition-transform duration-200">
                                <HiCodeBracket className="w-6 h-6 stroke-[1.5]" />
                            </div>
                            <span className="font-extrabold text-xl tracking-wide text-slate-800 dark:text-white">
                                Program<span className="text-cyan-500">Hero</span>
                            </span>
                        </Link>

                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-sm">
                            Empowering the next generation of full-stack developers. Submit assignments, run automated tests, and track your career growth in real-time.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {[
                                { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                                { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                                { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
                                { icon: FaDiscord, href: 'https://discord.com', label: 'Discord' },
                            ].map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Platform
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            {resourceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            Stay Updated
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Subscribe to get updates on new assignment releases and platform milestones.
                        </p>

                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 pt-1">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full"
                            />
                            <Button
                                size="sm"
                                type="submit"
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-md shadow-cyan-500/20"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <p>© {new Date().getFullYear()} ProgramHero. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        <span>Built with</span>
                        <HiHeart className="w-3.5 h-3.5 text-cyan-500 inline" />
                        <span>for developers worldwide.</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}