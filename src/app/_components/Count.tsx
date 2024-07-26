'use client';
import { Button } from '@/app/_components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface CountProps {
    count: number;
    handlePlus: () => void;
    handleMinus: () => void;
}

export const Count = ({ count, handlePlus, handleMinus }: CountProps) => {
    return (
        <div className="dark:text-gray text-bright flex w-full flex-row items-center justify-center gap-3 px-4">
            <Button
                className="flex h-10 max-w-20 items-center justify-center"
                onClick={handleMinus}>
                <FontAwesomeIcon
                    icon={faMinus}
                />
            </Button>
            <span className="w-20 text-center text-[1.5rem]">{count}</span>
            <Button
                className="h-10 max-w-20"
                onClick={handlePlus}>
                <FontAwesomeIcon
                    icon={faPlus}
                />
            </Button>
        </div>
    );
};
