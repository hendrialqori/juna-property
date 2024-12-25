import { HiArrowNarrowLeft } from "react-icons/hi";
import Form from "./modules/form";
import Header from "./modules/header";
import Media from "./modules/media";
import { useNavigate } from "react-router";

export default function Booking() {

    const navigate = useNavigate()
    const backToPreviousPage = () => navigate(-1)

    return (
        <main className="container font-inter pb-10">
            <Header />
            <div className="pb-5">
                <button className="flex items-center gap-2 hover:underline" onClick={backToPreviousPage}>
                    <HiArrowNarrowLeft />
                    <span className="text-xs md:text-sm font-medium">Kembali</span>
                </button>
            </div>
            <div className="space-y-2">
                <h1 className="text-base md:text-base xl:text-2xl font-semibold leading-5">Formulir pengajuan pembelian rumah</h1>
                <p className="text-xs md:text-sm font-medium text-gray-600">Silahkan isi formulir di bawah dangan data yang valid</p>
            </div>
            <div className="flex flex-col xl:flex-row items-start justify-center py-10 gap-10">
                <Media />
                <Form />
            </div>
        </main>
    )
}