import AdminLayout from "#/components/admin-layout";
import useModal from "#/components/modal/use-modal";
import ModalAddProperty from "./modules/modal-add-property";
import PropertyCard from "./modules/property-card";
import PropertyCardList from "./modules/property-card-list";

export default function Property() {
    const modalAddProperty = useModal("modal-add-property")

    return (
        <AdminLayout>
            <div className="pb-5 md:pb-10 flex flex-col md:flex-row items-start gap-5 xl:items-center justify-between">
                <div>
                    <h2 className="text-base xl:text-xl font-semibold -tracking-wide">Properties</h2>
                    <p className="text-xs xl:text-sm text-gray-500">Daftar properti yang sudah dibangun oleh developer</p>
                </div>
                <button className="w-max bg-black text-white rounded-[10px] py-3 px-8 font-medium text-xs xl:text-sm" onClick={modalAddProperty.onOpen}>
                    Tambah properti
                </button>
            </div>
            <PropertyCardList>
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </PropertyCardList>

            <ModalAddProperty {...modalAddProperty} />
        </AdminLayout>
    )
}