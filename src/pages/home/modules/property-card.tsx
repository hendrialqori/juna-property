import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router";
import Button from "#/components/ui/button";
import { Property } from "#/@types";
import { priceFormat } from "#/lib/utils";

export function Card(props: Property) {
    return (
        <figure className="rounded-2xl overflow-hidden font-inter">
            <img src={props.thumbnail_url} className="h-36 w-full object-cover" alt="avatar" />
            <figure className="bg-[#F1F4F9] p-4 md:p-5 space-y-4 md:space-y-6">
                <div className="space-y-1">
                    <p className="text-[0.65rem] md:text-xs xl:text-sm font-medium">Tipe {props.type}</p>
                    <h2 className="font-semibold -tracking-wide text-xs md:text-sm xl:text-base">Rp {priceFormat(props.price)}</h2>
                    <p className="text-[0.65rem] md:text-xs xl:text-sm text-gray-500 line-clamp-2">{props.description}</p>
                </div>
                <Button asChild className="flex items-center justify-center gap-3 w-full">
                    <Link to={{ pathname: `/property/${props.id}` }}>
                        <span className="text-[0.65rem] md:text-xs xl:text-sm font-medium">Lihat detail</span>
                        <HiArrowNarrowRight />
                    </Link>
                </Button>
            </figure>
        </figure>
    )
}

export function Skeleton() {
    return (
        <figure className="rounded-2xl overflow-hidden font-inter bg-[#F1F4F9]">
            <div className="h-36 w-full bg-gray-200 animate-pulse" />
            <div className="px-4 md:px-5 space-y-4 mt-3">
                <div className="bg-gray-200 h-5 w-16 rounded-md animate-pulse" />
                <div className="bg-gray-200 h-8 w-full rounded-md animate-pulse" />
            </div>
            <div className="p-4 md:p-5">
                <div className="bg-gray-200 h-10 w-full rounded-md animate-pulse" />
            </div>
        </figure>
    )
}