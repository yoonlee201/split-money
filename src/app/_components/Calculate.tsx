'use client';

import { Fieldset, Form } from '@/app/_components/Form';
import { Menu, More } from '@/app/_components/Menu';
import { Count } from '@/app/_components/Count';
import { useState } from 'react';

const Calculate = () => {
    const [count, setCount] = useState(1);
    return (
        <>
            <Count
                count={count}
                setCount={setCount}
            />
            <Form>
                <Fieldset className="h-[320px] items-start">
                    {Array.from(Array(count), (e, i) => {
                        return <Menu key={i} />;
                    })}
                </Fieldset>
                <Fieldset className="pb-3 pt-1">
                    <More>Tax ($)</More>
                    <More>Tip (%)</More>
                    <More disabled>Total ($)</More>
                </Fieldset>
            </Form>
        </>
    );
};

export default Calculate;
