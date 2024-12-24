import ReactDOM from "react-dom";
import { CgSpinner } from "react-icons/cg";

export function FallbackPage() {
    return (
        <main className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <img src="/icon.svg" alt="icon" width={50} loading="lazy" />
                <div className="flex justify-center items-center gap-2">
                    <CgSpinner className="text-xl animate-spin text-primary" />
                    <span className="font-medium text-sm text-primary">Memuat halaman</span>
                </div>
            </div>
        </main>
    )
}

export function LoadingScreen({ show, message }: { show: boolean; message: string }) {
    if (!show) return null

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex justify-center items-center bg-white/70 z-[60]">
            <div className="flex justify-center items-center gap-2">
                <CgSpinner className="text-lg md:text-xl animate-spin text-black" />
                <span className="font-medium text-xs md:text-sm text-black">{message}</span>
            </div>
        </div>
        , document.body)
}