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