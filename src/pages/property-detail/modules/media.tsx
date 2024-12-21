import React from "react"
//@ts-ignore
import Viewer from "react-pannellum"

export default function Media() {

    const ref = React.useRef<HTMLDivElement | null>(null)

    return (
        <div className="w-full space-y-4">
            <div ref={ref} className="rounded-2xl overflow-hidden border bg-gray-400 mx-auto">
                <Viewer
                    id="1"
                    sceneId="firstScene"
                    imageSource="/360-image.jpg"
                    config={{ autoLoad: true }}
                    // className=""
                    style={{ width: ref.current?.getBoundingClientRect().width, height: "400px" }}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="/rumah2.jpg" className="h-[202px] object-cover rounded-2xl" />
                <img src="/rumah2.jpg" className="h-[202px] object-cover rounded-2xl" />
            </div>
        </div>
    )
}