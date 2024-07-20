'use client';

import { cx } from 'class-variance-authority';
import React, {
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
                'grid w-full grid-flow-row justify-stretch gap-6 rounded-lg p-2 pt-10',
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
            className={cx(`flex flex-col gap-2 overflow-y-scroll`, className)}
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

type PriceProps = InputHTMLAttributes<HTMLInputElement> 
// & {
//     handleChange: (item: string) => void;
// };

export const Price = ({
    children,
    className,
    ...rest
}: PriceProps) => {
    return (
        <input
            type="number"
            min="0"
            step=".01"
            pattern="[0-9]+(\\.[0-9][0-9]?)?"
            name="price"
            className={cx('w-full', className)}
            {...rest}
        />
    );
};
