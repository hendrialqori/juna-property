import React from "react"
import Input from "#/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router"
import { toast } from "sonner"

import Button from "#/components/ui/button"
import { useSignIn } from "#/services/user-service"
import { TOKEN } from "#/constant"
import { LoadingScreen } from "#/components/lazy"

const scheme = z.object({
    username: z.string().min(1, { message: "Required" }),
    password: z.string().min(1, { message: "Required" })
})

type Form = z.infer<typeof scheme>

export default function SignIn() {
    const { register, handleSubmit: submit, formState: { errors } } = useForm<Form>({
        resolver: zodResolver(scheme)
    })

    const navigate = useNavigate()

    const signin = useSignIn()

    const handleSubmit = submit((state) => {
        signin.mutate(state, {
            onSuccess: ({ data }) => {
                toast.success("Login berhasil :)")
                window.localStorage.setItem(TOKEN, data.token)

                navigate("/admin/property")
            },
            onError: ({ response }) => {
                const type = response?.data.type
                const description = response?.data.message ?? "Login gagal"
                toast.error(type, { description })
            }
        })
    })

    return (
        <React.Fragment>
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
                    <Button className="ml-auto mr-0 flex items-center">
                        Sign In
                    </Button>
                </form>
            </main>
            <LoadingScreen show={signin.isPending} message="Sign in process..." />
        </React.Fragment>
    )
}