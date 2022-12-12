import {
    Box,
    Button,
    Checkbox,
    Heading,
    HStack, Input,
    Text,
    useColorModeValue,
    useNumberInput,
    VStack
} from "@chakra-ui/react";
import Image from "next/image";
import ProductImage from "../../../public/product.png";
import toRupiah from "@develoka/angka-rupiah-js";
import {useEffect, useState} from "react";
const HookInputNumber = ({value, price, setPrice}) => {
    
    const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} =
        useNumberInput({
            step: 1,
            defaultValue: value ?? 1,
            min: 1,
            max: 100,
            // precision: 2,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
    return (
        <HStack maxW='320px'>
            <Button size={"sm"} {...inc}>+</Button>
            <Input size={"sm"} {...input} maxW={16} onChange={() => console.log(this.target.value)}/>
            <Button size={"sm"} {...dec}>-</Button>
        </HStack>
    )
}
export default function CartItem() {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        console.log(totalPrice)
    }, [totalPrice])
    return (
        <div>
            <Box
                p={{
                    base: '4',
                    md: '6',
                }}
                bg={useColorModeValue('white', 'gray.700')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                borderRadius={"lg"}
                boxShadow={"md"}>
                <HStack justifyContent={"space-between"}>
                    <HStack spacing={"3"} justifyContent={"start"}>
                        <Checkbox size={"lg"} colorScheme={"myorange"}></Checkbox>
                        <Box borderRadius={"lg"} overflow={"hidden"}>
                            <Image src={ProductImage} alt={"product-image"}/>
                        </Box>
                        <VStack>
                            <Heading size={"md"}>Product Name</Heading>
                            <HookInputNumber value={2} price={totalPrice} setPrice={setTotalPrice}/>
                            <Text>{toRupiah(totalPrice, {dot: '.', floatingPoint: 0})}</Text>
                        </VStack>
                    </HStack>
                </HStack>
            </Box>
        </div>
    )
}