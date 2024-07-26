import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    DEFAULT: '#bfbfbf',
                },
                bright: {
                    DEFAULT: '#1c2f4d',
                },
            },
            borderRadius: {
                lg: '.5rem',
                md: 'calc(.5rem - 2px)',
                sm: 'calc(.5rem - 4px)',
            },
            borderWidth: {
                sm: '1px',
                md: '2px',
                lg: '4px',
            },
        },
    },
    plugins: [],
};
export default config;
