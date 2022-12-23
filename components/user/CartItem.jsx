import {
    useNumberInput,
    HStack,
    Button,
    Input,
    Checkbox,
    Box,
    Image,
    VStack,
    Heading,
    Text,
    useColorModeValue,
    IconButton,
    chakra,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import Image from "next/image";
import toRupiah from "@develoka/angka-rupiah-js";

// const ChakraNextImage = chakra(Image);
export default function CartItem({ img, qty, price, title }) {
    const [totalPrice, setTotalPrice] = useState(
        parseInt(qty) * parseInt(price)
    );
    const [quantitiy, setQuantitiy] = useState(parseInt(qty));
    useEffect(() => {
        setQuantitiy(parseInt(qty));
        setTotalPrice(price * quantitiy);
    }, [quantitiy]);
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: quantitiy ?? 1,
            min: 1,
            max: 100,
        });
    const handleChange = (event) => setQuantitiy(event.target.value);

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();
    return (
        <HStack justifyContent={"space-between"}>
            <HStack spacing={"3"} justifyContent={"start"}>
                <Checkbox size={"lg"} colorScheme={"myorange"}></Checkbox>
                <Box
                    rounded={"2xl"}
                    overflow="hidden"
                    width={{
                        base: "32",
                        md: "24",
                    }}
                >
                    <Image src={img} alt={"product-image"} />
                </Box>
                <VStack alignItems={"start"}>
                    <Heading size={"sm"}>{title}</Heading>
                    <HStack maxW="320px">
                        <Button size={"xs"} {...dec}>
                            -
                        </Button>
                        <Input
                            size={"xs"}
                            {...input}
                            name={"qty"}
                            maxW={16}
                            onChange={handleChange}
                        />
                        <Button size={"xs"} {...inc}>
                            +
                        </Button>
                    </HStack>
                    <Text>
                        {toRupiah(parseInt(totalPrice), {
                            formal: true,
                            currency: "IDR",
                            separator: ".",
                            delimiter: ",",
                            unit: "Rp",
                            precision: 0,
                        })}
                    </Text>
                </VStack>
            </HStack>
        </HStack>
    );
}
