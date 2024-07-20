'use client';

import { useState } from 'react';
import Calculate from '@/app/_components/mainPages/Calculate';
import People from '@/app/_components/mainPages/People';
import Receipt from '@/app/_components/mainPages/Receipt';

const Page = () => {
    const [people, setPeople] = useState(['']);
    const [page, setPage] = useState(1);

    // const getPage = () => {
    //     switch (page) {
    //         case 1:
    //             return (
    //                 <People
    //                     people={people}
    //                     setPeople ={setPeople}
    //                     />
    //             );
    //         case 2:
    //             return <Calculate />;
    //         default:
    //             return <Receipt />;
    //     }
    // };

    return (
        <div className="flex h-full w-full items-end justify-end gap-2 p-3">
            {page > 1 && (
                <button
                    onClick={() => {
                        setPage(page - 1);
                    }}
                    className="box-border max-w-[50px] rounded-sm p-0">
                    back
                </button>
            )}
            {page < 3 && (
                <button
                    onClick={() => {
                        setPage(page + 1);
                    }}
                    className="box-border max-w-[50px] rounded-sm p-0">
                    next
                </button>
            )}
        </div>
    );
};

export default Page;
