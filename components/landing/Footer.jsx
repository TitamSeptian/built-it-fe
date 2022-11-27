import {Box, Center, Container, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import logo from '../../public/logo/logo48x48.png';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <VStack h={'70px'} w={'full'} bgColor={'mygray.500'} justifyContent={'center'}>
                <Heading color={'myorange.main'} size={'lg'}>Build It</Heading>
            </VStack>
            <Box bgColor={'footer'}>
                <Container maxW={'890px'}>
                    <VStack justifyContent={'center'} py={10} spacing={'10'}>
                        <HStack spacing={'6'}>
                            <Image src={logo} alt={"logo"}/>
                            <Heading>Build It</Heading>
                        </HStack>
                        <Text align={'center'}>
                            © 2022 Build It, Inc. Build It, dan semua logo terkait adalah merek dagang, merek layanan, dan/atau merek dagang terdaftar Build It, Inc.
                        </Text>
                        <HStack spacing={'18'} fontWeight={'semibold'}>
                            <Link href={"#"}>
                                <Text color={'myorange.main'}>Kebijakan Privacy</Text>
                            </Link>
                            <Link href={"#"}>
                                <Text color={'myorange.main'}>FaQ</Text>
                            </Link>
                            <Link href={"#"}>
                                <Text color={'myorange.main'}>Laporkan Bug</Text>
                            </Link>
                        </HStack>
                    </VStack>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;