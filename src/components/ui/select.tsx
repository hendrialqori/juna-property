import React, { LegacyRef } from "react"
import { twMerge } from "tailwind-merge"

interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
    ref?: LegacyRef<HTMLSelectElement>
}

const Select = ({ ref, className, ...props }: SelectProps) => {
    const classNames = twMerge(
        "w-full bg-slate-100 h-10 p-3 rounded-lg",
        "font-medium text-xs md:text-sm",
        "placeholder:text-slate-500 placeholder:text-[0.8rem] md:placeholder:text-sm",
        "outline-2 focus:outline focus:outline-black",
        className
    )

    return (
        <select
            ref={ref}
            className={classNames}
            {...props}
        />
    )
}

export default Select