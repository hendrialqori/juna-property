import React from "react";
import { FetchStatus } from "#/@types";
import * as Property from "./property-card"

interface Props {
    fetchStatus: FetchStatus
    children: React.ReactNode
}

export default function PropertyCardList({ fetchStatus, children }: Props) {

    if (fetchStatus === "pending") {
        return (
            <Grid>
                {Array.from({ length: 6 }).map((_, i) => <Property.Skeleton key={i} />)}
            </Grid>
        )
    }

    const count = React.Children.count(children)
    if (!count) {
        return (
            <div>
                <p className="text-xs md:text-sm font-medium">Properti belum tersedia</p>
            </div>
        )
    }

    return (
        <Grid>
            {children}
        </Grid>
    )
}


function Grid({ children }: Pick<Props, "children">) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {children}
        </div>
    )
}