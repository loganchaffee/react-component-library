import type { SVGAttributes } from 'react';

interface CornerSVGProps extends SVGAttributes<SVGElement> {
    position: 'tl' | 'br';
}

function CornerSVG({ position, className }: CornerSVGProps) {
    if (position === 'tl') {
        return (
            <svg
                width={15}
                height={15}
                className={`${className} absolute left-0 top-0 -translate-x-[2px] -translate-y-[2px] overflow-hidden`}
            >
                <polygon points='0,0 15,0 0,15' fill='#000000' />
                <line x1='1.5' y1='14' x2='14' y2='1.5' className='stroke-white stroke-1' strokeLinecap='butt' />
            </svg>
        );
    }

    if (position === 'br') {
        return (
            <svg width={15} height={15} className='absolute bottom-0 right-0 translate-x-[2px] translate-y-[2px]'>
                <polygon points='15,15 15,0 0,15' />
                <line x1='1' y1='13' x2='13' y2='1' className='stroke-white stroke-1' />
            </svg>
        );
    }

    return null;
}

export default CornerSVG;
