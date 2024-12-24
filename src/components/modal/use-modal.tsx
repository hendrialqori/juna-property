import React from "react";

export default function useModal() {

    const [isOpen, setOpen] = React.useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return { isOpen, onOpen: handleOpen, onClose: handleClose }
}