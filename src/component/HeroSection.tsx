'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@heroui/react';
import { HiPlay, HiDocumentCheck } from 'react-icons/hi2';
import Image from 'next/image';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        // Force autoplay execution once mounted
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Fallback for strict browser autoplay restriction policies
            });
        }
    }, []);

    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16 lg:py-24">
            {/* Background Image - Made visible with high clarity */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 transition-all duration-300"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80')`,
                }}
            />

            {/* Glassmorphism Tint - Reduced opacity to 50% so background is clearly visible */}
            <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-950/50 backdrop-blur-sm -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Side: Content */}
                    <div className="flex flex-col items-start space-y-6 text-left">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 dark:bg-cyan-500/30 border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                            <HiDocumentCheck className="w-4 h-4 text-cyan-500" />
                            <span>Smart Task Evaluation Platform</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                            Submit Your Code. <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Track Progress
                            </span> In Real-Time.
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 max-w-xl leading-relaxed font-medium">
                            Streamline your programming assignments effortlessly. Submit projects, receive instant automated feedback, and level up your software engineering skills seamlessly.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                            <Button
                                size="lg"
                                className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold px-8 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200"
                            >
                                Submit Task Now
                            </Button>

                            <Button
                                size="lg"
                                className="border-2 border-cyan-500/60 hover:border-cyan-500 text-slate-900 dark:text-white hover:bg-cyan-500/10 font-semibold px-8 backdrop-blur-md transition-all duration-200"
                            >
                                Explore All Tasks
                            </Button>
                        </div>

                    </div>

                    {/* Right Side: Continuous Autoplay Video (No Controls) */}
                    <div className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg aspect-video rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 group">
                            <Image
                                height={400}
                                width={600}
                                src="https://static.vecteezy.com/system/resources/thumbnails/006/537/224/small/abstract-modern-tech-of-programming-code-screen-developer-photo.jpg"
                                alt="code"
                            />
                            {/* Status Badge */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-white text-xs font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                                    </span>
                                    <span>Live Coding Stream</span>
                                </div>
                                <HiPlay className="w-4 h-4 text-cyan-400" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}