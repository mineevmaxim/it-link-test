'use client';

import { useContext } from 'react';
import { CounterContext } from '@/components/organisms/Counter/Counter';
import ButtonText from '@/components/molecules/ButtonText/ButtonText';

const CounterView = () => {
    const { index, increment, decrement } = useContext(CounterContext);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
            }}
        >
            <span>{index}</span>
            <div style={{ display: 'flex', gap: '16px' }}>
                <ButtonText
                    onClick={decrement}
                    text={'decrement'}
                />
                <ButtonText
                    onClick={increment}
                    text={'increment'}
                />
            </div>
        </div>
    );
};

export default CounterView;
