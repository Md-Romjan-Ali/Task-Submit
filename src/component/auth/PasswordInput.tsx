'use client';

import { useState } from 'react';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import AuthInput, { type AuthInputProps } from './AuthInput';

export default function PasswordInput(props: AuthInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative">
            <AuthInput
                {...props}
                type={visible ? 'text' : 'password'}
                className="pr-10"
            />
            <button
                type="button"
                aria-label={visible ? 'Hide password' : 'Show password'}
                onClick={() => setVisible((current) => !current)}
                className="absolute right-3 bottom-3 text-slate-500 hover:text-cyan-500"
            >
                {visible ? <HiEyeSlash className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
            </button>
        </div>
    );
}