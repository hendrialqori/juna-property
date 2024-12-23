import React from "react"
import { twMerge } from "tailwind-merge"

type Props = React.ComponentPropsWithoutRef<"select">
type Refs = HTMLSelectElement

const Select = React.forwardRef<Refs, Props>(({ className, ...props }, refs) => {

    const classNames = twMerge(
        "w-full bg-gray-100 h-10 p-3 rounded-lg",
        "font-medium text-xs md:text-sm",
        "placeholder:text-gray-500 placeholder:text-[0.8rem] md:placeholder:text-sm",
        "outline-2 focus:outline focus:outline-black",
        className)

    return (
        <select
            ref={refs}
            className={classNames}
            {...props}
        />
    )

})



export default Select