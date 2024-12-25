import AdminLayout from "#/components/admin-layout";
import useModal from "#/components/modal/use-modal";
import Button from "#/components/ui/button";
import { useProperties } from "#/services/property-service";
import ModalFormProperty from "./modules/modal-form";
import PropertyCard from "./modules/property-card";
import PropertyCardList from "./modules/property-card-list";
import React from "react";

export default function Property() {
    const [propertyId, setPropertyId] = React.useState<string | null>(null)

    const modalForm = useModal()
    const properties = useProperties()

    const updateProperty = (id: string) =>
        () => {
            modalForm.onOpen()
            setPropertyId(id)
        }

    const handleClose = () => {
        modalForm.onClose()
        setPropertyId(null)
    }

    return (
        <AdminLayout>
            <div className="pb-5 md:pb-10 flex flex-col md:flex-row items-start gap-5 xl:items-center justify-between">
                <div>
                    <h2 className="text-base xl:text-xl font-semibold -tracking-wide">Properties</h2>
                    <p className="text-xs xl:text-sm text-gray-500">Daftar properti yang sudah dibangun oleh developer</p>
                </div>
                <Button onClick={modalForm.onOpen}>
                    Tambah properti
                </Button>
            </div>
            <PropertyCardList fetchStatus={properties.status}>
                {properties.data?.data.map((property) => (
                    <PropertyCard key={property.id} property={property} onUpdate={updateProperty(property.id)} />
                ))}
            </PropertyCardList>

            <ModalFormProperty isOpen={modalForm.isOpen} id={propertyId} onClose={handleClose} />
        </AdminLayout>
    )
}