'use client';
import { Price, Text } from '@/app/_components/Form';
import { Button, CheckboxButton, RadioButton } from '@/app/_components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {
    ButtonHTMLAttributes,
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
    dropdownList: string[];
    handleItemChange: (item: ItemProps) => void;
}

export const Bill: React.FC<BillProps & ItemProps> = ({
    name,
    cost,
    person,
    dropdownList,
    handleItemChange,
}) => {
    const [checkStates, setCheckStates] = useState<boolean[]>(
        dropdownList.map(p => person.includes(p))
    );

    const updateItem = (updates: Partial<ItemProps>) => {
        handleItemChange({
            name,
            cost,
            person,
            ...updates,
        });
    };

    const handlePersonSelect = (
        selectedPerson: string,
        isSelected: boolean
    ) => {
        let newPerson;
        if (isSelected) {
            newPerson = [...person, selectedPerson];
        } else {
            newPerson = person.filter(p => p !== selectedPerson);
        }
        updateItem({ person: newPerson });
    };

    function formatNames(): string {
        if (person.length === 1) {
            return `${person[0]}`;
        }

        if (person.length === 2) {
            return `${person[0]}, ${person[1]}`;
        }

        return `${person[0]}, ${person[1]} +${person.length - 2}`;
    }

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

            <CheckboxButton
                className="w-full basis-[50px] whitespace-nowrap min-w-[148px] overflow-hidden max-w-[148px]"
                dropdownList={dropdownList}
                checkStates={checkStates}
                setCheckStates={setCheckStates}
                onPersonSelect={handlePersonSelect}>
                {person.length === 0 ? (
                    <>
                        <FontAwesomeIcon
                            icon={faUserPlus}
                            style={{ color: '#1c2f4d' }}
                        />
                        <span className="ml-2">Add Person</span>
                    </>
                ) : (
                    <span>{formatNames()}</span>
                )}
            </CheckboxButton>
        </div>
    );
};

type Bill_Props = ButtonHTMLAttributes<HTMLButtonElement> &
    PropsWithChildren<HTMLAttributes<HTMLButtonElement>> & {
        dropdownList?: string[];
        setDropdown?: (item: string) => void;
        item?: string;
        handleChange?: (item: string) => void;
    };

export const Bill_ = ({
    children,
    className,
    item,
    disabled,
    value,
    setDropdown,
    dropdownList,
    handleChange = () => {},
    ...rest
}: Bill_Props) => {
    return (
        <div className="mx-4 flex gap-2">
            {!dropdownList || disabled ? (
                <Button
                    className="w-[100px] max-w-[100px]"
                    disabled
                    {...rest}>
                    {children}
                </Button>
            ) : (
                <RadioButton
                    dropdownList={dropdownList}
                    className="w-[100px] max-w-[100px]"
                    setDropdown={setDropdown}
                    {...rest}>
                    {children}
                </RadioButton>
            )}
            <Price
                readOnly={disabled}
                value={value}
                onChange={e => {
                    handleChange(e.target.value);
                }}
                className="max-w-[100px]"
            />
        </div>
    );
};
