import React from "react"
import { twMerge } from "tailwind-merge"

type Props = React.ComponentPropsWithoutRef<"input">
type Refs = HTMLInputElement

const Input = React.forwardRef<Refs, Props>(({ className, ...rest }, refs) => {
    const classNames = twMerge(
        "w-full bg-gray-100 h-10 p-3 rounded-lg",
        "font-medium text-xs md:text-sm",
        "placeholder:text-gray-500 placeholder:text-[0.8rem] md:placeholder:text-sm",
        "outline-2 focus:outline focus:outline-black",
        className
    )

    return (
        <input
            ref={refs}
            className={classNames}
            {...rest}
        />
    )
})

export default Input