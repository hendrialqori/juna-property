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
import { useAddProperty } from "#/services/property-service";
import { LoadingScreen } from "#/components/lazy";
import { toast } from "sonner";

interface Props {
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
    description: z.string().min(1, { message: "Required" })
})

type Form = z.infer<typeof scheme>

export default function ModalAddProperty({ isOpen, onClose }: Props) {
    const { register, handleSubmit: submit, formState: { errors }, setValue, watch, reset } = useForm<Form>({
        resolver: zodResolver(scheme)
    })

    const queryClient = useQueryClient()

    const property = useAddProperty()

    const thumbnail_image = {
        file: (watch("thumbnail_image") as FileList)?.[0],
        onReset: () => reset((value) => ({ ...value, thumbnail_image: {} as FileList }))
    }

    const view_image = {
        file: (watch("view_image") as FileList)?.[0],
        onReset: () => reset((value) => ({ ...value, view_image: {} as FileList }))
    }

    const handleSubmit = submit((state) => {

        const formData = new FormData()
        formData.append("type", state.type)
        formData.append("price", state.price.replace(/,/g, ""))
        formData.append("thumbnail", state.thumbnail_image?.[0] as File)
        formData.append("view", state.view_image?.[0] as File)
        formData.append("description", state.description)

        property.mutate({ formData }, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["PROPERTY/LIST"] })
                toast.success("Berhasil menyimpan data")
                setTimeout(onClose, 500)
                setTimeout(reset, 700)
            },
            onError: ({ response }) => {
                const type = response?.data.type
                const description = response?.data.message ?? "Gagal menyimpan data"
                toast.error(type, { description })
            }
        })
    })

    return (
        <Modal isOpen={isOpen}>
            <Modal.Body className="w-[420px] space-y-10">
                <Modal.Header>
                    <Modal.Title>Tambah properti baru</Modal.Title>
                    <Modal.Close onClick={onClose} />
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
                            <label htmlFor="description" className="text-xs md:text-[0.8rem] text-gray-800 font-medium">Deskripsi</label>
                            <Textarea id="description" rows={5} {...register("description")} />
                            {errors.description && <span className="text-red-500 text-xs font-medium">{errors.description.message}</span>}
                        </div>
                        <Button className="ml-auto mr-0 grid place-items-center" disabled={property.isPending}>
                            Tambah
                        </Button>
                    </form>
                </Modal.Content>
            </Modal.Body>
            <LoadingScreen show={property.isPending} message="Menyimpan data properti..." />
        </Modal >
    )
}
