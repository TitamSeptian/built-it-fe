import { Box, Heading, Container, Text, Button } from "@chakra-ui/react";

export default function HeroSection() {
    return (
        <div>
            <Container maxW={"container.xl"}>
                <Box
                    bgColor={"mygray.main"}
                    display={"flex"}
                    minW="full"
                    alignItems={"center"}
                    justifyContent={"center"}
                    paddingY={"4rem"}
                    borderRadius={"lg"}
                    flexDirection={"column"}
                    gap={"1rem"}
                >
                    <Heading size={"2xl"} textColor={"myorange.main"}>
                        Build It
                    </Heading>
                    <Text textColor={"myblack.main"} fontSize="xl" px={'1'}>
                        Lakukan perbiakan dan pembangunan seperti memesan
                        makanan secara online
                    </Text>
                    <Button colorScheme={"myblack"}>Jelajahi</Button>
                </Box>
            </Container>
        </div>
    );
}
