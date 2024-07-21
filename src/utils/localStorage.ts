// utils/localStorage.ts

export const getLocalStorage = (key: string, defaultValue: any) => {
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(key);
        if (stored !== null) {
            return JSON.parse(stored);
        }
    }
    return defaultValue;
};

export const setLocalStorage = (key: string, value: any) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};
