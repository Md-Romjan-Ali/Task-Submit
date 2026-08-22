import { Button, type ButtonProps } from '@heroui/react';
import LoadingSpinner from './LoadingSpinner';

interface AuthButtonProps extends ButtonProps {
    loading?: boolean;
}

export default function AuthButton({ children, loading = false, disabled, ...props }: AuthButtonProps) {
    return (
        <Button
            type="submit"
            size="lg"
            disabled={disabled || loading}
            className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200"
            {...props}
        >
            {loading ? <LoadingSpinner label="Submitting" /> : children}
        </Button>
    );
}