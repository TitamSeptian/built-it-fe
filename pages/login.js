import Layout from "../components/auth/Layout";
import {Box, Heading, Text, VStack, FormControl, FormLabel, Input, FormHelperText, Button} from "@chakra-ui/react";
import logo from '../public/logo/logo200.png';
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";

export default function Login() {
    return (
        <div>
            <Layout>
                <div className={"flex justify-center items-center h-screen"}>
                    <Box boxShadow={{base: 'none', md: "2xl"}} w={"600px"} borderRadius={"2xl"}>
                        <VStack align={"start"} px={"50px"} py={"38"} spacing={"7"}>
                            <Link href={'/'}>
                                <Image src={logo} alt={"logo"} height={"50"} width={"50"}/>
                            </Link>
                            <Text color={"mygray.700"}>Welcome </Text>
                            <Heading fontWeight={"bold"} size={"2xl"}>Sign In</Heading>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' colorScheme={"myorange"} placeholder={"Emaill Address"}
                                       isRequimyorange variant={"filled"}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' colorScheme={"myorange"} placeholder={"Password"} isRequired
                                       variant={"filled"}/>
                            </FormControl>
                            <Button colorScheme={"myorange"}>Sign In <FaArrowRight display={{display: 'inherit',}}
                                                                                   styles={{marginLeft: '10px'}}/></Button>
                            <Text display={"flex"} gap={"10px"}>I don’t have an account ?
                                <Text colorScheme={"myorange"}
                                      color={"myorange.500"}
                                      fontWeight={"bold"}>
                                    <Link href={"/register"}>Sign Up</Link>
                                </Text>
                            </Text>
                        </VStack>
                    </Box>
                </div>
            </Layout>
        </div>
    )
}