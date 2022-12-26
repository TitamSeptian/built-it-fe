import { VStack } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Layout({ children }) {
    const router = useRouter();
    useEffect(() => {
        const cookie = Cookies.get("access_token");
        const role = Cookies.get("role");
        
        if (cookie) {
            if (role === "customers") {
                router.push("/user");
            }else if(role === "store"){
                router.push("/dashboard");
            }else if(role === "professional"){
                router.push("/jago");
            }else if (role === "administrator") {
                router.push("/admin");
            }
        }
    }, []);
    return (
        <div>
            <VStack>
                <div>{children}</div>
            </VStack>
        </div>
    );
}
