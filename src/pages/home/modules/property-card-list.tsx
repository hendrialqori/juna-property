import { HiArrowNarrowRight } from "react-icons/hi";

interface Props { children: React.ReactNode }

export default function PropertyCardList({ children }: Props) {
    return (
        <div className="space-y-8 xl:space-y-16 pt-16 xl:pt-10">
            <div>
                <h2 className="text-base md:text-xl xl:text-3xl font-semibold">Properti Terbaru</h2>
                <div className="flex items-center gap-3">
                    <p className="text-xs text-gray-500 font-medium">Daftar properti kami yang baru selesai</p>
                    <div className="grid place-items-center size-6 rounded-full bg-slate-100">
                        <HiArrowNarrowRight />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {children}
            </div>
        </div>
    )
}