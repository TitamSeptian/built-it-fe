import {
    Box,
    Button, Checkbox,
    Flex,
    Heading,
    useColorModeValue, VStack,
    useNumberInput, Text, HStack
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import ProductImage from "../../../public/product.png"
import {useState, useEffect} from "react";
import toRupiah from "@develoka/angka-rupiah-js";
import CartItem from "./CartItem";


export default function Card() {

    return (
        <div className={"flex flex-col gap-3"}>
            <Box
                p={{
                    base: '4',
                    md: '6',
                }}
                bg={useColorModeValue('white', 'gray.700')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                borderRadius={"lg"}
                boxShadow={"md"}
            >
                <Flex flexDirection={"column"} gap={"3"}>
                    <Heading size={{base: 'sm', md: 'md',}}>Cart</Heading>
                </Flex>
            </Box>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <Box
                p={{
                    base: '4',
                    md: '6',
                }}
                bg={useColorModeValue('white', 'gray.700')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                borderRadius={"lg"}
                boxShadow={"md"}
            >
                {/*<Flex flexDirection={"column"} gap={"3"}>*/}
                    <div className={"flex flex-row justify-between fixed inset-x-0 bottom-0 p-4 -left-25 bg-white shadow-lg border-t-2"}>
                        <Checkbox size={"md"} colorScheme={"myorange"}>Pilih Semua</Checkbox>
                        <Box>
                            <Text>Total</Text>
                            <Text fontWeight={"semibold"}>Rp. 100.000</Text>

                        </Box>
                        <Button colorScheme={"myorange"}>Checkout</Button>
                    </div>
                {/*</Flex>*/}
            </Box>
        </div>
    )
}