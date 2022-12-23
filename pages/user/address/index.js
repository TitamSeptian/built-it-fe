import {
    VStack,
    Heading,
    Text,
    HStack,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Address() {
    const AddressSample = [
        {
            id: 1,
            name: "alamat utama",
            address: "Jl. Raya Cibubur No. 1",
        },
        {
            id: 2,
            name: "alamat kedua",
            address: "Jl. Raya Cibubur No. 2",
        },
        {
            id: 3,
            name: "kantor",
            address: "Jl. Raya Cibubur No. 3",
        },
    ];
    const handleDelete = (id) => {
        alert(id);
        console.log(id);
    };
    return (
        <>
            <HStack
                bg={"white"}
                borderRadius="lg"
                justifyContent={"space-between"}
                py={"2"}
                mt={2}
                px={"4"}
            >
                <Heading size={"md"}>List Alamat</Heading>
                <Link href={"/user/address/create"}>
                    <Button
                        variant={"outline"}
                        size="sm"
                        colorScheme="myorange"
                    >
                        Tambah Alamat
                    </Button>
                </Link>
            </HStack>
            {AddressSample.map((address) => (
                <VStack
                    key={address.id}
                    bg={"white"}
                    borderRadius={"lg"}
                    py={"4"}
                    mt={2}
                    px={"4"}
                    alignItems={"start"}
                    // rowGap={"6"}
                    columnGap={"10"}
                >
                    <Heading size={"md"}>{address.name}</Heading>
                    <Text fontSize={"sm"}>{address.address}</Text>
                    <HStack alignSelf={"end"}>
                        <Link href={`/user/address/${address.id}`}>
                            <Button
                                variant={"ghost"}
                                size="sm"
                                colorScheme={"blue"}
                            >
                                Edit
                            </Button>
                        </Link>
                        <Button
                            variant={"ghost"}
                            size="sm"
                            colorScheme={"red"}
                            onClick={(e) => handleDelete(address.id)}
                        >
                            Hapus
                        </Button>
                    </HStack>
                </VStack>
            ))}
        </>
    );
}
