import React from "react";
import { motion } from "framer-motion"
import { TbSmartHome } from "react-icons/tb";
import { TbBrandBooking } from "react-icons/tb";
import { Link, useHref } from "react-router";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props { children: React.ReactNode }

export default function AdminLayout({ children }: Props) {

    const [show, setShow] = React.useState(true)

    function toggle() { setShow((prev) => !prev) }


    React.useEffect(function resizeWindow() {

        function resize() {
            const width = window.innerWidth;
            const table_landscape = 1024
            if (width >= table_landscape) {
                setShow(true)
            }
        }

        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [show])

    return (
        <main className="flex font-inter">
            <motion.aside
                initial={{ x: 0 }}
                animate={{ x: show ? 0 : "-100%" }}
                transition={{ bounce: false, duration: 0.5 }}
                className="bg-white border-r border-[#F2F4F7] fixed lg:sticky z-[11] top-0 h-dvh px-3 xl:px-5 py-3 shadow-md space-y-5"
            >
                <div className="flex justify-between items-start">
                    <Link to={{ pathname: "/" }}>
                        <img src="/icon.svg" className="size-10" width={39} height={50} loading="lazy" />
                    </Link>
                    <button className={`hover:outline hover:outline-black rounded-lg block lg:hidden ${show ? "translate-x-0" : "translate-x-16"} transition duration-200`} onClick={toggle}>
                        <div className="flex items-center -space-x-3 bg-primary p-1 rounded-lg text-white">
                            <MdKeyboardArrowLeft className="size-5" />
                            <MdKeyboardArrowRight className="size-5" />
                        </div>
                    </button>
                </div>
                <Menu title="Main Menu">
                    <MenuItem
                        pathname="/admin/property"
                        name="property"
                        icon={<TbSmartHome className="size-5" />}
                    />
                    <MenuItem
                        pathname="/admin/booking"
                        name="booking"
                        icon={<TbBrandBooking className="size-5" />}
                    />
                </Menu>
            </motion.aside>
            <section className="relative bg-gray-50 px-4 py-12 xl:px-8 xl:py-8 w-full max-w-[1800px] min-h-dvh mx-auto">
                {children}
            </section>
        </main>
    )
}

function Menu({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="space-y-3">
            <p className="text-xs text-gray-400">{title}</p>
            <ul className="space-y-2">
                {children}
            </ul>
        </div>
    )
}

function MenuItem({ pathname, name, icon }: { pathname: string; name: string; icon: React.ReactNode }) {
    const href = useHref("")
    const isActive = href.split("/").includes(name)

    return (
        <Link
            to={{ pathname }}
            className={`flex items-center gap-2 w-48 rounded-[10px] px-2 py-2 ${isActive ? "bg-primary text-white" : "hover:bg-gray-100 transition duration-200 "}`}>
            {icon}
            <span className="text-xs md:text-sm font-medium -tracking-wide capitalize">{name}</span>
        </Link>
    )
}