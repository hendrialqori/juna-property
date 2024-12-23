import Input from "#/components/ui/input"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// import { LoadingScreen } from "#/components/lazy"

const scheme = z.object({
    username: z.string().min(1, { message: "Required" }),
    password: z.string().min(1, { message: "Required" })
})

type Form = z.infer<typeof scheme>

export default function SignIn() {

    const { register, handleSubmit: submit, formState: { errors } } = useForm<Form>({
        resolver: zodResolver(scheme)
    })

    const handleSubmit = submit(() => { })

    return (
        <main className="container flex flex-col justify-center items-center gap-8 font-inter">
            <div className="grid place-items-center gap-1">
                <img src="/icon.svg" className="size-10 md:size-14" width={39} height={50} loading="lazy" />
                <h1 className="font-semibold">Welcome back, Admin!</h1>
                <p className="text-sm text-gray-500">Please enter your details</p>
            </div>
            <form onSubmit={handleSubmit} className="font-medium space-y-5 w-full md:w-6/12 xl:w-3/12">
                <div className="space-y-1">
                    <label htmlFor="username" className="text-xs md:text-[0.8rem] text-gray-800">Username</label>
                    <Input id="username" placeholder="Username" {...register("username")} />
                    {errors.username && <span className="text-red-500 text-xs font-medium">{errors.username.message}</span>}
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="text-xs md:text-[0.8rem] text-gray-800">Password</label>
                    <Input id="password" placeholder="password" {...register("password")} />
                    {errors.password && <span className="text-red-500 text-xs font-medium">{errors.password.message}</span>}
                </div>
                <button className="w-full bg-black text-white rounded-lg py-3 font-medium text-xs md:text-sm">
                    Sign In
                </button>
            </form>
        </main>
    )
}