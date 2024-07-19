'use client';
import { Button } from '@/app/_components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        count < Number.MAX_SAFE_INTEGER && setCount(count + 1);
    };

    const handleMinus = () => {
        count > 0 && setCount(count - 1);
    };
    return (
        <div className="text-main flex w-full flex-row items-center justify-center gap-2 p-2">
            <Button
                className="flex h-10 max-w-20 items-center justify-center"
                onClick={handleMinus}>
                <FontAwesomeIcon
                    icon={faMinus}
                    style={{ color: '#1c2f4d' }}
                />
            </Button>
            <span className='text-center w-20 text-[1.5rem]'>{count}</span>
            <Button
                className="h-10 max-w-20"
                onClick={handlePlus}>
                <FontAwesomeIcon
                    icon={faPlus}
                    style={{ color: '#1c2f4d' }}
                />
            </Button>
        </div>
    );
};

export default Count;
