import React from "react"
import { FetchStatus } from "#/@types";
import { LoadingScreen } from "#/components/lazy";
import { ErrorScreen } from "#/components/error";

interface Props { fetchStatus: FetchStatus; children: React.ReactNode }

export default function PropertyCardList({ fetchStatus, children }: Props) {

    if (fetchStatus === "pending") return <LoadingScreen show message="Collecting property..." />

    if (fetchStatus === "error") return <ErrorScreen show />

    const count = React.Children.count(children)
    if (!count) {
        return (
            <div>
                <p className="text-xs md:text-sm font-medium">Properti belum tersedia, silahkan tambah properti baru.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {children}
        </div>
    )
}