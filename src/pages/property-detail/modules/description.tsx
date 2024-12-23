import { HiArrowNarrowRight } from "react-icons/hi";
import { LuBath } from "react-icons/lu";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineWidthWide } from "react-icons/md";
import useModal from "#/components/modal/use-modal";
import ModalBooking from "./modal-booking";
import { Link } from "react-router";

export default function Description() {

    const modalBooking = useModal("modal-booking")

    return (
        <div aria-label="description" className="space-y-5 xl:space-y-7">
            <div>
                <h2 className="font-semibold text-base md:text-lg xl:text-2xl -tracking-wide">KPR rumah tipe 21</h2>
                <p className="font-medium text-xs md:text-sm xl:text-base text-gray-500">Jalan Sumbawa I/20, Kelurahan Merdeka, Kecamatan Sumurbandung, Bandung 40113</p>
            </div>
            <h2 className="font-bold text-base md:text-lg xl:text-2xl -tracking-wide">Rp 500 juta ,-</h2>
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-start">
                    <LuBedDouble className="text-sm md:text-base xl:text-xl" />
                    <p className="text-xs md:text-sm font-medium">4 Kamar</p>
                </div>
                <div className="flex flex-col items-start">
                    <LuBath className="text-sm md:text-base xl:text-xl" />
                    <p className="text-xs md:text-sm font-medium">1 Makar mandi</p>
                </div>
                <div className="flex flex-col items-start">
                    <MdOutlineWidthWide className="text-sm md:text-base xl:text-xl" />
                    <p className="text-xs md:text-sm font-medium">600m2</p>
                </div>
            </div>
            <p className="text-xs md:text-sm xl:text-base leading-[170%]">
                Rumah type 21 ini dibangun di atas lahan luas 600m², memberikan keleluasaan untuk berbagai kebutuhan Anda. Memiliki 4 kamar tidur yang nyaman dan 1 kamar mandi, rumah ini dirancang dengan fungsionalitas dan kenyamanan. Lokasinya sangat strategis, dekat dengan fasilitas umum seperti sekolah, pusat perbelanjaan, dan transportasi, menjadikannya pilihan ideal untuk keluarga. Dengan halaman yang luas, Anda dapat menambahkan taman, area bermain, atau parkir kendaraan. Rumah ini menawarkan kombinasi sempurna ant ara hunian praktis dan investasi jangka panjang.
            </p>
            <Link to={{ pathname: "/property/booking/1" }} className="w-max flex items-center justify-center gap-3 bg-black text-white rounded-lg py-3 px-5">
                <span className="text-[0.65rem] md:text-xs xl:text-sm font-medium">Booking sekarang</span>
                <HiArrowNarrowRight />
            </Link>
            <ModalBooking {...modalBooking} />
        </div>
    )
}