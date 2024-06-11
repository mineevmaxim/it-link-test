'use client';
import { createContext, ReactNode, useCallback, useState } from 'react';

interface counterContextType {
    index: number;
    increment: () => void;
    decrement: () => void;
}

const CounterContext = createContext<counterContextType>({
    index: 0,
    decrement: () => {},
    increment: () => {},
});

function CounterProvider({ children }: { children: ReactNode }) {
    const [index, setIndex] = useState(0);
    const increment = useCallback(() => setIndex((prev) => prev + 1), []);
    const decrement = useCallback(() => setIndex((prev) => prev - 1), []);

    return (
        <CounterContext.Provider
            value={{
                index,
                increment,
                decrement,
            }}
        >
            {children}
        </CounterContext.Provider>
    );
}

export default CounterProvider;
export { CounterContext };
