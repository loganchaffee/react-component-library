import { FC } from "react";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg";
}

function Triangle() {
    const style = {
        width: 0,
        height: 0,
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderBottom: "5px solid black",
    };

    return <div style={style} />;
}

function Button({ children, size, className, ...props }: ButtonProps) {
    let fontSize = "";

    switch (size) {
        case "sm":
            fontSize = "text-sm";
            break;
        case "md":
            fontSize = "text-lg";
            break;
        case "lg":
            fontSize = "text-2xl";
            break;
        default:
            fontSize = "text-sm";
            break;
    }

    const style = {
        width: "0",
        height: "0",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "10px solid red",
        transform: "rotate(-45deg)",
        position: "absolute",
        top: "-4px",
        left: "-8px",
    };

    return (
        <button className={`relative border border-white px-4 py-2 ${fontSize} ${className}`} {...props}>
            <svg width={15} height={15} className="absolute left-0 top-0 -translate-x-[2px] -translate-y-[2px]">
                <polygon points="0,0 15,0 0,15" fill="#000000" />
                <line x1="1" y1="14" x2="14" y2="1" className="stroke-white stroke-1" />
            </svg>

            {children}

            <svg width={15} height={15} className="absolute bottom-0 right-0 translate-x-[2px] translate-y-[2px]">
                <polygon points="15,15 15,0 0,15" />
                <line x1="1" y1="14" x2="14" y2="1" className="stroke-white stroke-1" />
            </svg>
        </button>
    );
}

export default Button;
