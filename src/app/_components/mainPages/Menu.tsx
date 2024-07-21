'use client';

import { Fieldset, Form } from '@/app/_components/Form';
import { Bill, Bill_, ItemProps } from '@/app/_components/Bill';
import { PageRouteButton } from '@/app/_components/Button';
import { Count } from '@/app/_components/Count';
import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

const Menu = () => {
    const people: string[] = getLocalStorage('people', []);
    const [menu, setMenu] = useState<ItemProps[]>(() =>
        getLocalStorage('menu', [{ name: '', cost: '', person: [] }])
    );

    const [tax, setTax] = useState(() =>
        getLocalStorage('tax', { tax: '', taxUnit: '$' })
    );
    const [tip, setTip] = useState(() =>
        getLocalStorage('tip', { tip: '', tipUnit: '%' })
    );

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
        setLocalStorage(
            'people',
            people.filter(p => p !== '')
        );
        setLocalStorage(
            'menu',
            menu.filter(({ cost }) => cost !== '')
        );
        setLocalStorage('tax', tax);
        setLocalStorage('tip', tip);
    };

    const getTotal = () => {
        const total = menu
            .filter(({ cost }) => cost !== '')
            .reduce((sum, current) => sum + parseFloat(current.cost), 0);

        const taxAmount =
            tax.taxUnit === '$'
                ? parseFloat(tax.tax)
                : (total * parseFloat(tax.tax)) / 100;

        const tipAmount =
            tip.tipUnit === '$'
                ? parseFloat(tip.tip)
                : (total * parseFloat(tip.tip)) / 100;

        return (
            total +
            (isNaN(taxAmount) ? 0 : taxAmount) +
            (isNaN(tipAmount) ? 0 : tipAmount)
        );
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
                            item={tax.tax}
                            value={tax.tax}
                            dropdownList={['$', '%']}
                            setDropdown={unit =>
                                setTax({ ...tax, taxUnit: unit })
                            }
                            handleChange={value =>
                                setTax({ ...tax, tax: value })
                            }>
                            Tax ({tax.taxUnit})
                        </Bill_>
                        <Bill_
                            item={tip.tip}
                            value={tip.tip}
                            dropdownList={['%', '$']}
                            setDropdown={unit =>
                                setTip({ ...tip, tipUnit: unit })
                            }
                            handleChange={value =>
                                setTip({ ...tip, tip: value })
                            }>
                            Tip ({tip.tipUnit})
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
