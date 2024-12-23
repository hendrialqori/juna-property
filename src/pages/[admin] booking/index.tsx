import AdminLayout from "#/components/admin-layout";
import Table from "./modules/table";

export default function Booking() {
    return (
        <AdminLayout>
            <div className="pb-5 md:pb-10 flex items-center justify-between">
                <div>
                    <h2 className="text-base xl:text-xl font-semibold -tracking-wide">Booking</h2>
                    <p className="text-xs xl:text-sm text-gray-500">Daftar properti yang sudah dibooking</p>
                </div>
            </div>
            <Table />
        </AdminLayout>
    )
}