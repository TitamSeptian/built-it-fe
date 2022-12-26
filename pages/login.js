import {
    Box,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
} from "@chakra-ui/react";
import FormData from "form-data";
import logo from "../public/logo/logo200.png";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/auth/Layout"), {
    ssr: false,
});
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
    const toast = useToast();
    const router = useRouter();
    function thisIsToast(type = "info", title = "info", message) {
        const statuses = ["success", "error", "warning", "info"];
        toast({
            title: title,
            description: message,
            status: type,
            duration: 4000,
            isClosable: true,
        });
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const formData = new FormData();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            formData.append("email", email);
            formData.append("password", password);
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`,
                {
                    email: email,
                    password: password,
                    formData: formData,
                }
            );
            const result = await res.data;
            thisIsToast("success", "Success", result.message);
            if (result.status) {
                // second to hour
                const expire_in = result.data.expires_in / 60;
                console.log(result.data);
                Cookies.set("access_token", result.data.access_token, {
                    expires: expire_in,
                });
                Cookies.set("role", result.data.user.role, {
                    expires: expire_in,
                });
                if (result.data.user.role == "store") {
                    router.push("/dashboard");
                } else if (result.data.user.role == "customers") {
                    router.push("/user");
                } else if (result.data.user.role == "professional") {
                    router.push("/jago");
                }
            }
        } catch (error) {
            console.log(error);
            switch (error.response.status) {
                case 422:
                    thisIsToast(
                        "error",
                        "Inputan Salah",
                        error.response.data.error
                    );
                    // add error to state
                    setErrors(error.response.data.error);
                    console.log(error.response.data.error);
                    break;
                case 500:
                    thisIsToast(
                        "error",
                        "Terjadi Kesalahan",
                        error.response.data.message
                    );
                    break;
                default:
                    break;
            }
        }
    };
    return (
        <div className="py-6">
            <Layout>
                <form onSubmit={handleSubmit}>
                    <Box
                        boxShadow={{ base: "none", md: "2xl" }}
                        w={{
                            base: "100%",
                            md: "600px",
                        }}
                        borderRadius={"2xl"}
                    >
                        <VStack
                            align={"start"}
                            px={"50px"}
                            py={"38"}
                            spacing={"7"}
                        >
                            <Link href={"/"}>
                                <Image
                                    src={logo}
                                    alt={"logo"}
                                    height={"50"}
                                    width={"50"}
                                />
                            </Link>
                            <Text color={"mygray.700"}>Welcome </Text>
                            <Heading fontWeight={"bold"} size={"2xl"}>
                                Sign In
                            </Heading>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    colorScheme={"myorange"}
                                    placeholder={"Emaill Address"}
                                    isRequired
                                    variant={"filled"}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    colorScheme={"myorange"}
                                    placeholder={"Password"}
                                    isRequired
                                    variant={"filled"}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </FormControl>
                            <Button colorScheme={"myorange"} type="submit">
                                Sign In
                            </Button>
                            <Text display={"flex"} gap={"10px"}>
                                I don’t have an account ?
                                <Text
                                    colorScheme={"myorange"}
                                    color={"myorange.500"}
                                    fontWeight={"bold"}
                                >
                                    <Link href={"/register"}>Sign Up</Link>
                                </Text>
                            </Text>
                        </VStack>
                    </Box>
                </form>
            </Layout>
        </div>
    );
}
