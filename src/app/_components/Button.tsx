'use client';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cx } from 'class-variance-authority';
import Link from 'next/link';
import React, {
    ButtonHTMLAttributes,
    HTMLAttributes,
    MouseEventHandler,
    PropsWithChildren,
    useEffect,
    useRef,
    useState,
} from 'react';

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

type CheckboxButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & {
        dropdownList: string[];
    };

export const CheckboxButton = ({
    className,
    children,
    dropdownList = [],
    ...rest
}: CheckboxButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checkStates, setCheckStates] = useState<boolean[]>(
        dropdownList.map(() => false)
    );
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (event: React.MouseEvent, index: number) => {
        event.preventDefault();
        event.stopPropagation();
        const newArray = [...checkStates];
        newArray[index] = !newArray[index];
        setCheckStates(newArray);
    };

    const handleClickOutside = (event: MouseEvent): void => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className="relative"
            ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className={cx('button-border', className)}
                {...rest}>
                {children}
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-1 flex w-[155px] flex-col items-start rounded-lg border border-[#b8bfce] bg-[#d8ddde] text-center">
                    {dropdownList.map((drop, i) => (
                        <button
                            key={i}
                            onClick={e => handleCheckboxChange(e, i)}
                            className="flex w-full items-center justify-between rounded-none border-b border-gray-500 px-6 py-2 last:border-b-0">
                            {drop}
                            {checkStates[i] && (
                                <FontAwesomeIcon icon={faCheck} />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

type RadioButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & {
        dropdownList: string[];
    };

export const RadioButton = ({
    className,
    children,
    dropdownList,
    ...rest
}: RadioButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [check, setCheck] = useState<number>(0);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (event: React.MouseEvent, index: number) => {
        event.preventDefault();
        event.stopPropagation();
        setCheck(index);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent): void => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className="relative"
            ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className={cx('button-border', className)}
                {...rest}>
                {children} ({dropdownList[check]})
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-1 flex w-[155px] flex-col items-start rounded-lg border border-[#b8bfce] bg-[#d8ddde] text-center">
                    {dropdownList.map((drop, i) => (
                        <button
                            key={i}
                            onClick={e => handleCheckboxChange(e, i)}
                            className="flex w-full items-center justify-between rounded-none border-b border-gray-500 px-6 py-2 last:border-b-0">
                            {drop}
                            {check === i && <FontAwesomeIcon icon={faCheck} />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
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
                className="button-border rounded-md px-2">
                {labelB}
            </Link>
            <span className="w-10 text-center text-[1rem]">{page}</span>
            <Link
                href={hrefN}
                className="button-border rounded-md px-2">
                {labelN}
            </Link>
        </div>
    );
};
