import React from 'react';

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
    text: string;
}

const Text = ({ text, ...otherProps }: TextProps) => {
    return <p {...otherProps}>{text}</p>;
};

export default Text;
