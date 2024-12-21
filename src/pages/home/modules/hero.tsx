import { LuSearch } from "react-icons/lu";

export default function Hero() {
    return (
        <section className="flex flex-col xl:flex-row gap-16 xl:gap-10 pt-10">
            <div className="w-full xl:w-[55%] space-y-10">
                <p className="text-2xl md:text-5xl -tracking-wide font-medium leading-[120%]">
                    Jualin aja rumah kontrakan anda ke <span className="text-primary font-bold">Juna properti</span>, Konsultan properti terpercaya
                </p>
                <div className="space-y-3 w-full md:w-8/12">
                    <p className="text-xs md:text-sm xl:text-base font-medium">Temukan rumah impian anda di sini</p>
                    <form className="flex items-center bg-slate-100 pl-4 pr-2 py-2 rounded-full">
                        <input type="text" className="outline-none w-full bg-transparent text-sm md:text-base" placeholder="cari tipe rumah" />
                        <button className="flex items-center gap-2 bg-black text-white px-4 rounded-full py-2">
                            <LuSearch className="text-sm md:text-xl"/>
                            <span className="text-xs md:text-sm font-medium">Cari</span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full xl:w-[45%] space-y-4">
                <img src="/rumah.jpg" className="w-full  object-cover  h-[271px] rounded-2xl" loading="lazy" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/rumah2.jpg" className="h-[202px] object-cover rounded-2xl" />
                    <img src="/rumah2.jpg" className="h-[202px] object-cover rounded-2xl" />
                </div>
            </div>
        </section>
    )
}