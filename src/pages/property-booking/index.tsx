import Form from "./form";
import Header from "./header";
import Media from "./media";

export default function Booking() {
    return (
        <main className="container font-inter pb-10">
            <Header />
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