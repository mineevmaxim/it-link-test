'use client';
import React, { memo, useMemo } from 'react';
import { CounterContext } from '@/components/organisms/Counter/Counter';
import ButtonText from '@/components/molecules/ButtonText/ButtonText';
import Text from '@/components/atoms/Text/Text';

const CounterView = () => {
    const { index, increment, decrement } = React.useContext(CounterContext);

    const indexView = useMemo(() => <Text text={index.toString()} />, [index]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
            }}
        >
            {indexView}
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

export default memo(CounterView);
