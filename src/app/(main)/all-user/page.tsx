import { getDataByEmail, getTask } from '@/lib/get';
import {
    HiCalendar,
    HiCheckCircle,
    HiExclamationTriangle,
    HiEnvelope,
    HiTrash,
    HiClock,
    HiArrowTopRightOnSquare
} from 'react-icons/hi2';

// Matches MongoDB task document structure
interface TaskDocument {
    _id: string;
    task?: string; // Submitted link or undefined/empty
    email: string;
    date: string;  // ISODate string
}

export default async function TodayTasks() {
    const taskList: TaskDocument[] = await getTask();

    // Helper: Compare date string against today's local date
    const isSubmittedToday = (dateString: string, taskContent?: string) => {
        if (!taskContent || taskContent.trim() === "") return false;

        const taskDate = new Date(dateString);
        const today = new Date();

        return (
            taskDate.getDate() === today.getDate() &&
            taskDate.getMonth() === today.getMonth() &&
            taskDate.getFullYear() === today.getFullYear()
        );
    };

    // Sort: Unsubmitted tasks first (false before true)
    const sortedTaskList = [...taskList].sort((a, b) => {
        const aSubmitted = isSubmittedToday(a.date, a.task);
        const bSubmitted = isSubmittedToday(b.date, b.task);

        // Put false (pending) before true (submitted)
        return Number(bSubmitted) - Number(aSubmitted);
    });

    const todayFormatted = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 space-y-6">

            {/* Header Section */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-xl shadow-cyan-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                        <HiCalendar className="w-7 h-7 text-cyan-500" />
                        Today's Task Submissions
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {todayFormatted}
                    </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                    Total Submissions: {taskList.length}
                </div>
            </div>

            {/* Task List Container */}
            <div className="space-y-4">
                {await Promise.all(
                    sortedTaskList.map(async (item) => {
                        const submittedToday = isSubmittedToday(item.date, item.task);

                        // Fetch user profile data using email
                        const userData = await getDataByEmail(item.email);
                        const displayName = userData?.name || item.email;

                        return (
                            <div
                                key={String(item._id)}
                                className={`p-5 rounded-2xl border backdrop-blur-md transition-all duration-200 shadow-md ${submittedToday
                                    ? 'bg-white/80 dark:bg-slate-900/80 border-cyan-500/30 hover:border-cyan-500'
                                    : 'bg-rose-500/10 dark:bg-rose-950/30 border-rose-500/40 hover:border-rose-500 border-l-4 border-l-rose-500'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                                    {/* Student Info */}
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl text-white shrink-0 capitalize ${submittedToday ? 'bg-gradient-to-br from-cyan-400 to-cyan-600' : 'bg-gradient-to-br from-rose-400 to-rose-600'
                                            }`}>
                                            {displayName}
                                        </div>

                                        <div>
                                            <h2 className="text-lg font-bold text-slate-900 dark:text-white capitalize flex items-center gap-2">
                                                {displayName}
                                                <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-500">
                                                    #{String(item._id).slice(-6)}
                                                </span>
                                            </h2>
                                            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                <HiEnvelope className="w-3.5 h-3.5 text-cyan-500" />
                                                {item.email}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status & Actions */}
                                    <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-800">
                                        {submittedToday ? (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                                <HiCheckCircle className="w-4 h-4" /> Submitted Today
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                                                <HiExclamationTriangle className="w-4 h-4" /> Task Pending
                                            </span>
                                        )}

                                        <button
                                            type="button"
                                            title="Delete Entry"
                                            className="p-2 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-colors"
                                        >
                                            <HiTrash className="w-5 h-5" />
                                        </button>
                                    </div>

                                </div>

                                {/* Task Link or Warning Message */}
                                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                                    {submittedToday && item.task ? (
                                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div className="space-y-1 overflow-hidden">
                                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Submitted Link / Work:</span>
                                                <a
                                                    href={item.task}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1.5 truncate max-w-full"
                                                >
                                                    <span className="truncate">{item.task}</span>
                                                    <HiArrowTopRightOnSquare className="w-4 h-4 shrink-0" />
                                                </a>
                                            </div>

                                            <div className="flex items-center gap-1 text-xs text-slate-400 shrink-0">
                                                <HiClock className="w-4 h-4 text-cyan-500" />
                                                <span>{new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-3.5 rounded-xl bg-rose-500/10 dark:bg-rose-950/40 border border-rose-500/30 flex items-center gap-3">
                                            <HiExclamationTriangle className="w-5 h-5 text-rose-500 shrink-0" />
                                            <div>
                                                <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">
                                                    No task submitted for today ({new Date().toLocaleDateString()}).
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                                    {displayName} ({item.email}) has not submitted any work for today's assignment yet.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        );
                    })
                )}
            </div>

        </div>
    );
}