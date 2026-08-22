import { getAllUser, getTask } from '@/lib/get';
import Image from 'next/image';
import { HiUser } from 'react-icons/hi2';
import { TaskDocument } from '../all-task/page';

interface User {
    _id: string;
    name: string;
    email: string;
    image?: string;
}

export default async function AllUsersPage() {
    const taskList: TaskDocument[] = await getTask();
    const users: User[] = await getAllUser();

    // Check whether a task was submitted today
    const isSubmittedToday = (dateString: string) => {
        const taskDate = new Date(dateString);
        const today = new Date();

        return (
            taskDate.getDate() === today.getDate() &&
            taskDate.getMonth() === today.getMonth() &&
            taskDate.getFullYear() === today.getFullYear()
        );
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 space-y-6">

            {/* Header */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-xl shadow-cyan-500/5 flex items-center justify-between">

                <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <HiUser className="w-7 h-7 text-cyan-500" />
                    All Users ({users.length})
                </h1>
            </div>

            {/* Users Grid */}
            <div className="flex flex-wrap gap-4">

                {users.map((user) => {

                    // Check whether THIS user submitted a task today
                    const submittedToday = taskList.some(
                        (task) =>
                            task.email === user.email &&
                            isSubmittedToday(task.date)
                    );

                    return (
                        <div
                            key={user._id}
                            className={`
                                ${!submittedToday ? 'bg-red-400' : 'bg-white/80 dark:bg-slate-900/80'}
                                group flex flex-col items-center p-4 rounded-2xl
                                backdrop-blur-md
                                border border-slate-200 dark:border-slate-800
                                hover:border-cyan-500/50
                                shadow-md hover:shadow-cyan-500/10
                                transition-all duration-300
                            `}
                        >

                            {/* Avatar / Image */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden relative mb-3 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center border-2 border-cyan-500/30 group-hover:scale-105 transition-transform duration-300">

                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <span className="text-2xl sm:text-3xl font-extrabold text-white capitalize">
                                        {user.name
                                            ? user.name.charAt(0)
                                            : '?'}
                                    </span>
                                )}

                            </div>

                            {/* Name */}
                            <h2 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 text-center capitalize line-clamp-1 group-hover:text-cyan-500 transition-colors">
                                {user.name || 'Unnamed User'}
                            </h2>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}