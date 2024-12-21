export default function Header() {
    return (
        <header className="flex items-center justify-between py-6">
            <img src="/icon.svg" className="size-10 md:size-16" width={39} height={50} loading="lazy" />
            <button className="bg-black text-white font-semibold rounded-full px-6 py-2 text-xs md:text-sm xl:text-base">
                Sign In
            </button>
        </header>
    )
}