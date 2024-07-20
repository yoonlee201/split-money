'use client';

import { cx } from 'class-variance-authority';
import React, {
    ButtonHTMLAttributes,
} from 'react'

export const Button = React.forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(function ({ children, className, ...rest }, ref) {
    return (
        <button
            ref={ref}
            className={cx('button-border', className)}
            {...rest}>
            {children}
        </button>
    );
});
