import { useProperties } from "#/services/property-service"
import { HiArrowNarrowRight } from "react-icons/hi"
import Header from "./modules/header"
import Hero from "./modules/hero"
import * as Property from "./modules/property-card"
import ProperyCardList from "./modules/property-card-list"

export default function Home() {

    const properties = useProperties()

    return (
        <main className="container pb-20">
            <Header />
            <Hero />
            <section className="space-y-8 xl:space-y-16 pt-16 xl:pt-10">
                <div>
                    <h2 className="text-base md:text-xl xl:text-3xl font-semibold">Properti Terbaru</h2>
                    <div className="flex items-center gap-3">
                        <p className="text-sm text-gray-500 font-medium">Daftar properti kami yang baru selesai</p>
                        <div className="grid place-items-center size-6 rounded-full bg-slate-100">
                            <HiArrowNarrowRight />
                        </div>
                    </div>
                </div>
                <ProperyCardList fetchStatus={properties.status}>
                    {properties.data?.data.map((property) => (
                        <Property.Card key={property.id} {...property} />
                    ))}
                </ProperyCardList>
            </section>

        </main>
    )
}