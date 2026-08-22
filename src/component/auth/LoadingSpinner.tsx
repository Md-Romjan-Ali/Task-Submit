import { Spinner } from '@heroui/react';

interface LoadingSpinnerProps {
    label?: string;
}

export default function LoadingSpinner({ label = 'Loading' }: LoadingSpinnerProps) {
    return <Spinner color="current" aria-label={label} />;
}