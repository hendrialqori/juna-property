import Input from "#/components/ui/input";
import React from "react";
import { LuPencil } from "react-icons/lu";

type Props = React.ComponentPropsWithoutRef<"input"> & {
    file?: File;
    onReset: () => void;
}
type Refs = HTMLInputElement


const Upload = React.forwardRef<Refs, Props>(({ file, onReset, ...rest }, refs) => {

    if (!file) {
        return <Input ref={refs} id="phone" placeholder="No KTP" type="file" accept="image/*" {...rest} />
    }

    return (
        <div className="flex items-center gap-3">
            <div className="relative size-12 md:size-16 shadow-sm ">
                <img
                    src={URL.createObjectURL(file)}
                    width={40}
                    height={40}
                    className="size-full rounded-lg object-cover border border-gray-100"
                    alt="preview-avatar"
                />
                <button
                    type="button"
                    className="absolute -bottom-2 -right-2 bg-gray-100 border border-gray-200 rounded-full p-1"
                    onClick={onReset}
                >
                    <LuPencil className="text-base" />
                </button>
            </div>
            <p className="text-[0.6rem] md:text-[0.8rem] line-clamp-1 w-9/12">{file.name}</p>
        </div>
    )
})

export default Upload