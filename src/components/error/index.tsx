import { MdErrorOutline } from "react-icons/md";

export function ErrorScreen({ show }: { show: boolean }) {
    if (!show) return null
    return (
        <div className="absolute inset-0 flex justify-center items-center bg-white/70 z-10">
            <div className="flex justify-center items-center gap-2">
                <MdErrorOutline className="text-lg md:text-xl text-red-500" />
                <span className="font-medium text-xs md:text-sm text-red-500">Something went wrong!</span>
            </div>
        </div>
    )
}