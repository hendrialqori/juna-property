import { HiArrowNarrowRight } from "react-icons/hi";
// import { LuBath } from "react-icons/lu";
// import { LuBedDouble } from "react-icons/lu";
// import { MdOutlineWidthWide } from "react-icons/md";
import { Link } from "react-router";
import Button from "#/components/ui/button";
import { Property } from "#/@types";
import { priceFormat } from "#/lib/utils";

type Props = Pick<Property, "id" | "type" | "price" | "address" | "description">

export default function Description(props: Props) {

    return (
        <div aria-label="description" className="space-y-5 xl:space-y-7">
            <div>
                <h2 className="font-semibold text-base md:text-lg xl:text-2xl -tracking-wide">KPR rumah tipe {props.type}</h2>
                <p className="font-medium text-xs md:text-sm xl:text-base text-gray-500">{props.address}</p>
            </div>
            <h2 className="font-bold text-base md:text-lg xl:text-2xl -tracking-wide">Rp {priceFormat(props.price)} ,-</h2>
            {/* <div className="flex items-center gap-4">
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
            </div> */}
            <p className="text-xs md:text-sm xl:text-base leading-[170%]">
                {props.description}
            </p>
            <Button asChild className="flex items-center justify-center gap-3">
                <Link to={{ pathname: `/property/booking/${props.id}` }}>
                    <span className="text-[0.65rem] md:text-xs xl:text-sm font-medium">Booking sekarang</span>
                    <HiArrowNarrowRight />
                </Link>
            </Button>
        </div>
    )
}