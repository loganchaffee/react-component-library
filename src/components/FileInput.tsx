import { useRef, useState } from 'react';
import Button from './Button';
import CornerSVG from './CornerSVG';

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface InputRefType {
    current: HTMLInputElement | null;
}

function FileInput({ className, onClick, onChange, accept, multiple = false, ...props }: FileInputProps) {
    // Add all images if accept is includes image/*
    if (accept && accept.includes('image/*')) {
        accept +=
            ',image/jpeg,image/png,image/gif,image/webp,image/svg+xml,image/apng,image/avif,image/heif,image/heic,image/jxl,image/xbm';
    }

    const [files, setFiles] = useState<File[]>([]);

    const [dragging, setDragging] = useState(false);

    const containerRef = useRef(null);

    const inputRef: InputRefType = useRef(null);

    const textRef = useRef(null);

    // Handle click event internally and call onClick prop as callback if it exists
    function handleClick(e: React.MouseEvent<HTMLElement>) {
        if (inputRef.current === null) return;

        inputRef.current.click();

        if (onClick === undefined) return;

        const event = new Event('click', { bubbles: false });

        inputRef.current.dispatchEvent(event);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files !== null) {
            setFiles(Array.from(e.target.files));
        } else {
            setFiles([]);
        }

        // let fileArray = []

        // for (let i = 0; i < e.target.files.length; i++) {
        //     const file = e.target.files[i];
        //     fileArray.push(file)
        // }
    }

    function handleDragEnter() {}

    function handleDragLeave() {}

    // Prevent default behavior (Prevent file from being opened)
    function dragOverHandler(e) {}

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();

        if (inputRef.current === null) return;

        let DTFiles = e.dataTransfer.files;

        // Check file limit
        if (multiple === false && DTFiles.length > 1) {
        }

        // Check file type
        for (let i = 0; i < DTFiles.length; i++) {
            if (accept && !accept.includes(DTFiles[i].type)) {
            }
        }

        // Set files and trigger change event
        inputRef.current.files = DTFiles;

        const event = new Event('change', { bubbles: true });

        inputRef.current.dispatchEvent(event);
    }

    return (
        <div
            className={`relative mt-10 inline-block w-[300px] border border-white ${className || ''}`}
            onClick={handleClick}
        >
            <svg className='absolute right-0 top-0 h-[5px] w-[100px] -translate-y-[6px] translate-x-[1px]'>
                <polygon points='0,5 10,0 90,0 100,5' className='fill-white stroke-white stroke-2 ' />
            </svg>

            <CornerSVG className='z-20' position='tl' />

            <button className='absolute left-0 top-0 z-10 h-full w-fit border-r px-4 transition-all hover:bg-white hover:text-black active:bg-gray-300'>
                SELECT FILE
            </button>

            {files.length === 0 && (
                <p className='ml-[122px] overflow-hidden whitespace-nowrap py-2 text-center'>NO FILES CHOSEN</p>
            )}

            {files.length === 1 && (
                <p
                    className='ml-[122px] overflow-hidden whitespace-nowrap px-2 py-2 text-center text-sm'
                    style={{ textOverflow: 'ellipsis' }}
                >
                    {files[0].name}
                </p>
            )}

            {files.length > 1 && (
                <p className='ml-[122px] overflow-hidden whitespace-nowrap py-2 text-center text-sm'>
                    {files.length} Files CHOSEN
                </p>
            )}

            <input
                ref={inputRef}
                type='file'
                className='hidden'
                {...props}
                onClick={onClick}
                multiple={multiple}
                onChange={handleChange}
            />

            <CornerSVG position='br' />
        </div>
    );
}

export default FileInput;
