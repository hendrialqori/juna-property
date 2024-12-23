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
    return (
        <div className="absolute inset-0 flex justify-center items-center bg-black/60 z-10">
            <div className="flex justify-center items-center gap-2">
                <CgSpinner className="text-xl animate-spin text-white" />
                <span className="font-medium text-sm text-white">{message}</span>
            </div>
        </div>
    )
}