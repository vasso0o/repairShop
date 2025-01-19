//template rerenders every time while layout loads at start
//what that does is, add fade animation between pages
//we create this class

export default async function Template({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="animate-appear">
                {children}
        </div>
    )
}