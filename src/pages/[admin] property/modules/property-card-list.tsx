interface Props { children: React.ReactNode }

export default function PropertyCardList({ children }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {children}
        </div>
    )
}