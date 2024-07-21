'use client';

import { Fieldset, Form } from '@/app/_components/Form';
import { Bill, Bill_, ItemProps } from '@/app/_components/Bill';
import { PageRouteButton } from '@/app/_components/Button';
import { Count } from '@/app/_components/Count';
import { useState } from 'react';

const Menu = () => {
    const [people, setPeople] = useState(['James', 'One', 'Two']);
    const [menu, setMenu] = useState<ItemProps[]>([
        { name: '', cost: '', person: [] },
    ]);
    const [tax, setTax] = useState('');
    const [tip, setTip] = useState('');
    const [total, setTotal] = useState('');

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
            <section>
                <Count
                    count={menu.length}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                />
                <Form>
                    <Fieldset className="h-[330px] items-start overflow-y-scroll">
                        {menu.map((item, i) => {
                            return (
                                <Bill
                                    dropdownList={people}
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
                        <Bill_
                            item={tax}
                            dropdownList={['$', '%']}
                            handleChange={setTax}>
                            Tax
                        </Bill_>
                        <Bill_
                            item={tip}
                            dropdownList={['%', '$']}
                            handleChange={setTip}>
                            Tip
                        </Bill_>
                        <Bill_
                            item={total}
                            handleChange={setTotal}
                            disabled>
                            Total ($)
                        </Bill_>
                    </Fieldset>
                </Form>
            </section>
            <PageRouteButton
                hrefB="/people"
                hrefN="/receipt"
                labelB="back"
                labelN="submit"
                page="2"
            />
        </>
    );
};

export default Menu;
