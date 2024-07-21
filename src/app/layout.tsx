import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Split Money',
    description: "Split Cost with you're friends!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex min-h-screen items-center justify-center sm:px-10">
                    <div className="box-border flex h-[652px] w-full max-w-[612.8px] flex-col content-around items-center pt-10">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
