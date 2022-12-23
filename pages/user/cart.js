import {
    VStack,
    HStack,
    Heading,
    Badge,
    Image,
    Box,
    Text,
    Button,
    IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import CartItem from "../../components/user/CartItem";
import { FaTrash } from "react-icons/fa";
export default function Pesanan() {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Septian Dwi",
            store: "Toko 1",
            status: "Menunggu Pembayaran",
            total: "100000",
            qty: 1,
            varitant: "M",
        },
        {
            id: 2,
            name: "Septian Dwi",
            store: "Toko 1",
            status: "Menunggu Pembayaran",
            total: "100000",
            qty: 10,
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
                    <Heading size={"xs"}>{item.store}</Heading>
                    <CartItem
                        title={item.name}
                        img={"https://bit.ly/dan-abramov"}
                        price={item.total}
                        qty={item.qty}
                    />

                    <HStack alignSelf={"end"}>
                        <IconButton
                            variant={"outline"}
                            colorScheme="red"
                            size={"sm"}
                            icon={<FaTrash />}
                        />
                        <Button size={"sm"} colorScheme="mywood">
                            <Text fontWeight={"bold"}>Chekcout</Text>
                        </Button>
                    </HStack>
                </VStack>
            ))}
        </div>
    );
}
