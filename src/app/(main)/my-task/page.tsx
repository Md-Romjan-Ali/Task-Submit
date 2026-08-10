
import { getDataByEmail } from '@/lib/get';
import { userSession } from '@/lib/session';
import Linkify from 'linkify-react';
import {
    HiPencilSquare,
    HiTrash,
    HiCalendar,
    HiEnvelope,
    HiUserCircle,
    HiCheckCircle
} from 'react-icons/hi2';

interface TaskItem {
    _id: string;
    task: string;
    email: string;
    date: string;
}


export default async function TaskTable() {
    const user = await userSession()
    const email = user?.email
    const tasks: TaskItem[] = await getDataByEmail(email as string)


    return (
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 space-y-6">

            {/* Top Section: User Profile & Details Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-xl shadow-cyan-500/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors">

                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500">
                        <HiUserCircle className="w-10 h-10" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
                                {user?.name}
                            </h2>
                            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                                User Profile
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                            <HiEnvelope className="w-4 h-4 text-cyan-500 shrink-0" />
                            {user?.email}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-800">
                    <div className="px-4 py-2 rounded-xl bg-cyan-500/10 dark:bg-slate-950/50 border border-cyan-500/20 text-center flex-1 md:flex-none">
                        <span className="block text-xs text-slate-500 dark:text-slate-400">Total Tasks</span>
                        <span className="text-lg font-bold text-cyan-500">{tasks.length}</span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-emerald-500/10 dark:bg-slate-950/50 border border-emerald-500/20 text-center flex-1 md:flex-none">
                        <span className="block text-xs text-slate-500 dark:text-slate-400">Status</span>
                        <span className="text-xs font-semibold text-emerald-500 flex items-center justify-center gap-1 mt-0.5">
                            <HiCheckCircle className="w-3.5 h-3.5" /> Active
                        </span>
                    </div>
                </div>

            </div>

            {/* Task Table Section */}
            <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-cyan-500/10 border-b border-cyan-500/20 text-cyan-800 dark:text-cyan-300 font-bold uppercase text-xs">

                            <th className="py-3 px-4">Task Details</th>
                            <th className="py-3 px-4">User Email</th>
                            <th className="py-3 px-4">Submission Date</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                        {tasks.length > 0 ? (
                            tasks.map((item) => (
                                <tr key={item._id} className="hover:bg-cyan-500/5 transition-colors text-sm text-slate-700 dark:text-slate-200">
                                    {/* task */}
                                    <td className="py-4 px-4 min-w-[150px]">
                                        <Linkify
                                            options={{
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-cyan-600 hover:underline",
                                            }}
                                        >
                                            <p className="max-w-md whitespace-pre-wrap break-words text-slate-800 dark:text-slate-100">
                                                {item.task}
                                            </p>
                                        </Linkify>
                                    </td>

                                    {/* Assigned Email */}
                                    <td className="py-4 px-4 font-medium text-slate-600 dark:text-slate-300">
                                        {item.email}
                                    </td>

                                    {/* Date */}
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                            <HiCalendar className="w-4 h-4 text-cyan-500 shrink-0" />
                                            <span>
                                                {new Date(item.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="py-4 px-4">
                                        <div className="flex items-center justify-center gap-2">

                                            {/* Update Button */}
                                            <button
                                                type="button"
                                                title="Update Task"
                                                className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-600 dark:text-cyan-400 hover:text-white transition-all duration-200"
                                            >
                                                <HiPencilSquare className="w-5 h-5" />
                                            </button>

                                            {/* Delete Button */}
                                            <button
                                                type="button"
                                                title="Delete Task"
                                                className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white transition-all duration-200"
                                            >
                                                <HiTrash className="w-5 h-5" />
                                            </button>

                                        </div>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
                                    No tasks available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}