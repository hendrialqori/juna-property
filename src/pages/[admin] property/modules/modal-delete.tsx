import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Property } from "#/@types";
import { LoadingScreen } from "#/components/lazy";
import Modal from "#/components/modal/modal";
import Button from "#/components/ui/button";
import { useRemoveProperty } from "#/services/property-service";

interface Props {
    isOpen: boolean;
    property: Property
    onClose: () => void
}

export default function ModalDeleteProperty({ isOpen, property, onClose }: Props) {
    const queryClient = useQueryClient()
    const deleteProperty = useRemoveProperty()

    function deleteAction() {
        deleteProperty.mutate({ id: property.id }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["PROPERTY/LIST"] })
                toast.success("Berhasil menghapus data")
                setTimeout(onClose, 500)
            },
            onError: ({ response }) => {
                const type = response?.data.type
                const description = response?.data.message ?? "Gagal menghapus data"
                toast.error(type, { description })
            }
        })
    }

    return (
        <React.Fragment>
            <Modal isOpen={isOpen}>
                <Modal.Body className="w-[420px]">
                    <Modal.Header>
                        <Modal.Title>Hapus properti</Modal.Title>
                        <Modal.Close onClick={onClose} />
                    </Modal.Header>
                    <Modal.Content>
                        <div className="flex flex-col justify-center items-center py-7 gap-3">
                            <img src={property.thumbnail_url} className="size-16 rounded-md object-cover" />
                            <div className="font-medium text-center -space-y-1">
                                <p className="text-[0.8rem] md:text-base">Yakin ingin menghapus rumah tipe {property.type} ?</p>
                                <span className="text-xs md:text-sm text-gray-500">Aksi ini tidak dapat diulang</span>
                            </div>
                        </div>
                        <Button className="ml-auto mr-0 grid place-items-center" onClick={deleteAction}>
                            Hapus
                        </Button>
                    </Modal.Content>
                </Modal.Body>
            </Modal>
            <LoadingScreen show={deleteProperty.isPending} message="Menghapus properti..." />
        </React.Fragment>
    )
}