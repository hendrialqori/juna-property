import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Modal from "#/components/modal/modal";
import Input from "#/components/ui/input";
import Textarea from "#/components/ui/textarea";

interface Props {
    isOpen: boolean;
    onClose: () => void
}

type Form = {
    name: string;
    identity_number: number;
    down_payment: number;
    address: string;
}

const scheme = z.object({
    name: z.string().min(1),
    identity_number: z.number().nonnegative(),
    address: z.string().min(1)
})

export default function ModalBooking({ isOpen, onClose }: Props) {
    const { register, handleSubmit: submit, formState: { errors } } = useForm<Form>({
        resolver: zodResolver(scheme)
    })

    console.log(errors)

    const handleSubmit = submit((_state) => { })

    return (
        <Modal isOpen={isOpen}>
            <Modal.Body className="w-[420px] space-y-6">
                <Modal.Header>
                    <Modal.Title>Booking property</Modal.Title>
                    <Modal.Close onClick={onClose} />
                </Modal.Header>
                <Modal.Content className="font-medium">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs md:text-[0.8rem] text-gray-800">Nama</label>
                            <Input id="name" placeholder="Nama" {...register("name")} />
                            {/* <span className="text-red-500">Required</span> */}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs md:text-[0.8rem] text-gray-800">No. KTP</label>
                            <Input id="name" placeholder="No KTP" type="number" />
                            {/* <span className="text-red-500">Required</span> */}
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="" className="text-xs md:text-[0.8rem] text-gray-800">Uang muka</label>
                            <Input id="name" placeholder="No KTP" value="Rp 2,000,000 .-" disabled />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs md:text-[0.8rem] text-gray-800">Alamat</label>
                            <Textarea rows={5} />
                            {/* <span className="text-red-500">Required</span> */}
                        </div>
                        <button className="w-auto ml-auto mr-0 flex gap-3 bg-black text-white rounded-lg py-3 px-8">
                            <span className="font-medium text-xs md:text-sm">Booking</span>
                        </button>
                    </form>
                </Modal.Content>
            </Modal.Body>
        </Modal>
    )
}