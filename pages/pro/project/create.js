import {
    VStack,
    Heading,
    HStack,
    Button,
    FormControl,
    Input,
    FormLabel,
    Select,
    Textarea,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function project() {
    const [form, setForm] = useState({});
    const handleForm = (name, value) => {
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.table(form);
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
                <Heading size={"md"}>Tambah Project</Heading>
                <Link href={"/pro/project"}>
                    <Button
                        variant={"outline"}
                        size="sm"
                        colorScheme="myorange"
                    >
                        Kembali
                    </Button>
                </Link>
            </HStack>
            <form onSubmit={handleSubmit}>
                <VStack
                    bg={"white"}
                    borderRadius={"lg"}
                    py={"4"}
                    mt={2}
                    px={"4"}
                    alignItems={"start"}
                    columnGap={"10"}
                >
                    <FormControl id="privinsi" isRequired>
                        <FormLabel>Provinsi</FormLabel>
                        <Select
                            variant={"filled"}
                            colorScheme="myorage"
                            placeholder="Pilih Provinsi"
                            onChange={(e) =>
                                handleForm("province", e.target.value)
                            }
                        >
                            <option value={"jawa barat"}>Jawa Barat</option>
                        </Select>
                    </FormControl>
                    <FormControl id="city" isRequired>
                        <FormLabel>Kota</FormLabel>
                        <Select
                            variant={"filled"}
                            colorScheme="myorage"
                            placeholder="Pilih Kota"
                            onChange={(e) => handleForm("city", e.target.value)}
                        >
                            <option value={"bandung"}>Bandung</option>
                        </Select>
                    </FormControl>
                    <FormControl id="name" isRequired>
                        <FormLabel>Nama Alamat</FormLabel>
                        <Input
                            type="text"
                            variant={"filled"}
                            colorScheme="myorage"
                            onChange={(e) => handleForm("name", e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="project" isRequired>
                        <FormLabel>Alamat</FormLabel>
                        <Textarea
                            variant={"filled"}
                            colorScheme="myorage"
                            onChange={(e) =>
                                handleForm("detail", e.target.value)
                            }
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        alignSelf={"end"}
                        size="sm"
                        colorScheme={"myorange"}
                        // variant={"filled"}
                    >
                        Tambah
                    </Button>
                </VStack>
            </form>
        </>
    );
}
