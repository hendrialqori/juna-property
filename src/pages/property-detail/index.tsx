import { HiArrowNarrowLeft } from "react-icons/hi";
import Description from "./modules/description";
import Header from "./modules/header";
import Media from "./modules/media";
import { useNavigate, useParams } from "react-router";
import { useProperty } from "#/services/property-service";
import { LoadingScreen } from "#/components/lazy";
import { ErrorScreen } from "#/components/error";
import { Property } from "#/@types";

export default function Detail() {

    const navigate = useNavigate()
    const params = useParams()

    const id = params.id
    const property = useProperty(String(id))

    const dataProperty = property.data?.data as Property

    const backToPreviousPage = () => navigate(-1)

    if (property.isPending) {
        return <LoadingScreen show message="Mengunduh data properti..." />
    }

    if (property.isError) {
        return <ErrorScreen show />
    }

    return (
        <main className="container pb-20 font-inter">
            <Header />
            <div className="pb-5">
                <button className="flex items-center gap-2 hover:underline" onClick={backToPreviousPage}>
                    <HiArrowNarrowLeft />
                    <span className="text-xs md:text-sm font-medium">Kembali</span>
                </button>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <Description {...dataProperty}/>
                <Media {...dataProperty}/>
            </div>
        </main>
    )
}