import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Layout({ children }) {
    useEffect(() => {
        console.log(Cookies.get("access_token"));
    }, []);
    return (
        <div>
            <div className={"grid grid-cols-1 h-screen w-full"}>
                <div className={""}>{children}</div>
                <div className={"bg-myorange-500"}></div>
            </div>
        </div>
    );
}
