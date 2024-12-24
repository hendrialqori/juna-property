import React, { ComponentPropsWithoutRef, LegacyRef } from "react";
import { createPortal } from "react-dom"
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge"

interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode
}

const Modal = ({ isOpen, children }: ModalProps) => {

    React.useEffect(function lockHtmlScroll() {
        if (isOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "unset"
    }, [isOpen])

    if (!isOpen) return null

    const Container = () => {
        return (
            <div className="fixed inset-0 flex justify-center items-center z-50 font-inter" aria-label="modal-root">
                <div
                    className="z-[2] max-h-screen overflow-y-auto w-full flex justify-center py-5 px-2 lg:px-0"
                    aria-label="modal-container"
                >
                    {children}
                </div>
                <div
                    className="absolute inset-0 bg-black/80 z-1"
                    aria-label="modal-overlay"
                />
            </div>
        )
    }

    return createPortal(<Container />, document.body)
}


interface ModalBodyProps extends ComponentPropsWithoutRef<"div"> { ref?: LegacyRef<HTMLDivElement> }
Modal.Body = ({ ref, className, ...rest }: ModalBodyProps) => {

    const classNames = twMerge("bg-white rounded-lg px-5 md:px-7 py-6 h-max", className)

    return (
        <div ref={ref} className={classNames} {...rest} />
    )
}

interface ModalHeaderProps extends ComponentPropsWithoutRef<"header"> { ref?: LegacyRef<HTMLHeadElement> }
Modal.Header = ({ ref, className, ...rest }: ModalHeaderProps) => {

    const classNames = twMerge("flex justify-between items-center", className)
    return <header ref={ref} className={classNames} {...rest} />
}

interface ModalTitleProps extends ComponentPropsWithoutRef<"head"> { ref?: LegacyRef<HTMLHeadingElement> }
Modal.Title = ({ ref, ...rest }: ModalTitleProps) => {
    return <h2 className="text-sm md:text-base xl:text-lg font-semibold" ref={ref} {...rest} />
}

interface ModalCloseProps extends ComponentPropsWithoutRef<"button"> { ref?: LegacyRef<HTMLButtonElement> }
Modal.Close = ({ ref, ...rest }: ModalCloseProps) => {

    return (
        <button ref={ref} className="text-xl hover:outline hover:outline-black rounded-md" type="button" {...rest}>
            <IoClose />
        </button>
    )
}

interface ModalContentProps extends ComponentPropsWithoutRef<"div"> { ref?: LegacyRef<HTMLDivElement> }
Modal.Content = ({ ref, ...rest }: ModalContentProps) => {

    return <div ref={ref} {...rest} />
}

export default Modal