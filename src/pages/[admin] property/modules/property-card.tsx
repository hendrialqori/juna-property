import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TbPencil } from "react-icons/tb";
import Button from "#/components/ui/button";
import { Property } from "#/@types";
import { priceFormat } from "#/lib/utils";
import ModalDeleteProperty from "./modal-delete";
import useModal from "#/components/modal/use-modal";

interface Props {
    property: Property;
    onUpdate: () => void
}

export default function PropertyCard({ property, onUpdate }: Props) {
    const modalDeleteProperty = useModal()

    return (
        <React.Fragment>
            <figure className="rounded-2xl overflow-hidden font-inter">
                <img src={property.thumbnail_url} className="h-36 w-full object-cover" alt="avatar" />
                <figure className="bg-[#F1F4F9] p-4 md:p-5 space-y-4 md:space-y-6">
                    <div className="space-y-1">
                        <p className="text-[0.65rem] md:text-xs xl:text-sm font-medium">Tipe {property.type}</p>
                        <h2 className="font-semibold -tracking-wide text-xs md:text-sm xl:text-base">Rp {priceFormat(property.price)}</h2>
                        <p className="text-[0.65rem] md:text-xs xl:text-sm text-gray-500 line-clamp-2">{property.description}</p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button className="flex items-center gap-1 px-3 h-8" onClick={onUpdate}>
                            <TbPencil className="size-4" />
                            <span className="text-xs">Edit</span>
                        </Button>
                        <Button className="flex items-center gap-1 px-3 h-8" onClick={modalDeleteProperty.onOpen}>
                            <MdDeleteOutline className="size-4" />
                            <span className="text-xs">Hapus</span>
                        </Button>
                    </div>
                </figure>
            </figure>
            <ModalDeleteProperty property={property} {...modalDeleteProperty} />
        </React.Fragment>
    )
}