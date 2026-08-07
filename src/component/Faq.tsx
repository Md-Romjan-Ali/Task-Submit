'use client';

import { Accordion, AccordionItem } from '@heroui/react';
import { BiChevronDown } from 'react-icons/bi';
import {
    HiUserPlus,
    HiCloudArrowUp,
    HiQuestionMarkCircle,
    HiSparkles,
    HiKey,
    HiCheckBadge,
    HiDocumentText,
    HiExclamationTriangle
} from 'react-icons/hi2';

interface FAQItem {
    key: string;
    question: string;
    answer: React.ReactNode;
    icon: React.ElementType;
}

const faqs: FAQItem[] = [
    {
        key: 'create-account',
        question: 'How do I create an account on the platform?',
        icon: HiUserPlus,
        answer: (
            <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p>Creating an account takes less than a minute. Follow these simple steps:</p>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                    <li>Click the <strong className="text-cyan-500">Register</strong> button on the top right of the navigation bar.</li>
                    <li>Fill in your full name, email address, and choose a secure password.</li>
                    <li>Alternatively, click <strong>Continue with GitHub</strong> or <strong>Google</strong> for instant 1-click registration.</li>
                    <li>Verify your email address via the link sent to your inbox to activate your student/developer profile.</li>
                </ol>
            </div>
        ),
    },
    {
        key: 'submit-task',
        question: 'How do I submit an assignment or task?',
        icon: HiCloudArrowUp,
        answer: (
            <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p>Once logged into your dashboard, submitting a task is straightforward:</p>
                <ol className="list-decimal list-inside space-y-2 pl-1">
                    <li>Navigate to <strong className="text-cyan-500">All Tasks</strong> or your assigned module.</li>
                    <li>Select the specific task you want to complete and click <strong>View Details</strong>.</li>
                    <li>Click the <strong>Submit Task</strong> button to open the submission form.</li>
                    <li>Paste your live site URL, GitHub repository link, or raw code snippet into the required fields.</li>
                    <li>Click <strong>Final Submit</strong>. Our automated test runner will instantly evaluate your code.</li>
                </ol>
            </div>
        ),
    },
    {
        key: 'edit-submission',
        question: 'Can I re-submit or edit my task after submitting?',
        icon: HiDocumentText,
        answer: (
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Yes! As long as the task deadline has not passed, you can navigate to <strong className="text-cyan-500">My Task</strong>, select your active task, and click <strong>Update Submission</strong>. Your score and feedback will re-evaluate based on your latest commit.
            </p>
        ),
    },
    {
        key: 'forgot-password',
        question: 'What should I do if I forget my login password?',
        icon: HiKey,
        answer: (
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                On the <strong className="text-cyan-500">Login</strong> page, click the <em>Forgot Password?</em> link. Enter your registered email address, and we will send you a password reset link valid for 15 minutes.
            </p>
        ),
    },
    {
        key: 'late-submission',
        question: 'What happens if I submit a task after the deadline?',
        icon: HiExclamationTriangle,
        answer: (
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Late submissions are accepted up to 24 hours after the deadline, but they may carry a 10-20% point deduction depending on the specific task guidelines. Be sure to check individual assignment timers!
            </p>
        ),
    },
    {
        key: 'evaluation-time',
        question: 'How long does automated code evaluation take?',
        icon: HiCheckBadge,
        answer: (
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Most automated tests execute instantly and return score diagnostics within <strong>10 to 30 seconds</strong>. For tasks requiring manual mentor code reviews, feedback is typically published within 24 to 48 hours.
            </p>
        ),
    },
];

export default function FAQ() {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Background Accent Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                    <HiSparkles className="w-4 h-4 text-cyan-500" />
                    <span>Help & Support</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Frequently Asked <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Questions</span>
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-base">
                    Everything you need to know about getting started, managing your account, and submitting code assignments.
                </p>
            </div>

            {/* HeroUI Accordion */}
            <div className="p-2 sm:p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-cyan-500/20 shadow-xl shadow-cyan-500/5">
                {faqs.map((category) => (
                    <div key={category.key}>

                        <Accordion className="w-full" variant="surface">

                            <Accordion.Item>
                                <Accordion.Heading>
                                    <Accordion.Trigger>
                                        {category.question}
                                        <Accordion.Indicator>
                                            <BiChevronDown />
                                        </Accordion.Indicator>
                                    </Accordion.Trigger>
                                </Accordion.Heading>
                                <Accordion.Panel>
                                    <Accordion.Body>{category.answer}</Accordion.Body>
                                </Accordion.Panel>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                ))}
            </div>

            {/* Bottom CTA for Unanswered Questions */}
            <div className="mt-8 text-center flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <HiQuestionMarkCircle className="w-5 h-5 text-cyan-500" />
                <span>Still have questions? Reach out to support via your dashboard menu.</span>
            </div>

        </section>
    );
}