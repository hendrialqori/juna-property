import { LoadingScreen } from "#/components/lazy"
import { useProperty } from "#/services/property-service"
import { useParams } from "react-router"

export default function Media() {

    const params = useParams()

    const { data: property, isPending } = useProperty(String(params.id))

    if(isPending) return <LoadingScreen show message="Mengunduh data properti..."/>
    
    if (!property?.data) return null

    return (
        <div className="space-y-5 w-full xl:w-4/12">
            <img src={property.data.thumbnail_url} className="h-[202px] object-cover rounded-2xl" />
            <div className="space-y-1">
                <h2 className="font-semibold text-base md:text-lg -tracking-wide">KPR rumah tipe {property.data.type}</h2>
                <p className="font-medium text-xs md:text-sm text-gray-500">{property.data.address}</p>
            </div>
            <p className="text-xs md:text-sm !leading-[170%]">
                {property.data.description}
            </p>
        </div>
    )
}