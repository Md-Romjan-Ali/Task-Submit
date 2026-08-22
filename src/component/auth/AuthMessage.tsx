interface AuthMessageProps {
    type: 'error' | 'success' | 'info';
    children: React.ReactNode;
}

const styles = {
    error: 'border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300',
    success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
    info: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
};

export default function AuthMessage({ type, children }: AuthMessageProps) {
    return (
        <div role={type === 'error' ? 'alert' : 'status'} className={`rounded-xl border px-4 py-3 text-sm ${styles[type]}`}>
            {children}
        </div>
    );
}