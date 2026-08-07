'use client';

import {
    HiCommandLine,
    HiClock,
    HiAcademicCap,
    HiTrophy,
    HiShieldCheck,
    HiSparkles
} from 'react-icons/hi2';

interface Feature {
    icon: React.ElementType;
    title: string;
    description: string;
    badge?: string;
}

const features: Feature[] = [
    {
        icon: HiCommandLine,
        title: 'Instant Automated Feedback',
        description: 'No more waiting days for code reviews. Get real-time test execution results, execution metrics, and error diagnostics the second you submit.',
        badge: 'Real-time',
    },
    {
        icon: HiTrophy,
        title: 'Career-Ready Portfolio',
        description: 'Every completed assignment auto-syncs to your personal profile showcase, proving your actual coding skills directly to potential employers.',
        badge: 'Mission JP',
    },
    {
        icon: HiAcademicCap,
        title: 'Smart AI Code Analysis',
        description: 'Receive deep insights into code quality, algorithmic complexity (Big O), clean code practices, and tailored tips to optimize your logic.',
    },
    {
        icon: HiClock,
        title: 'Deadline & Streak Tracking',
        description: 'Stay accountable with automated deadline alerts, daily submission streaks, and milestone badges that keep your momentum going strong.',
    },
    {
        icon: HiShieldCheck,
        title: 'Plagiarism & Fraud Check',
        description: 'Ensure 100% authentic work. Built-in plagiarism detection validates unique solutions and builds trust across the community.',
    },
    {
        icon: HiSparkles,
        title: 'Leaderboard & Rewards',
        description: 'Earn points for bug-free, clean code submissions. Compete with top peers on the platform leaderboard and stand out to recruiters.',
    },
];

export default function WhySubmit() {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Decorative Cyan Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                    <HiSparkles className="w-4 h-4" />
                    <span>Why Choose Our Platform</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Why You Should <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Submit Your Tasks</span> Here
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                    Transform homework from a routine chore into your greatest learning advantage. Built by developers, for developers aiming for career excellence.
                </p>
            </div>

            {/* Grid Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="group relative p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-cyan-500/10 dark:border-cyan-500/20 hover:border-cyan-500/40 dark:hover:border-cyan-500/50 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                        >
                            <div>
                                {/* Header Row: Icon + Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    {feature.badge && (
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                                            {feature.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom Subtle Accent Line */}
                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <span>Learn how it works</span>
                                <span>&rarr;</span>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}