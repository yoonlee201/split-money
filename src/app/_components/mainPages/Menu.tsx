'use client';

import { Fieldset, Form } from '@/app/_components/Form';
import { Bill, Bill_, ItemProps } from '@/app/_components/Bill';
import { PageRouteButton } from '@/app/_components/Button';
import { Count } from '@/app/_components/Count';
import { useState } from 'react';

const Menu = () => {
    const [people, setPeople] = useState<string[]>(
        JSON.parse(localStorage.getItem('people') || '[]')
    );
    const [menu, setMenu] = useState<ItemProps[]>([
        { name: '', cost: '', person: [] },
    ]);

    const [tax, setTax] = useState('0');
    const [tip, setTip] = useState('0');
    const [taxUnit, setTaxUnit] = useState('$');
    const [tipUnit, setTipUnit] = useState('%');

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

    const handleNextClick = () => {
        localStorage.setItem(
            'people',
            JSON.stringify(people.filter(p => p !== ''))
        );
        localStorage.setItem(
            'menu',
            JSON.stringify(menu.filter(({ cost }) => cost !== ''))
        );
        localStorage.setItem('tax', `"tax":${tax},"taxUnit":${taxUnit}`);
        localStorage.setItem('tip', `"tip":${tip},"tipUnit":${tipUnit}`);
        console.log(JSON.stringify(menu));
    };

    const getTotal = () => {
        const total = menu
            .filter(({ cost }) => cost !== '')
            .reduce((sum, current) => sum + parseFloat(current.cost), 0);

        let tipTotal = 0;
        if (tipUnit === '%') {
            tipTotal = (total * parseFloat(tip)) / 100;
        } else {
            tipTotal = parseFloat(tip);
        }
        console.log(tipTotal);

        let taxTotal = 0;
        if (taxUnit === '%') {
            taxTotal = (total * parseFloat(tax)) / 100;
        } else {
            taxTotal = parseFloat(tax);
        }
        console.log(taxTotal);

        return total + tipTotal + taxTotal;
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
                            setDropdown={setTaxUnit}
                            handleChange={setTax}>
                            Tax ({taxUnit})
                        </Bill_>
                        <Bill_
                            item={tip}
                            dropdownList={['%', '$']}
                            setDropdown={setTipUnit}
                            handleChange={setTip}>
                            Tip ({tipUnit})
                        </Bill_>
                        <div className="mx-4 flex gap-2">
                            <span className="flex w-[100px] max-w-[100px] justify-center">
                                Total ($)
                            </span>
                            <span className="flex w-[100px] max-w-[100px] justify-center">
                                {getTotal().toFixed(2)}
                            </span>
                        </div>
                    </Fieldset>
                </Form>
            </section>
            <PageRouteButton
                hrefB="/people"
                hrefN="/receipt"
                labelB="back"
                labelN="submit"
                onNextClick={handleNextClick}
                page="2"
            />
        </>
    );
};

export default Menu;
