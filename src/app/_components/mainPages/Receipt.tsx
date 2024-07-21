'use client';

import { PageRouteButton } from '@/app/_components/Button';
import { ItemProps } from '@/app/_components/Bill';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';


const Receipt = () => {
    const [people, setPeople] = useState<string[]>(() =>
        getLocalStorage('people', [])
    );
    const [menu, setMenu] = useState<ItemProps[]>(() =>
        getLocalStorage('menu', [])
    );
    const [tax, setTax] = useState(() =>
        getLocalStorage('tax', { tax: '0', taxUnit: '$' })
    );
    const [tip, setTip] = useState(() =>
        getLocalStorage('tip', { tip: '0', tipUnit: '%' })
    );

    const [subtotals, setSubtotals] = useState<number[]>([]);
    const [totals, setTotals] = useState<number[]>([]);
    const [overallTotal, setOverallTotal] = useState<number>(0);

    useEffect(() => {
        const calculateTotals = () => {
            // Calculate individual subtotals
            const individualSubtotals = people.map(person =>
                menu.reduce((total, item) => {
                    if (item.person.includes(person)) {
                        return (
                            total + parseFloat(item.cost) / item.person.length
                        );
                    }
                    return total;
                }, 0)
            );

            setSubtotals(individualSubtotals);

            const subtotalSum = individualSubtotals.reduce(
                (sum, current) => sum + current,
                0
            );

            // Calculate tax amount
            const taxAmount =
                tax.taxUnit === '$'
                    ? parseFloat(tax.tax)
                    : (subtotalSum * parseFloat(tax.tax)) / 100;

            // Calculate tip amount
            const tipAmount =
                tip.tipUnit === '$'
                    ? parseFloat(tip.tip)
                    : (subtotalSum * parseFloat(tip.tip)) / 100;

            // Calculate overall total
            const calculatedOverallTotal = subtotalSum + taxAmount + tipAmount;
            setOverallTotal(calculatedOverallTotal);

            // Calculate individual totals including tax and tip
            const individualTotals = individualSubtotals.map(subtotal => {
                const proportion = subtotal / subtotalSum;
                const individualTax = taxAmount * proportion;
                const individualTip = tipAmount * proportion;
                return subtotal + individualTax + individualTip;
            });

            setTotals(individualTotals);
            
        };

        calculateTotals();
    }, [people, menu, tax, tip]);

    return (
        <>
            <section className="w-[90%] overflow-y-scroll">
                {menu.length !== 0 && people.length !== 0 ? (
                    <>
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th></th>
                                    {people.map(person => (
                                        <th key={person}>{person}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {menu.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        {people.map(person => (
                                            <td key={`${item.name}-${person}`}>
                                                {item.person.includes(person)
                                                    ? (
                                                          parseFloat(
                                                              item.cost
                                                          ) / item.person.length
                                                      ).toFixed(2)
                                                    : '-'}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                               
        <tr>
            <td>Subtotal ($):</td>
            {subtotals.map((price, i) => (
                <td key={i}>{price.toFixed(2)}</td>
            ))}
        </tr>
        <tr>
            <td>Total (incl. Tax & Tip) ($):</td>
            {totals.map((price, i) => (
                <td key={i}>{price.toFixed(2)}</td>
            ))}
        </tr>
        <tr>
            <td colSpan={people.length + 1}>
                Overall Total ($): {overallTotal.toFixed(2)}
            </td>
        </tr>

                            </tfoot>
                        </table>
                    </>
                ) : (
                    <span>There was no data to calculate</span>
                )}
            </section>
            <PageRouteButton
                hrefB="/menu"
                hrefN="/"
                labelB="back"
                labelN="start again"
                onNextClick={() => {
                    localStorage.clear();
                }}
                page="3"
            />
        </>
    );
};

export default Receipt;
