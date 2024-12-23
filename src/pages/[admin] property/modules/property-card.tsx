import { Link } from "react-router"; 
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineWidthWide } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function PropertyCard() {
    return (
        <figure className="rounded-2xl overflow-hidden font-inter">
            <img src="/rumah2.jpg" className="h-36 w-full object-cover" alt="avatar" />
            <figure className="bg-[#F1F4F9] p-4 md:p-5 space-y-4 md:space-y-6">
                <div className="space-y-1">
                    <h2 className="font-bold text-xs md:text-sm xl:text-base">Rp 900jt</h2>
                    <div className="text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="font-medium">Properti</p>
                        <p className="text-gray-500">Jalan raya batam no.21 Batam - Kepri</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 pb-4">
                    <div className="flex items-center gap-1">
                        <LuBedDouble className="text-sm md:text-base xl:text-lg" />
                        <p className="text-xs font-medium text-gray-500">4 Kamar</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdOutlineWidthWide className="text-sm md:text-base xl:text-lg" />
                        <p className="text-xs font-medium text-gray-500">600m2</p>
                    </div>
                </div>
                <Link to={{ pathname: "/property/1" }}>
                    <div className="w-full flex items-center justify-center gap-3 bg-black text-white rounded-xl py-3">
                        <span className="text-[0.65rem] md:text-xs xl:text-sm font-medium">Lihat detail</span>
                        <HiArrowNarrowRight />
                    </div>
                </Link>
            </figure>
        </figure>
    )
}