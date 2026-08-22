import Link from 'next/link';
import { HiCodeBracket } from 'react-icons/hi2';

interface AuthCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export default function AuthCard({ title, description, children }: AuthCardProps) {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="w-full max-w-md p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 transition-colors duration-300">
                <div className="flex flex-col items-center text-center space-y-2 mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group mb-2">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 group-hover:scale-105 transition-transform duration-200">
                            <HiCodeBracket className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        <span className="font-extrabold text-2xl tracking-wide text-slate-800 dark:text-white">
                            Program<span className="text-cyan-500">Hero</span>
                        </span>
                    </Link>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
                </div>
                {children}
            </div>
        </div>
    );
}