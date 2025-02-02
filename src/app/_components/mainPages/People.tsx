'use client';

import { useEffect, useState } from 'react';
import { Count } from '@/app/_components/Count';
import { Fieldset, Form, Text } from '@/app/_components/Form';
import { PageRouteButton } from '@/app/_components/Button';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

const People = () => {
    const [people, setPeople] = useState<string[]>(['']);

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

    const handleNextClick = () => {
        setLocalStorage(
            'people',
            people.filter(p => p !== '')
        );
    };

    useEffect(() => {
        const storedPeople: string[] = getLocalStorage('people', ['']);
            setPeople(storedPeople.length < 1 ? [''] : storedPeople);
    }, []);

    return (
        <>
            <section className="w-full">
                <Count
                    count={people.length}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                />
                <Form>
                    <Fieldset className="flex h-full max-h-[460px] flex-col items-center justify-start overflow-y-scroll">
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
                                            handlePersonChange(
                                                i,
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            );
                        })}
                    </Fieldset>
                </Form>
            </section>
            <PageRouteButton
                hrefB="/"
                hrefN="/menu"
                labelB="back"
                labelN="next"
                onNextClick={handleNextClick}
                page="1"
            />
        </>
    );
};

export default People;
