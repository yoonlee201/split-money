import Page from '@/app/_components/Page';
import Link from 'next/link';
import { Button } from './_components/Button';

export default function Home() {
    return (
        <div className="flex h-full items-center">
            <Link
                href={'/people'}
                className="inline-flex">
                <Button>Start</Button>
            </Link>
        </div>
    );
}
