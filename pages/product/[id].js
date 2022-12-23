import { useRouter } from "next/router";
import {
    Container,
    Heading,
    Text,
    VStack,
    Box,
    Image,
    Grid,
    GridItem,
    Divider,
    HStack,
    Avatar,
    Button,
} from "@chakra-ui/react";
export default function Professional() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Container maxW={"container.xl"} my="10">
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                    }}
                    gap={4}
                >
                    <GridItem
                        order={{
                            base: 2,
                            md: 1,
                        }}
                    >
                        <VStack alignItems={"start"} rowGap="4">
                            <Heading size={"md"}>Product {id}</Heading>
                            <VStack alignItems={"start"}>
                                <Text>- Gantungan handuk di dinding</Text>
                                <Text>- Modern Minimalis</Text>
                                <Text>
                                    - Dilengkapi skrup, fischer, dan kunci L
                                </Text>
                            </VStack>
                            <Divider />
                            <Heading size={"sm"}>
                                General Specsification
                            </Heading>
                            <Grid templateColumns={"repeat(2,1fr)"} gap="2">
                                <Text fontWeight={"semibold"}>Material</Text>
                                <Text>Stainless Steel</Text>
                                <Text fontWeight={"semibold"}>Material</Text>
                                <Text>Stainless Steel</Text>
                                <Text fontWeight={"semibold"}>Material</Text>
                                <Text>Stainless Steel</Text>
                                <Text fontWeight={"semibold"}>Material</Text>
                                <Text>Stainless Steel</Text>
                                <Text fontWeight={"semibold"}>Material</Text>
                                <Text>Stainless Steel</Text>
                            </Grid>
                            <Divider />
                            <Heading size={"sm"}>size</Heading>
                            <Grid templateColumns={"repeat(2,1fr)"} gap="2">
                                <Text fontWeight={"semibold"}>Length</Text>
                                <Text>100cm</Text>
                                <Text fontWeight={"semibold"}>Width</Text>
                                <Text>10cm</Text>
                                <Text fontWeight={"semibold"}>Height</Text>
                                <Text>10cm</Text>
                                <Text fontWeight={"semibold"}>Weight</Text>
                                <Text>1kg</Text>
                            </Grid>
                        </VStack>
                    </GridItem>
                    <GridItem
                        order={{
                            base: 1,
                            md: 2,
                        }}
                    >
                        <VStack>
                            <Box
                                borderRadius={"xl"}
                                overflow="hidden"
                                w={{
                                    base: "70",
                                    md: "300px",
                                }}
                            >
                                <Image
                                    alt="prodct image"
                                    src="https://via.placeholder.com/300"
                                />
                            </Box>
                        </VStack>
                    </GridItem>
                </Grid>
                <HStack
                    bg={"mygray.500"}
                    p="6"
                    borderRadius={"lg"}
                    my={{
                        base: "10",
                        md: "20",
                    }}
                    columnGap="6"
                    justifyContent={"space-between"}
                >
                    <HStack>
                        <Box>
                            <Avatar
                                size={"lg"}
                                src="https://via.placeholder.com/250"
                            />
                        </Box>
                        <VStack alignItems={"start"}>
                            <Heading size={"sm"}>
                                Build It Official Store
                            </Heading>
                            <Text>Providing Any U want</Text>
                        </VStack>
                    </HStack>
                    <Button colorScheme={"myorange"}>Lihat Toko</Button>
                </HStack>
            </Container>
        </>
    );
}
