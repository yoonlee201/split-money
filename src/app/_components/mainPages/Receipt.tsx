'use client';

import { PageRouteButton } from '@/app/_components/Button';
import { ItemProps } from '@/app/_components/Bill';
import { useState } from 'react';

const Receipt = () => {
    const [people, setPeople] = useState<string[]>(['James', 'Vlad']);
    const [menu, setMenu] = useState<ItemProps[]>([
        { name: 'one', cost: '1.0', person: ['James', 'Vlad'] },
        { name: 'two', cost: '2.0', person: ['Vlad'] },
        { name: 'three', cost: '3.0', person: ['James'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
        { name: 'four', cost: '5.0', person: ['James', 'Vlad'] },
    ]);
    return (
        <>
            <section className="w-[90%] overflow-y-scroll">
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
                        {menu.map(item => (
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                {people.map(person => (
                                    <td key={`${item.name}-${person}`}>
                                        {item.person.includes(person)
                                            ? (
                                                  parseFloat(item.cost) /
                                                  item.person.length
                                              ).toFixed(2)
                                            : '-'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <PageRouteButton
                hrefB="/menu"
                hrefN="/"
                labelB="back"
                labelN="start again"
                page="3"
            />
        </>
    );
};

export default Receipt;
