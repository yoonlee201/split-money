'use client';
import { Price, Text } from '@/app/_components/Form';
import { Button } from '@/app/_components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {
    ButtonHTMLAttributes,
    ChangeEvent,
    HTMLAttributes,
    PropsWithChildren,
    useState,
} from 'react';
import React from 'react';

export interface ItemProps {
    name: string;
    cost: string;
    person: string[];
}

interface BillProps {
    handleItemChange: (item: ItemProps) => void;
}
export const Bill: React.FC<BillProps & ItemProps> = ({
    name,
    cost,
    person,
    handleItemChange,
}) => {
    const updateItem = (updates: Partial<ItemProps>) => {
        handleItemChange({
            name,
            cost,
            person,
            ...updates,
        });
    };

    return (
        <div className="text-main mx-4 flex flex-wrap items-center gap-2">
            <Text
                value={name}
                onChange={e => updateItem({ name: e.target.value })}
                placeholder="Menu"
                className="basis-[100px] sm:ml-2"
            />
            <Price
                value={cost}
                onChange={e =>
                    updateItem({
                        cost: e.target.value,
                    })
                }
                className="basis-[100px] md:max-w-[150px]"
                placeholder="Cost ($)"
            />
            <Button
                onClick={() => {
                    /* Add person logic here */
                }}
                className="w-full basis-[50px] whitespace-nowrap">
                <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ color: '#1c2f4d' }}
                />
                <span className="ml-2">Add Person</span>
            </Button>
        </div>
    );
};

type Bill_Props = ButtonHTMLAttributes<HTMLButtonElement> &
    PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & {
        item: string;
        handleChange: (item: string) => void;
    };

export const Bill_ = ({
    children,
    className,
    item,
    handleChange,
    ...rest
}: Bill_Props) => {
    return (
        <div className="mx-4 flex gap-2">
            <Button
                onClick={e => {}}
                className="w-full max-w-[100px]"
                {...rest}>
                {children}
            </Button>
            <Price
                value={item}
                onChange={e => {
                    handleChange(e.target.value);
                }}
                className="max-w-[100px]"
            />
        </div>
    );
};
