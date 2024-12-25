import React from "react";
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query";
import Modal from "#/components/modal/modal";
import Input from "#/components/ui/input";
import Upload from "#/components/ui/upload";
import Button from "#/components/ui/button";
import { priceFormat, sanitizedNonDigits } from "#/lib/utils";
import Textarea from "#/components/ui/textarea";
import { useAddProperty, useProperty, useUpdateProperty } from "#/services/property-service";
import { LoadingScreen } from "#/components/lazy";
import { toast } from "sonner";

interface Props {
    id: string | null
    isOpen: boolean;
    onClose: () => void
}

const scheme = z.object({
    type: z.string().min(1, { message: "Required" }),
    price: z.string().min(1, { message: "Required" }),
    thumbnail_image: z.any()
        .refine((images: FileList) => images?.[0]?.name, "Required")
        .transform((images: FileList) => images).optional(),
    view_image: z.any()
        .refine((images: FileList) => images?.[0]?.name, "Required")
        .transform((images: FileList) => images).optional(),
    address: z.string().min(1, { message: "Required" }),
    description: z.string().min(1, { message: "Required" })
})

const schemeUpdate = z.object({
    type: z.string().min(1, { message: "Required" }),
    price: z.string().min(1, { message: "Required" }),
    thumbnail_image: z.any(),
    view_image: z.any(),
    address: z.string().min(1, { message: "Required" }),
    description: z.string().min(1, { message: "Required" })
})

type Form = z.infer<typeof scheme>

const FILE_PREVIEW = {
    thumbnail: "",
    view: ""
}

export default function ModalFormProperty({ id, isOpen, onClose }: Props) {
    const { register, handleSubmit: submit, formState: { errors }, setValue, watch, reset } = useForm<Form>({
        resolver: zodResolver(id ? schemeUpdate : scheme)
    })
    const [filePreview, setFilePreview] = React.useState(FILE_PREVIEW)

    const queryClient = useQueryClient()

    const property = useProperty(id!)
    const prop = property.data?.data

    const addProperty = useAddProperty()
    const updateProperty = useUpdateProperty()

    React.useEffect(() => {
        if (prop) {
            setValue("type", prop.type.toString())
            setValue("price", priceFormat(prop.price))
            setValue("address", prop.address)
            setValue("description", prop.description)

            setFilePreview({
                thumbnail: prop.thumbnail_url,
                view: prop.view_url
            })
        }
    }, [prop])

    const thumbnail_image = {
        file: prop && filePreview.thumbnail ? filePreview.thumbnail : (watch("thumbnail_image") as FileList)?.[0],
        onReset: () => {
            setFilePreview(prev => ({ ...prev, thumbnail: "" }))
            setValue("thumbnail_image", {} as FileList)
        }
    }

    const view_image = {
        file: prop && filePreview.view ? filePreview.view : (watch("view_image") as FileList)?.[0],
        onReset: () => {
            setFilePreview(prev => ({ ...prev, view: "" }))
            setValue("view_image", {} as FileList)
        }
    }

    const handleSubmit = submit((state) => {
        const formData = new FormData()
        formData.append("type", state.type)
        formData.append("price", state.price.replace(/,/g, ""))
        formData.append("address", state.address)
        formData.append("description", state.description)

        if (state.thumbnail_image) formData.append("thumbnail", state.thumbnail_image?.[0] as File)
        if (state.view_image) formData.append("view", state.view_image?.[0] as File)

        // prop.id mean for update mutation
        if (prop?.id) {
            updateProperty.mutate({ id: prop?.id, formData }, {
                onSuccess: () => {
                    clearState()

                    queryClient.invalidateQueries({ queryKey: ["PROPERTY/LIST"] })
                    toast.success("Berhasil mengubah data")
                },
                onError: ({ response }) => {
                    const type = response?.data.type
                    const description = response?.data.message ?? "Gagal mengubah data"
                    toast.error(type, { description })
                }
            })
        } else {
            addProperty.mutate({ formData }, {
                onSuccess: () => {
                    clearState()

                    queryClient.invalidateQueries({ queryKey: ["PROPERTY/LIST"] })
                    toast.success("Berhasil menyimpan data")
                },
                onError: ({ response }) => {
                    const type = response?.data.type
                    const description = response?.data.message ?? "Gagal menyimpan data"
                    toast.error(type, { description })
                }
            })
        }
    })

    const clearState = () => {
        reset()
        setFilePreview(FILE_PREVIEW)
        onClose()
    }

    return (
        <Modal isOpen={isOpen}>
            <Modal.Body className="w-[420px] space-y-10">
                <Modal.Header>
                    <Modal.Title>{id ? "Edit" : "Tambah"} properti</Modal.Title>
                    <Modal.Close onClick={clearState}
                    />
                </Modal.Header>
                <Modal.Content>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label htmlFor="type" className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Tipe rumah</label>
                            <Input id="type" placeholder="Tipe rumah" {...register("type")} type="number" />
                            {errors.type && <span className="text-red-500 text-xs font-medium">{errors.type.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="price" className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Harga rumah</label>
                            <Input
                                id="price" placeholder="Harga rumah"
                                {...register("price", {
                                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                                        const price = event.target.value;
                                        const sanitized = Number(sanitizedNonDigits(price))
                                        const formater = priceFormat(sanitized)
                                        setValue("price", formater)
                                    }
                                })}
                            />
                            {errors.price && <span className="text-red-500 text-xs font-medium">{errors.price.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="avatar" className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Foto thumbnail</label>
                            <Upload id="avatar" {...thumbnail_image} {...register("thumbnail_image")} />
                            {errors.thumbnail_image && <span className="text-red-500 text-xs font-medium">{errors.thumbnail_image.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="view" className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Foto 360 (view)</label>
                            <Upload id="view" {...view_image} {...register("view_image")} />
                            {errors.view_image && <span className="text-red-500 text-xs font-medium">{errors.view_image.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="address" className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Alamat</label>
                            <Textarea id="address" rows={5} {...register("address")} />
                            {errors.address && <span className="text-red-500 text-xs font-medium">{errors.address.message}</span>}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="description" className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Deskripsi</label>
                            <Textarea id="description" rows={5} {...register("description")} />
                            {errors.description && <span className="text-red-500 text-xs font-medium">{errors.description.message}</span>}
                        </div>
                        <Button
                            className="ml-auto mr-0 grid place-items-center"
                            disabled={addProperty.isPending || updateProperty.isPending}
                        >
                            Simpan
                        </Button>
                    </form>
                </Modal.Content>
            </Modal.Body>
            <LoadingScreen
                show={
                    addProperty.isPending || updateProperty.isPending
                }
                message="Menyimpan data properti..." />
        </Modal >
    )
}
