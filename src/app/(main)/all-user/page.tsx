'use client';

import { useState } from 'react';
import {
    HiTrash,
    HiUserGroup,
    HiCalendar,
    HiEnvelope,
    HiCheckCircle,
    HiXCircle
} from 'react-icons/hi2';

interface StudentData {
    _id: string;
    name: string;
    email: string;
    submittedToday: boolean; // Dynamic flag for today's submission
    lastSubmissionDate: string;
}

const initialStudents: StudentData[] = [
    {
        _id: "6a79a4721435322f0e65b001",
        name: "Md Romjan Ali",
        email: "romjan@gmail.com",
        submittedToday: true,
        lastSubmissionDate: "2026-08-10T10:14:10.173Z" // Today
    },
    {
        _id: "6a79a4721435322f0e65b002",
        name: "Shakib Hasan",
        email: "shakib@gmail.com",
        submittedToday: false, // Highlight Red + Inactive
        lastSubmissionDate: "2026-08-08T09:30:00.000Z"
    },
    {
        _id: "6a79a4721435322f0e65b003",
        name: "Nusrat Jahan",
        email: "nusrat@gmail.com",
        submittedToday: true,
        lastSubmissionDate: "2026-08-10T14:20:00.000Z" // Today
    },
    {
        _id: "6a79a4721435322f0e65b004",
        name: "Tanvir Rahman",
        email: "tanvir@gmail.com",
        submittedToday: false, // Highlight Red + Inactive
        lastSubmissionDate: "2026-08-07T11:15:00.000Z"
    }
];

export default function StudentTable() {
    const [students, setStudents] = useState<StudentData[]>(initialStudents);

    const handleDelete = (id: string, name: string) => {
        if (window.confirm(`Are you sure you want to delete student: ${name}?`)) {
            setStudents((prev) => prev.filter((student) => student._id !== id));
        }
    };

    const activeCount = students.filter(s => s.submittedToday).length;
    const inactiveCount = students.length - activeCount;

    return (
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 space-y-6">

            {/* Top Overview Bar */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-xl shadow-cyan-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500">
                        <HiUserGroup className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-wide">
                            Student Daily Task Monitor
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Red rows indicate students who missed today is submission.
                        </p>
                    </div>
                </div>

                {/* Stats Badges */}
                <div className="flex items-center gap-3 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800">
                    <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center flex-1 sm:flex-none">
                        <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Total</span>
                        <span className="text-lg font-black text-cyan-500">{students.length}</span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center flex-1 sm:flex-none">
                        <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Submitted</span>
                        <span className="text-lg font-black text-emerald-500">{activeCount}</span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center flex-1 sm:flex-none">
                        <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Missing</span>
                        <span className="text-lg font-black text-rose-500">{inactiveCount}</span>
                    </div>
                </div>

            </div>

            {/* Main Table Container */}
            <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="bg-cyan-500/10 border-b border-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-bold uppercase text-xs tracking-wider">
                                <th className="py-4 px-5">Student Info</th>
                                <th className="py-4 px-5">Contact Details</th>
                                <th className="py-4 px-5">Today is Task Status</th>
                                <th className="py-4 px-5">Last Submission</th>
                                <th className="py-4 px-5 text-right">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {students.length > 0 ? (
                                students.map((student) => {
                                    const hasSubmitted = student.submittedToday;

                                    return (
                                        <tr
                                            key={student._id}
                                            className={`transition-colors group ${hasSubmitted
                                                    ? 'hover:bg-cyan-500/5'
                                                    : 'bg-rose-500/10 dark:bg-rose-950/30 hover:bg-rose-500/20 border-l-4 border-l-rose-500'
                                                }`}
                                        >
                                            {/* Student Profile Column */}
                                            <td className="py-4 px-5">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-sm shrink-0 ${hasSubmitted
                                                            ? 'bg-gradient-to-br from-cyan-400 to-cyan-600'
                                                            : 'bg-gradient-to-br from-rose-400 to-rose-600'
                                                        }`}>
                                                        {student.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white capitalize text-sm">
                                                            {student.name}
                                                        </p>
                                                        <span className="font-mono text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded mt-1 inline-block">
                                                            ID: #{student._id.slice(-5)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Contact Column */}
                                            <td className="py-4 px-5">
                                                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                                                    <HiEnvelope className="w-4 h-4 text-slate-400 shrink-0" />
                                                    {student.email}
                                                </div>
                                            </td>

                                            {/* Dynamic Active/Inactive Status Badge */}
                                            <td className="py-4 px-5">
                                                {hasSubmitted ? (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                                        <HiCheckCircle className="w-4 h-4" />
                                                        Active (Submitted)
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                                                        <HiXCircle className="w-4 h-4" />
                                                        Inactive (No Task)
                                                    </span>
                                                )}
                                            </td>

                                            {/* Last Submission Date */}
                                            <td className="py-4 px-5">
                                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                                    <HiCalendar className="w-4 h-4 text-cyan-500 shrink-0" />
                                                    <span>
                                                        {new Date(student.lastSubmissionDate).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "short",
                                                            day: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Delete Action Button */}
                                            <td className="py-4 px-5 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(student._id, student.name)}
                                                    title="Delete Student"
                                                    className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-200 shadow-sm"
                                                >
                                                    <HiTrash className="w-5 h-5" />
                                                </button>
                                            </td>

                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-12 text-center text-slate-500 dark:text-slate-400">
                                        No students registered yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}