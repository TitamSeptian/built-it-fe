export default function Layout({children}) {
    return (
        <div>
            <div className={"grid grid-cols-1 h-screen w-full"}>
                <div className={""}>
                    {children}
                </div>
                <div className={"bg-myorange-500"}></div>
            </div>
        </div>
    )
}