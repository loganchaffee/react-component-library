import { InputHTMLAttributes, useState } from 'react';
import CornerSVG from './CornerSVG';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInput({ className, onChange, value, defaultValue, placeholder, ...props }: TextInputProps) {
    const [internalValue, setInternalValue] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInternalValue(e.target.value);
        onChange && onChange(e);
    }

    return (
        <div className={`relative mt-10 inline-block w-[300px] border border-white px-4 py-2  ${className || ''}`}>
            <svg className='absolute right-0 top-0 h-[5px] w-[100px] -translate-y-[6px] translate-x-[1px]'>
                <polygon points='0,5 10,0 90,0 100,5' className='fill-white stroke-white stroke-2 ' />
            </svg>

            <CornerSVG position='tl' />

            {defaultValue ? (
                <input
                    defaultValue={value || internalValue}
                    type='text'
                    placeholder={placeholder}
                    className='w-full bg-transparent'
                    onChange={handleChange}
                    {...props}
                />
            ) : (
                <input
                    value={defaultValue || internalValue}
                    placeholder={placeholder}
                    type='text'
                    className='w-full bg-transparent'
                    onChange={handleChange}
                    {...props}
                />
            )}

            <CornerSVG position='br' />
        </div>
    );
}

export default TextInput;
