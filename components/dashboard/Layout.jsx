export default function Layout({children}) {
    return (
        <div className="flex flex-col min-h-screen">
            <div>Nav</div>
            <main>{children}</main>
            <div>Footer</div>
        </div>
    );
}