import {
    VStack,
    HStack,
    Heading,
    Badge,
    Image,
    Box,
    Text,
    Button,
} from "@chakra-ui/react";
import { useState } from "react";
export default function Pesanan() {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Septian Dwi",
            store: "Toko 1",
            status: "Menunggu Pembayaran",
            total: "Rp. 100.000",
            qty: 1,
            varitant: "M",
        },
        {
            id: 2,
            name: "Septian Dwi",
            store: "Toko 1",
            status: "Menunggu Pembayaran",
            total: "Rp. 100.000",
            qty: 1,
            varitant: "M",
        },
    ]);
    return (
        <div>
            {data.map((item) => (
                <VStack
                    key={item.id}
                    bg={"white"}
                    borderRadius={"lg"}
                    py={"4"}
                    mt={2}
                    px={"4"}
                    alignItems={"start"}
                    rowGap={"6"}
                    columnGap={"10"}
                >
                    <HStack>
                        <Heading size={"sm"}>{item.store}</Heading>
                        <Badge
                            colorScheme={"green"}
                            fontWeight="bold"
                            fontSize="sm"
                            px={"2"}
                            rounded={"full"}
                            textTransform="inherit"
                        >
                            {item.status}
                        </Badge>
                    </HStack>
                    <HStack>
                        <Box
                            rounded={"2xl"}
                            overflow="hidden"
                            width={{
                                base: "32",
                                md: "24",
                            }}
                        >
                            <Image
                                src="https://bit.ly/dan-abramov"
                                fallbackSrc="https://via.placeholder.com/150"
                                loading="lazy"
                            />
                        </Box>
                        <VStack alignItems={"start"} justifyContent={"start"}>
                            <Heading size={"sm"}>{item.name}</Heading>
                            <Text>varitant : {item.varitant}</Text>
                            <HStack>
                                <text size={"xs"}>x{item.qty}</text>
                                <text size={"xs"}>{item.total}</text>
                            </HStack>
                        </VStack>
                    </HStack>
                    <Button
                        alignSelf={"end"}
                        variant={"ghost"}
                        colorScheme="myorange"
                        size={"sm"}
                    >
                        Lihat Detail Transaksi
                    </Button>
                </VStack>
            ))}
        </div>
    );
}
