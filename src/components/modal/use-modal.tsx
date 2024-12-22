import { useSearchParams } from "react-router";

export default function useModal(key: string) {
    const [queryParams, setQueryParams] = useSearchParams()

    const isOpen = !!queryParams.get(key)

    const handleOpen = () => {
        setQueryParams((prev) => {
            prev.set(key, "true")
            return prev
        })
    }
    const handleClose = () => {
        setQueryParams((prev) => {
            prev.delete(key)
            return prev
        })
    }

    return { isOpen, onOpen: handleOpen, onClose: handleClose }
}