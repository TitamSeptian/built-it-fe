import {
    Container,
    Heading,
    HStack,
    Text,
    VStack,
    Box,
} from "@chakra-ui/react";
import Image from "next/image";

import logo200 from "../../public/logo/logo200.png";

export default function HeroAbout() {
    return (
        <div>
            <Container maxW={"container.xl"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 min-h-[400px]">
                    <VStack alignItems={"left"} justifyContent={"center"}>
                        <Heading size={"2xl"} textColor={"myorange.main"}>
                            Build It
                        </Heading>
                        <Text textColor={"gray.600"}>
                            Creeping his without wherein fill lesser of you set sea
                            very. Let saying fly green were without his waters midst
                            waters over one man the wont one were years earth let.
                        </Text>
                    </VStack>
                    <Box
                        display={"flex"}
                        alignItems="center"
                        justifyContent={"center"}
                    >
                        <Image
                            src={logo200}
                            alt="logo"
                            width={"200"}
                            height={"200"}
                        />
                    </Box>
                </div>
            </Container>
        </div>
    );
}
