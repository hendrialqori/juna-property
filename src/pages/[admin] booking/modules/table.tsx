const table_head = ["Nama", "Email", "No. Handphone", "No. KTP", "Uang Muka"]
const table_data = ["Hendri Alqori", "hendrialqori@email.com", "0892332445", "61236847690001", "Rp 2,000,000 .-"]

import { HiDotsVertical } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import * as Popover from "@radix-ui/react-popover";


export default function Table() {
    return (
        <div className="overflow-auto relative w-full">
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr>
                        {table_head.map((head, i) => (
                            <th key={i} className="text-[0.7rem] xl:text-[0.8rem] text-nowrap text-left font-normal bg-primary text-white py-[0.7rem] px-2">
                                {head}
                            </th>
                        ))}
                        <th className="text-[0.7rem] xl:text-[0.8rem] font-normal bg-primary text-white pl-2">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {table_data.map((data, i) => (
                            <td key={i} className="text-[0.75rem] xl:text-[0.85rem] text-nowrap py-4 px-2 border-b border-gray-200">{data}</td>
                        ))}
                        <Popover.Root>
                            <Popover.Trigger asChild>
                                <td className="text-center border-b border-gray-200">
                                    <button className="hover:outline hover:outline-black rounded-md p-1">
                                        <HiDotsVertical className="text-xl" />
                                    </button>
                                </td>
                            </Popover.Trigger>
                            <Popover.Portal>
                                <Popover.Content side="left" align="center" sideOffset={-20}>
                                    <div className="text-[0.75rem] bg-white flex flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md font-inter">
                                        <button
                                            type="button"
                                            // onClick={onClick}
                                            className="w-full"
                                        >
                                            <div className="flex items-center gap-3 pl-5 pr-5 py-2 hover:bg-gray-200 transition duration-300 border-b">
                                                <BiMessageSquareDetail className="size-5" />
                                                <p className="text-nowrap">Detail</p>
                                            </div>
                                            <div className="flex items-center gap-3 pl-5 pr-5 py-2 hover:bg-gray-200 transition duration-300">
                                                <MdOutlineDelete className="size-5" />
                                                <p className="text-nowrap">Hapus</p>
                                            </div>
                                        </button>
                                    </div>
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>

    )
}