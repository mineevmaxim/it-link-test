import React, { ButtonHTMLAttributes } from 'react';
import Button from '@/components/atoms/Button/Button';
import Text from '@/components/atoms/Text/Text';

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const ButtonText = ({ text, ...otherProps }: ButtonTextProps) => {
    return (
        <Button {...otherProps}>
            <Text text={text} />
        </Button>
    );
};

export default ButtonText;
