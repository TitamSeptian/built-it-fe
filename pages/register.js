import Layout from "../components/auth/Layout";
import {
    Box,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    Textarea,
    HStack
} from "@chakra-ui/react";
import logo from '../public/logo/logo200.png';
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";

export default function Register() {
    return (
        <Layout>
            <div className={"flex justify-center items-center h-screen"}>
                <Box boxShadow={{base: 'none', md: "2xl"}} w={"800px"} borderRadius={"2xl"}>
                    <VStack align={"start"} px={"50px"} py={"38"} spacing={"2"}>
                        <Image src={logo} alt={"logo"} height={"50"} width={"50"}/>
                        <Text color={"mygray.700"}>Join With Me </Text>
                        <Heading fontWeight={"bold"} size={"2xl"}>Sign Up</Heading>
                        <HStack>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input type='text' colorScheme={"myorange"} placeholder={"First Name"}
                                       isRequired variant={"filled"}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type='text' colorScheme={"myorange"} placeholder={"Last Name"} isRequired
                                       variant={"filled"}/>
                            </FormControl>
                        </HStack>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' colorScheme={"myorange"} placeholder={"Email Address"}
                                   isRequired variant={"filled"}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Phone</FormLabel>
                            <Input type='text' colorScheme={"myorange"} placeholder={"Phone Number"} isRequired
                                   variant={"filled"}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Textarea type='email' colorScheme={"myorange"} placeholder={"Address"} isRequired
                                      variant={"filled"}/>
                        </FormControl>
                        <HStack>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' colorScheme={"myorange"} placeholder={"Password"}
                                       isRequired variant={"filled"}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Confirm Password</FormLabel>
                                <Input type='password' colorScheme={"myorange"} placeholder={"Confirm Password"}
                                       isRequired variant={"filled"}/>
                            </FormControl>
                        </HStack>
                        <Button colorScheme={"myorange"}>Register <FaArrowRight display={{display: 'inherit',}}
                                                                                styles={{marginLeft: '10px'}}/></Button>
                        <Text display={"flex"} gap={"10px"}>I don’t have an account ? <Text
                            colorScheme={"myorange"} color={"myorange.500"} fontWeight={"bold"}><Link
                            href={"/login"}>Sign In</Link></Text></Text>
                    </VStack>
                </Box>
            </div>
        </Layout>
    )
}