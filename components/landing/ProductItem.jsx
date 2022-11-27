import {Button, Heading, Text, VStack, Box} from "@chakra-ui/react";
import Image from "next/image";
import ProductImage from '../../public/product.png'
import toRupiah from '@develoka/angka-rupiah-js';

export default function ProductItem({ image, title, price, info}) {
    image = ProductImage;
    return (
        <div>
            <VStack
                align={"left"}
                borderRadius={"lg"}
                padding={{
                    base: "4",
                    md: "8",
                }}
                gap={"4"}
                bgColor={"mygray.main"}
                color={"gray.800"}
                justifyContent={"center"}
            >
                <Box borderRadius={"lg"} overflow={"hidden"}>
                    <Image src={image} alt={title} />
                </Box>
                <Heading size={{
                    base: "md",
                    md: "lg",
                }} fontWeight={"medium"}>
                    {title}
                <Text fontWeight={'normal'} fontSize={"xs"}>
                    {info}
                </Text>
                </Heading>
                <Text fontWeight={"semibold"}>
                    {toRupiah(price, {dot: '.', floatingPoint: 0})}
                </Text>
                <Button colorScheme={"myorange"} variant={"solid"}>Lihat</Button>
            </VStack>
        </div>
    )
}