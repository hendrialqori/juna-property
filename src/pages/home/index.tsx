import Header from "./modules/header"
import Hero from "./modules/hero"
import PropertyCard from "./modules/property-card"
import ProperyCardList from "./modules/property-card-list"

export default function Home() {

    return (
        <main className="container pb-20">
            <Header />
            <Hero />
            <ProperyCardList>
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </ProperyCardList>
        </main>
    )
}