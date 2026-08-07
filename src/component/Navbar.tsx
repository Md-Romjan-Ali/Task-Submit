'use client';

import Link from 'next/link';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from '@heroui/react';
import { HiCodeBracket, HiBars3 } from 'react-icons/hi2';

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'My Task', href: '/my-tasks' },
    { label: 'All Task', href: '/all-tasks' },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-cyan-500/10 dark:border-cyan-500/20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Left Side: Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-2 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 group-hover:scale-105 transition-transform duration-200">
                            <HiCodeBracket className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <span className="font-extrabold text-xl tracking-wide text-slate-800 dark:text-white">
                            Program<span className="text-cyan-500">Hero</span>
                        </span>
                    </Link>

                    {/* Center: Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/30 transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200"
                        >
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu: HeroUI Dropdown (Zero useState) */}
                    <div className="md:hidden w-50">

                        <Dropdown>
                            <Button aria-label="Menu" variant="secondary">
                                Actions
                            </Button>
                            <Dropdown.Popover>
                                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                    {/* Navigation Links */}
                                    {navLinks.map((link) => (
                                        <DropdownItem key={link.href} className="p-0 text-slate-700 dark:text-slate-200">
                                            <Link href={link.href} className="block w-full px-3 py-2 text-sm font-medium">
                                                {link.label}
                                            </Link>
                                        </DropdownItem>
                                    ))}
                                    <DropdownItem>
                                        <div className="flex flex-col gap-2 p-1">
                                            <Link
                                                href="/login"
                                                className="w-full text-center py-2 text-sm font-semibold rounded-lg border border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/10 transition-colors"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                href="/register"
                                                className="w-full text-center py-2 text-sm font-semibold rounded-lg bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    </DropdownItem>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>

                    </div>

                </div>
            </div>
        </nav>
    );
}