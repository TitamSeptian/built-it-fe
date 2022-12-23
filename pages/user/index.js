import {
    HStack,
    Icon,
    Heading,
    VStack,
    Avatar,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
export default function User() {
    return (
        <div>
            <HStack
                display={{
                    base: "none",
                    md: "flex",
                }}
                gap={2}
            >
                <Icon as={FaUser} boxSize={6} />
                <Heading size={"sm"}>Septian Dwi</Heading>
            </HStack>
            <VStack
                bg={"white"}
                borderRadius={"lg"}
                py={"6"}
                mt={2}
                alignItems={"center"}
                // columnGap="10"
                rowGap={"6"}
            >
                <Avatar
                    size={"2xl"}
                    src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                />
                <Heading size={"lg"}>Septian Dwi</Heading>
                <Heading size={"sm"} color="mygray.900">
                    Info Profile
                </Heading>
                <SimpleGrid columns={2} spacing="2">
                    <Heading
                        size={"sm"}
                        fontWeight="semibold"
                        placeItems={"start"}
                    >
                        Nama
                    </Heading>
                    <Text>Septian Dwi</Text>
                </SimpleGrid>
                <Heading size={"sm"} color="mygray.900">
                    Info Pribadi
                </Heading>
                <SimpleGrid columns={2} spacing="4">
                    <Heading
                        size={"sm"}
                        fontWeight="semibold"
                        placeItems={"start"}
                    >
                        Email
                    </Heading>
                    <Text>titamseptian@gmail.com</Text>
                    <Heading
                        size={"sm"}
                        fontWeight="semibold"
                        placeItems={"start"}
                    >
                        Nomor HP
                    </Heading>
                    <Text>+612981239123</Text>
                    <Heading
                        size={"sm"}
                        fontWeight="semibold"
                        placeItems={"start"}
                    >
                        Jenis Kelamin
                    </Heading>
                    <Text>Laki-laki</Text>
                </SimpleGrid>
                <Heading size={"sm"} color="mygray.900">
                    Alamat
                </Heading>
                <Text>Jl. Raya Cibubur No. 123, Cibubur, Jakarta</Text>
            </VStack>
        </div>
    );
}
