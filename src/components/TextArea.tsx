import { InputHTMLAttributes, useState } from 'react';
import CornerSVG from './CornerSVG';

interface TextInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

function TextInput({ className, onChange, value, defaultValue, placeholder = 'Enter Text', ...props }: TextInputProps) {
    const [internalValue, setInternalValue] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
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
                <textarea
                    onChange={handleChange}
                    value={value || internalValue}
                    placeholder={placeholder}
                    className=' min-h-[50px] w-full bg-transparent'
                    {...props}
                />
            ) : (
                <textarea
                    onChange={handleChange}
                    defaultValue={defaultValue || internalValue}
                    placeholder={placeholder}
                    className=' min-h-[50px] w-full bg-transparent'
                    {...props}
                />
            )}

            <CornerSVG position='br' />
        </div>
    );
}

export default TextInput;
