'use client';

import { cx } from 'class-variance-authority';
import React, {
    ButtonHTMLAttributes,
    FieldsetHTMLAttributes,
    FormHTMLAttributes,
    HTMLAttributes,
    InputHTMLAttributes,
    PropsWithChildren,
} from 'react';

export const Form = React.forwardRef<
    HTMLFormElement | null,
    FormHTMLAttributes<HTMLFormElement>
>(function ({ children, className, ...rest }, ref) {
    return (
        <form
            className={cx(
                'grid min-w-[70vw] grid-flow-row justify-stretch gap-8 rounded-lg p-5 sm:min-w-[35vw]',
                className
            )}
            ref={ref}
            {...rest}>
            {children}
        </form>
    );
});

export const Title = ({
    children,
    className,
    ...rest
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => (
    <h1
        className={cx('text-h1-serif text-dark font-serif', className)}
        {...rest}>
        {children}
    </h1>
);

export const Fieldset = ({
    children,
    className,
    ...rest
}: PropsWithChildren<FieldsetHTMLAttributes<HTMLFieldSetElement>>) => {
    return (
        <fieldset
            className={cx(`grid grid-flow-row gap-2`, className)}
            {...rest}>
            {children}
        </fieldset>
    );
};

export const Text = React.forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(function ({ children, className, ...rest }, ref) {
    return (
        <input
            type="text"
            className={cx('w-full', className)}
            ref={ref}
            {...rest}
        />
    );
});

export const Price = React.forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(function ({ children, className, ...rest }, ref) {
    return (
        <input
            type="number"
            min="0"
            step=".01"
            required
            name="price"
            className={cx('w-full', className)}
            ref={ref}
            {...rest}
        />
    );
});

export const Button = React.forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(function Button({ children, className, ...rest }, ref) {
    return (
        <button
            ref={ref}
            className={cx('button-border ', className)}
            {...rest}>
            {children}
        </button>
    );
});
