import { Property } from "#/@types"
import React from "react"
//@ts-ignore
import Viewer from "react-pannellum"

type Props = Pick<Property, "thumbnail_url" | "view_url">

export default function Media(props: Props) {
    const ref = React.useRef<HTMLDivElement | null>(null)

    React.useEffect(() => {
        // issue
        window.scrollTo(0, 0)
    }, [])

    const viewWithHttps = props.view_url.replace("http", "https")

    return (
        <div className="w-full space-y-4">
            <img src={props.thumbnail_url} className="h-[400px] w-full object-cover rounded-2xl" loading="lazy" />
            <div ref={ref} className="rounded-2xl overflow-hidden border bg-gray-400 mx-auto">
                <Viewer
                    id="1"
                    sceneId="firstScene"
                    imageSource={viewWithHttps}
                    config={{ autoLoad: true }}
                    style={{ width: ref.current?.getBoundingClientRect().width, height: "400px" }}
                />
            </div>
        </div>
    )
}