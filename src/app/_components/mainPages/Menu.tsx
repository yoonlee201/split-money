'use client';

import { Fieldset, Form } from '@/app/_components/Form';
import { Bill, Bill_, ItemProps } from '@/app/_components/Bill';
import { PageRouteButton } from '@/app/_components/Button';
import { Count } from '@/app/_components/Count';
import { useState } from 'react';

const Menu = () => {
    const [menu, setMenu] = useState<ItemProps[]>([
        { name: '', cost: '', person: [] },
    ]);

    const handlePlus = () => {
        setMenu([...menu, { name: '', cost: '', person: [] }]);
    };

    const handleMinus = () => {
        if (menu.length > 1) {
            setMenu(menu.slice(0, -1));
        }
    };

    const handleItemChange = (index: number, updatedItem: ItemProps) => {
        const newMenu = [...menu];
        newMenu[index] = updatedItem;
        setMenu(newMenu);
    };

    return (
        <>
            <Count
                count={menu.length}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
            />
            <Form>
                <Fieldset className="h-[320px] items-start">
                    {menu.map((item, i) => {
                        return (
                            <Bill
                                key={i}
                                {...item}
                                handleItemChange={updatedItem =>
                                    handleItemChange(i, updatedItem)
                                }
                            />
                        );
                    })}
                </Fieldset>
                <Fieldset className="pb-3 pt-1">
                    <Bill_>Tax ($)</Bill_>
                    <Bill_>Tip (%)</Bill_>
                    <Bill_ disabled>Total ($)</Bill_>
                </Fieldset>
            </Form>
            <PageRouteButton
                hrefB="/menu"
                hrefN="/receipt"
                labelB="back"
                labelN="finish"
                page="2"
            />
        </>
    );
};

export default Menu;
