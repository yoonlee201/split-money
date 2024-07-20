'use client';

import { useState } from 'react';
import { Count } from '@/app/_components/Count';
import { Fieldset, Form, Text } from '@/app/_components/Form';
import { PageRouteButton } from '@/app/_components/Button';

const People = () => {
    const [people, setPeople] = useState(['']);

    const handlePlus = () => {
        setPeople([...people, '']);
    };
    const handleMinus = () => {
        if (people.length > 1) {
            setPeople(people.slice(0, -1));
        }
    };

    const handlePersonChange = (index: number, value: string) => {
        const newPeople = [...people];
        newPeople[index] = value;
        setPeople(newPeople);
    };

    return (
        <>
            <Count
                count={people.length}
                handlePlus={handlePlus}
                handleMinus={handleMinus}
            />
            <Form>
                <Fieldset className="flex h-[320px] flex-col items-center justify-start">
                    {people.map((person, i) => {
                        return (
                            <div
                                key={i}
                                className="text-main flex flex-wrap items-center gap-2 sm:mx-4">
                                <Text
                                    className="max-w-[250px]"
                                    value={person}
                                    placeholder="Name"
                                    onChange={e =>
                                        handlePersonChange(i, e.target.value)
                                    }
                                />
                            </div>
                        );
                    })}
                </Fieldset>
            </Form>
            <PageRouteButton
                hrefB="/"
                hrefN="/menu"
                labelB="back"
                labelN="next"
                page='1'
            />
        </>
    );
};

export default People;