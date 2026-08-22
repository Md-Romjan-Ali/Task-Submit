import { Input, type InputProps } from '@heroui/react';

export interface AuthInputProps extends InputProps {
    label?: string;
}

export default function AuthInput({ className = '', label, id, ...props }: AuthInputProps) {
    return (
        <label htmlFor={id} className="flex flex-col gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">
            {label}
            <Input
                id={id}
                color="primary"
                className={`border-cyan-500/30 hover:border-cyan-500 focus-within:border-cyan-500! bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors ${className}`}
                {...props}
            />
        </label>
    );
}