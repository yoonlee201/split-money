'use client';

import { PageRouteButton } from '@/app/_components/Button';

const Receipt = () => {
    return (
        <>
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
