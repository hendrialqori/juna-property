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

export function useProperty(id: string) {
    const GET = async ({ signal }: { signal: AbortSignal }) => {
        const req = await request.get(`/property/get/${id}`, { signal })
        return req.data
    }

    return useQuery<Success<Property>, AxiosError<Error>>({
        queryKey: ["PROPERTY", id],
        queryFn: GET,
        enabled: Boolean(id)
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

export function useUpdateProperty() {
    type Paylod = { id: string; formData: FormData }
    const PUT = async ({ id, formData }: Paylod) => {
        const req = await request.put(`/property/update/${id}`, formData)
        return req.data
    }

    return useMutation<Success<Property>, AxiosError<Error>, Paylod>({
        mutationFn: PUT
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