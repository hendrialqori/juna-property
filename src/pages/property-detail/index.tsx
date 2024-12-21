import Description from "./modules/description";
import Header from "./modules/header";
import Media from "./modules/media";

export default function Detail() {
    return (
        <main className="container pb-20 font-inter">
            <Header />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <Description />
                <Media />
            </div>
        </main>
    )
}