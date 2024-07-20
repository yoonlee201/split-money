'use client';

import { useState } from 'react';
import Calculate from '@/app/_components/Calculate';
import People from '@/app/_components/People';
import Receipt from '@/app/_components/Receipt'; 

const Page = () => {
    // const [json, setJson] = useState({ people: [], data: [] });
    const [people, setPeople] = useState([""]);
    const [page, setPage] = useState(1);

    const getPage = () => {
        switch (page) {
            case 1:
                return (
                    <People
                        people={people}
                        setPeople ={setPeople}
                        />
                );
            case 2:
                return <Calculate />;
            default:
                return <Receipt />;
        }
    };

    return (
        <div className="flex flex-col items-center box-border h-[652px] w-full max-w-[612.8px] content-around pt-10">
            {getPage()}
            <div className="flex w-full h-full items-end justify-end gap-2 p-3">
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
        </div>
    );
};

export default Page;
