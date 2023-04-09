import { FC } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import CornerSVG from './CornerSVG';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
}

function Triangle() {
    const style = {
        width: 0,
        height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid black',
    };

    return <div style={style} />;
}

function Button({ children, size, className, ...props }: ButtonProps) {
    let fontSize = '';

    switch (size) {
        case 'sm':
            fontSize = 'text-md';
            break;
        case 'md':
            fontSize = 'text-2xl';
            break;
        case 'lg':
            fontSize = 'text-4xl';
            break;
        default:
            fontSize = 'text-md';
            break;
    }

    return (
        <button
            className={`relative border border-white bg-opacity-10 px-4 py-2 transition-all hover:bg-white hover:text-black active:scale-[.98] active:bg-gray-300 ${fontSize} ${
                className || ''
            }`}
            {...props}
        >
            <CornerSVG position='tl' />

            {children}

            <CornerSVG position='br' />
        </button>
    );
}

export default Button;
