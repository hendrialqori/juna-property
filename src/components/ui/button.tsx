import React from "react"
import { twMerge } from "tailwind-merge"
import { Slot } from "@radix-ui/react-slot";

type Props = React.ComponentPropsWithoutRef<"button"> & { asChild?: boolean }

const Button = ({ className, asChild = false, children, ...rest }: Props) => {
    const classNames = twMerge(
        "w-max bg-black text-white rounded-lg h-10 px-5 text-xs md:text-sm",
        "hover:outline hover:outline-black",
        className
    )

    const Comp = asChild ? Slot : "button"

    return (
        <Comp className={classNames} {...rest}>
            {children}
        </Comp>
    )
}

export default Button