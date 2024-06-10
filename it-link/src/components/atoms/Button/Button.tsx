import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({ children, ...otherProps }: ButtonProps) => {
    return (
        <button
            style={{
                padding: 8,
            }}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
