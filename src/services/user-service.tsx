import axios, { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"
import type { Success, Error, User } from "#/@types"
import { API } from "#/constant"

export function useSignIn() {
    type Payload = {
        username: string;
        password: string;
    }

    const POST = async (payload: Payload) => {
        const req = await axios.post(`${API}/user/login`, payload)
        return req.data
    }

    return useMutation<Success<User>, AxiosError<Error>, Payload>({
        mutationFn: POST
    })
}