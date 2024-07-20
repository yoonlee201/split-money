'use client';
import { Price, Text } from '@/app/_components/Form';
import { Button } from '@/app/_components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ButtonHTMLAttributes, useState } from 'react';
import React from 'react';

export const Menu = () => {
    const [menu, setMenu] = useState('');
    return (
        <div className="text-main flex flex-wrap items-center gap-2 pt-1 mx-4">
            <Text
                onChange={e => {
                    setMenu(e.target.value);
                }}
                placeholder='Menu'
                className="sm:ml-2 basis-[100px]"
            />
            <Price className="basis-[100px] md:max-w-[150px]" placeholder='Cost ($)'/>
            <Button className="w-full basis-[50px] whitespace-nowrap">
                <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ color: '#1c2f4d' }}
                />
                <span className="ml-2">Add Person</span>
            </Button>
        </div>
    );
};

export const More = React.forwardRef<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
>(function ({ children, className, ...rest }, ref) {
    return (
        <div className="flex gap-2">
            <Button
                className="w-full max-w-[100px] "
                {...rest}>
                {children}
            </Button>
            <Price className=" max-w-[100px]" />
        </div>
    );
});
