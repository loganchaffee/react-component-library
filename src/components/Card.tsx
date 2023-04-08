import { FC } from "react";
import type { HTMLAttributes } from "react";

interface LineProps extends HTMLAttributes<HTMLElement> {
    position?: "top" | "bottom";
}

function Line({ position = "top", ...props }: LineProps) {
    if (position === "top") {
        return (
            <div className=" relative border-b">
                <div className="absolute left-0 top-[-1px] h-[12px] w-[12px] border-l-4 border-t-4" />
                <div className="absolute right-0 top-[-1px] h-[12px] w-[12px] border-r-4 border-t-4 " />
            </div>
        );
    } else {
        return (
            <div className=" relative  border-b">
                <div className="absolute bottom-[-2px] left-0 h-[12px] w-[12px] border-b-4 border-l-4" />
                <div className="absolute bottom-[-2px] right-0 h-[12px] w-[12px] border-b-4 border-r-4 " />
            </div>
        );
    }
}

interface Line2Props extends HTMLAttributes<HTMLElement> {}

function Line2(props: Line2Props) {
    return (
        <div className="relative border-b">
            <div className="absolute left-0 top-[-2px] h-[6px] w-[6px] bg-white" />
            <div className="absolute right-0 top-[-2px] h-[6px] w-[6px] bg-white" />
        </div>
    );
}

interface CardProps extends HTMLAttributes<HTMLElement> {
    variant?: "corners" | "line" | "double-line";
}

function Card({ children, className, variant = "corners", ...props }: CardProps) {
    return (
        <div className={`inline-block w-[300px] p-1 ${className}`} {...props}>
            {variant === "corners" && <Line />}

            {variant === "line" || variant === "double-line" ? (
                <div>
                    <Line2 />
                    <div className="h-3" />
                    {variant === "double-line" && <Line2 />}
                </div>
            ) : null}

            <div className="p-5">{children}</div>

            {variant === "corners" && <Line position="bottom" />}

            {variant === "line" || variant === "double-line" ? (
                <div>
                    {variant === "double-line" && <Line2 />}
                    <div className="h-3" />
                    <Line2 />
                </div>
            ) : null}
        </div>
    );
}

interface CardTitleProps extends HTMLAttributes<HTMLElement> {}

function Title({ children, className, ...props }: CardTitleProps) {
    return (
        <h3 className={`mb-5 text-2xl ${className}`} {...props}>
            {children}
        </h3>
    );
}

interface CardBodyProps extends HTMLAttributes<HTMLElement> {}

function Body({ children, className, ...props }: CardBodyProps) {
    return (
        <div className={`${className}`} {...props}>
            {children}
        </div>
    );
}

Card.Title = Title;

Card.Body = Body;

export default Card;
