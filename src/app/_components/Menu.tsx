'use client';
import { Button, Price, Text } from '@/app/_components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <div className="text-main flex flex-wrap items-center gap-2 p-2">
            <Text className="basis-[100px]" />
            <Price className="basis-[75px]" />
            <Button className="w-full basis-[50px] whitespace-nowrap">
                <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ color: '#1c2f4d' }}
                />
                <span className="ml-2">Add Person</span>
            </Button>
        </div>
    );
};

export default Menu;
