import React, { LegacyRef } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends React.ComponentPropsWithoutRef<"textarea"> {
    ref?: LegacyRef<HTMLTextAreaElement>
}

const Textarea = ({ ref, className, ...props }: InputProps) => {
    const classNames = twMerge(
        "w-full bg-slate-100 p-3 rounded-lg",
        "font-medium text-xs md:text-sm",
        "placeholder:text-slate-500 placeholder:text-[0.8rem] md:placeholder:text-sm",
        "outline-2 focus:outline focus:outline-black",
        className
    )

    return (
        <textarea
            ref={ref}
            className={classNames}
            {...props}
        />
    )
}

export default Textarea