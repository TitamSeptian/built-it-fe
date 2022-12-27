import {
    HStack,
    VStack,
    Image,
    Container,
    Heading,
    Box,
    Text,
    Grid,
    GridItem,
    Badge,
    IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiPhone } from "react-icons/fi";

export default function Professional() {
    const sampleData = [
        {
            id: 1,
            name: "Project 1",
            image: "https://via.placeholder.com/150",
            year: 2003,
            location: "Jakarta",
            status: "Selesai",
            info: "Hotels",
        },
        {
            id: 2,
            name: "Project 2",
            image: "https://via.placeholder.com/150",
            year: 2003,
            location: "Jakarta",
            status: "Selesai",
            info: "Masjid Atosinnya pak asep",
        },
    ];
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Container maxW={"container.xl"} my="10">
                <VStack rowGap="10">
                    <Box
                        w={{
                            base: "20",
                            md: "40",
                        }}
                        borderRadius="full"
                        overflow={"hidden"}
                    >
                        <Image
                            objectFit={"cover"}
                            alt={"Professional Info"}
                            src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        />
                    </Box>
                    <Heading>Mas Cio</Heading>
                    <VStack bg={"white"} shadow="md" width={"full"} p="6">
                        <Heading size={"sm"}>
                            <Link
                                target={"_blank"}
                                href="https://wa.me/0812038123"
                            >
                                <HStack>
                                    <IconButton icon={<FiPhone />} />
                                    <Text>0812038123</Text>
                                </HStack>
                            </Link>
                        </Heading>
                    </VStack>
                    <Text>Civil Engineering</Text>
                    <Heading size={"md"} color="gray.400">
                        Log Project
                    </Heading>
                    {sampleData.map((item) => (
                        <ProjectItem
                            key={item.id}
                            name={item.name}
                            info={item.info}
                            year={item.year}
                            location={item.location}
                            image={item.image}
                            status={item.status}
                        />
                    ))}
                </VStack>
            </Container>
        </>
    );
}

const ProjectItem = ({ name, info, budget, year, location, status, image }) => {
    return (
        <VStack
            bg={"white"}
            shadow="md"
            width={"full"}
            p="6"
            borderRadius={"2xl"}
            alignItems="start"
        >
            <HStack columnGap={"6"}>
                <Box overflow={"hidden"} borderRadius="xl">
                    <Image alt="log" src={image} />
                </Box>
                <VStack alignContent={"start"} alignItems="start">
                    <Heading size={"md"}>{name}</Heading>
                    <Text>{info}</Text>
                    <Grid templateColumns={"repeat(2, 1fr)"}>
                        <GridItem>
                            <Heading size={"sm"}>Budget</Heading>
                        </GridItem>
                        <GridItem>
                            <Text>{budget}</Text>
                        </GridItem>
                        <GridItem>
                            <Heading size={"sm"}>Tahun</Heading>
                        </GridItem>
                        <GridItem>
                            <Text>{year}</Text>
                        </GridItem>
                        <GridItem>
                            <Heading size={"sm"}>Lokasi</Heading>
                        </GridItem>
                        <GridItem>
                            <Text>{location}</Text>
                        </GridItem>
                        <GridItem>
                            <Heading size={"sm"}>Status</Heading>
                        </GridItem>
                        <GridItem>
                            <Badge
                                colorScheme={"green"}
                                px="2"
                                borderRadius={"full"}
                            >
                                {status}
                            </Badge>
                        </GridItem>
                    </Grid>
                </VStack>
            </HStack>
        </VStack>
    );
};
