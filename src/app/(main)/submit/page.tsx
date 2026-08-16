'use client';

import { authClient } from '@/lib/auth-client';
import { postSubmitData, TaskData } from '@/lib/post';
import { Button } from '@heroui/react';
import {
    HiDocumentText,
    HiCheckCircle
} from 'react-icons/hi2';

export default function TaskSubmitForm() {
    const { data: session } = authClient.useSession()
    const email = session?.user.email as string
    const image = session?.user.image as string
    const submtHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const task: TaskData = {
            task: formData.get('task') as string,
            email,
            image
        }
        const reutl = await postSubmitData(task)
        console.log(reutl, 'and', task);
    }
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 relative overflow-hidden">

            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full max-w-xl p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 transition-colors duration-300">

                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-2 mb-8">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 mb-1">
                        <HiDocumentText className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Submit Your Work</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Paste your project links, source code, answers, or any text details below.
                    </p>
                </div>

                {/* Form Container */}
                <form
                    onSubmit={submtHandle}
                    className="flex flex-col gap-5"
                >
                    {/* Universal Multi-Purpose Text Area */}
                    <textarea name="task" rows={8} cols={5}
                        className='border-2 rounded-xl border-cyan-100 '
                        placeholder='Submit your Task hare'
                    ></textarea>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200"
                    >
                        Submit Task
                    </Button>
                </form>

                {/* Footer Note */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <HiCheckCircle className="w-4 h-4 text-cyan-500" />
                    <span>Your submission will be logged and evaluated immediately.</span>
                </div>

            </div>
        </div>
    );
}