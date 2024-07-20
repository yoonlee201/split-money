'use client';

import { cx } from 'class-variance-authority';
import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

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

interface PageRouteButtonProps {
    hrefB: string;
    hrefN: string;
    labelB: string;
    labelN: string;
    page: string;
}
export const PageRouteButton = ({
    hrefB,
    hrefN,
    labelB,
    labelN,
    page,
}: PageRouteButtonProps) => {
    return (
        <div className="flex h-full w-full items-end justify-end gap-2 p-3">
            <Link
                href={hrefB}
                className="button-border inline-flex rounded-sm px-2">
                {labelB}
            </Link>
            <span className="w-10 text-center text-[1rem]">{page}</span>
            <Link
                href={hrefN}
                className="button-border inline-flex rounded-sm px-2">
                {labelN}
            </Link>
        </div>
    );
};
