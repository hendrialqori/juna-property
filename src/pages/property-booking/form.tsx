import Input from "#/components/ui/input"
import Textarea from "#/components/ui/textarea"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Upload from "./upload"
import Button from "#/components/ui/button"

const scheme = z.object({
    name: z.string().min(1, { message: "Required" }),
    email: z.string().email(),
    phone: z.string().min(1, { message: "Required" }),
    id_number: z.string().min(1, { message: "Required" }),
    husband_id_image: z.any()
        .refine((images: FileList) => images?.[0]?.name, "Required")
        .transform((images: FileList) => images).optional(),
    wife_id_image: z.any()
        .refine((images: FileList) => images?.[0]?.name, "Required")
        .transform((images: FileList) => images).optional(),
    familly_card_image: z.any()
        .refine((images: FileList) => images?.[0]?.name, "Required")
        .transform((images: FileList) => images).optional(),
    last_salary_slip_image: z.any()
        .refine((images: FileList) => images?.[0]?.name, "Required")
        .transform((images: FileList) => images).optional(),
    proof_of_transafer_image: z.any()
        .refine((images: FileList) => images?.[0]?.name, "Required")
        .transform((images: FileList) => images).optional(),
    address: z.string().min(1, { message: "Required" })
})

type Scheme = z.infer<typeof scheme>

export default function Form() {

    const { register, handleSubmit: submit, formState: { errors }, watch, reset } = useForm<Scheme>({
        resolver: zodResolver(scheme)
    })

    const handleSubmit = submit((state) => {
        console.log(state)
    })

    const husband_id_image = {
        file: (watch("husband_id_image") as FileList)?.[0],
        onReset: () => reset((value) => ({ ...value, husband_id_image: {} as FileList }))
    }

    const wife_id_image = {
        file: (watch("wife_id_image") as FileList)?.[0],
        onReset: () => reset((value) => ({ ...value, wife_id_image: {} as FileList }))
    }

    const familly_card_image = {
        file: (watch("familly_card_image") as FileList)?.[0],
        onReset: () => reset((value) => ({ ...value, familly_card_image: {} as FileList }))
    }

    const last_salary_slip_image = {
        file: (watch("last_salary_slip_image") as FileList)?.[0],
        onReset: () => reset((value) => ({ ...value, last_salary_slip_image: {} as FileList }))
    }

    const proof_of_transafer_image = {
        file: (watch("proof_of_transafer_image") as FileList)?.[0],
        onReset: () => reset((value) => ({ ...value, proof_of_transafer_image: {} as FileList }))
    }

    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium w-full xl:w-8/12" onSubmit={handleSubmit}>
            <div className="space-y-1">
                <label htmlFor="name" className="text-xs md:text-[0.8rem] text-gray-800">Nama</label>
                <Input id="name" placeholder="Nama" {...register("name")} />
                {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name.message}</span>}
            </div>
            <div className="space-y-1">
                <label htmlFor="email" className="text-xs md:text-[0.8rem] text-gray-800">Email</label>
                <Input id="email" placeholder="Email" {...register("email")} />
                {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email.message}</span>}
            </div>
            <div className="space-y-1">
                <label htmlFor="phone" className="text-xs md:text-[0.8rem] text-gray-800">No. handphone</label>
                <Input id="phone" placeholder="No KTP" type="number" {...register("phone")} />
                {errors.phone && <span className="text-red-500 text-xs font-medium">{errors.phone.message}</span>}
            </div>
            <div className="space-y-1">
                <label htmlFor="name" className="text-xs md:text-[0.8rem] text-gray-800">No. KTP</label>
                <Input id="name" placeholder="No KTP" type="number" {...register("id_number")} />
                {errors.id_number && <span className="text-red-500 text-xs font-medium">{errors.id_number.message}</span>}
            </div>

            <div className="space-y-1">
                <label htmlFor="husband" className="text-xs md:text-[0.8rem] text-gray-800">KTP Suami</label>
                <Upload id="husband" file={husband_id_image.file} onReset={husband_id_image.onReset} {...register("husband_id_image")} />
                {errors.husband_id_image && <span className="text-red-500 text-xs font-medium">{errors.husband_id_image.message}</span>}
            </div>

            <div className="space-y-1">
                <label htmlFor="wife" className="text-xs md:text-[0.8rem] text-gray-800">KTP Istri</label>
                <Upload id="wife" file={wife_id_image.file} onReset={wife_id_image.onReset} {...register("wife_id_image")} />
                {errors.wife_id_image && <span className="text-red-500 text-xs font-medium">{errors.wife_id_image.message}</span>}
            </div>

            <div className="space-y-1">
                <label htmlFor="familly" className="text-xs md:text-[0.8rem] text-gray-800">Kartu Keluarga</label>
                <Upload id="familly" file={familly_card_image.file} onReset={familly_card_image.onReset} {...register("familly_card_image")} />
                {errors.familly_card_image && <span className="text-red-500 text-xs font-medium">{errors.familly_card_image.message}</span>}
            </div>

            <div className="space-y-1">
                <label htmlFor="salary" className="text-xs md:text-[0.8rem] text-gray-800">Slip gaji terakhir</label>
                <Upload id="salary" file={last_salary_slip_image.file} onReset={last_salary_slip_image.onReset} {...register("last_salary_slip_image")} />
                {errors.last_salary_slip_image && <span className="text-red-500 text-xs font-medium">{errors.last_salary_slip_image.message}</span>}
            </div>

            <div className="space-y-1">
                <label htmlFor="transfer" className="text-xs md:text-[0.8rem] text-gray-800">Bukti Transfer</label>
                <Upload id="transafer" file={proof_of_transafer_image.file} onReset={proof_of_transafer_image.onReset} {...register("proof_of_transafer_image")} />
                {errors.proof_of_transafer_image && <span className="text-red-500 text-xs font-medium">{errors.proof_of_transafer_image.message}</span>}
            </div>

            <div className="space-y-1">
                <label className="text-xs md:text-[0.8rem] text-gray-800">Uang muka</label>
                <Input value="Rp 2,000,000 .-" disabled />
            </div>
            <div className="space-y-1">
                <label htmlFor="address" className="text-xs md:text-[0.8rem] text-gray-800">Alamat</label>
                <Textarea id="address" rows={5} {...register("address")} />
                {errors.address && <span className="text-red-500 text-xs font-medium">{errors.address.message}</span>}
            </div>
            <div />
            <div />
            <Button className="ml-auto mr-0">
                Booking
            </Button>
        </form>
    )
}




