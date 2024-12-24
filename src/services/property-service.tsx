import { AxiosError } from "axios"
import { request } from "#/lib/request"
import { useQuery, useMutation } from "@tanstack/react-query"
import type { Success, Error, Property } from "#/@types"

export function useProperties() {
    const GET = async ({ signal }: { signal: AbortSignal }) => {
        const req = await request.get("/property/list", { signal })
        return req.data
    }

    return useQuery<Success<Property[]>, AxiosError<Error>>({
        queryKey: ["PROPERTY/LIST"],
        queryFn: GET,
        staleTime: 1 * (60 * 1000)
    })
}

export function useAddProperty() {
    type Paylod = { formData: FormData }
    const POST = async ({ formData }: Paylod) => {
        const req = await request.post("/property/add", formData)
        return req.data
    }

    return useMutation<Success<Property>, AxiosError<Error>, Paylod>({
        mutationFn: POST
    })
}

export function useRemoveProperty() {
    type Params = { id: string }
    const POST = async ({ id }: Params) => {
        const req = await request.delete(`/property/remove/${id}`)
        return req.data
    }

    return useMutation<Success<Property>, AxiosError<Error>, Params>({
        mutationFn: POST
    })
}