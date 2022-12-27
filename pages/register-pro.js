// import Layout from "../components/auth/Layout";
import {
    Box,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    HStack,
    useToast,
} from "@chakra-ui/react";
import FormData from "form-data";
import logo from "../public/logo/logo200.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Layout = dynamic(() => import("../components/auth/Layout"), {
    ssr: false,
});
export default function Register() {
    const router = useRouter();
    const toast = useToast();
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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState([]);
    const formData = new FormData();
    useEffect(() => {
        console.log(
            email,
            password,
            firstName,
            lastName,
            passwordConfirmation,
            phone,
            address
        );
        // console.log(errors);
    }, [
        email,
        password,
        firstName,
        lastName,
        passwordConfirmation,
        phone,
        address,
        errors,
    ]);

    async function handleSubmit(e) {
        e.preventDefault();
        formData.append("email", email);
        formData.append("full_name", firstName + " " + lastName);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("password", password);
        formData.append("password_confirmation", passwordConfirmation);

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BACKEND}/api/professionals/register`,
                {
                    email: email,
                    full_name: firstName + " " + lastName,
                    password: password,
                    password_confirmation: passwordConfirmation,
                }
            );
            const result = await res.data;
            if (result.status) {
                thisIsToast("success", "Success", result.message);

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
                } else if (result.data.user.role == "professionals") {
                    router.push("/jago");
                } else if (result.data.user.role == "customers") {
                    router.push("/user");
                }
            }
        } catch (error) {
            console.log(error);
            switch (error.response.status) {
                case 422:
                    thisIsToast(
                        "error",
                        "Inputan Salah",
                        error.response.data.message
                    );
                    // add error to state
                    setErrors(error.response.data.error);
                    break;
                case 500:
                    thisIsToast(
                        "error",
                        "Terjadi Kesalahan",
                        error.response.message
                    );
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div>
            <Layout>
                <div className={"flex justify-center items-center h-screen"}>
                    <form onSubmit={handleSubmit}>
                        <Box
                            boxShadow={{ base: "none", md: "2xl" }}
                            w={{
                                base: "100%",
                                md: "800px",
                            }}
                            borderRadius={"2xl"}
                        >
                            <VStack
                                align={"start"}
                                px={"50px"}
                                py={"38"}
                                spacing={"2"}
                            >
                                <Image
                                    src={logo}
                                    alt={"logo"}
                                    height={"50"}
                                    width={"50"}
                                />
                                <Text color={"mygray.700"}>Join With Me </Text>
                                <Heading fontWeight={"bold"} size={"2xl"}>
                                    Sign Up as Professional
                                </Heading>
                                <HStack>
                                    <FormControl>
                                        <FormLabel>First Name</FormLabel>
                                        <Input
                                            type="text"
                                            colorScheme={"myorange"}
                                            placeholder={"First Name"}
                                            isRequired
                                            variant={"filled"}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                            value={firstName}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            type="text"
                                            colorScheme={"myorange"}
                                            placeholder={"Last Name"}
                                            isRequired
                                            variant={"filled"}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                            value={lastName}
                                        />
                                    </FormControl>
                                </HStack>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        colorScheme={"myorange"}
                                        placeholder={"Email Address"}
                                        isRequired
                                        variant={"filled"}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Phone</FormLabel>
                                    <Input
                                        type="text"
                                        colorScheme={"myorange"}
                                        placeholder={"Phone"}
                                        isRequired
                                        variant={"filled"}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        value={phone}
                                    />
                                </FormControl>
                                <HStack>
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
                                    <FormControl>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <Input
                                            type="password"
                                            colorScheme={"myorange"}
                                            placeholder={"Confirm Password"}
                                            isRequired
                                            variant={"filled"}
                                            onChange={(e) =>
                                                setPasswordConfirmation(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </FormControl>
                                </HStack>
                                <Button
                                    colorScheme={"myorange"}
                                    type={"submit"}
                                >
                                    Register{" "}
                                </Button>
                                <Text display={"flex"} gap={"10px"}>
                                    I don’t have an account ?{" "}
                                    <Text
                                        colorScheme={"myorange"}
                                        color={"myorange.500"}
                                        fontWeight={"bold"}
                                    >
                                        <Link href={"/login"}>Sign In</Link>
                                    </Text>
                                </Text>
                            </VStack>
                        </Box>
                    </form>
                </div>
            </Layout>
        </div>
    );
}
