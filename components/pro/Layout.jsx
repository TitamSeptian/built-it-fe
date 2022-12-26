import {
    Avatar,
    Box,
    Flex,
    Grid,
    useDisclosure,
    GridItem,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    VStack,
    Container,
    Icon,
} from "@chakra-ui/react";
import { FiChevronDown, FiHome, FiMenu, FiTrendingUp } from "react-icons/fi";
import Image from "next/image";
import logo48 from "../../public/logo/logo48x48.png";
import Link2 from "next/link";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const baseUri = "/jago";
const LinkItems = [
    { name: "Profile", icon: FiHome, url: baseUri + "/" },
    { name: "Log Project", icon: FiTrendingUp, url: baseUri + "/project" },
];
const MobileNav = ({ onOpen, ...rest }) => {
    const router = useRouter();
    const handleLogout = () => {
        Cookies.remove("access_token");
        Cookies.remove("role");
        router.push("/");
    };
    return (
        <Flex
            // ml={{base: 0, md: 60}}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.700")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: "flex", md: "none" }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
            >
                <Image src={logo48} alt={"logo"} />
            </Text>

            <HStack spacing={{ base: "0", md: "6" }}>
                <ColorModeSwitcher />
                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}
                        >
                            <HStack>
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                    }
                                />
                                <VStack
                                    display={{ base: "none", md: "flex" }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text fontSize="sm">Justina Clark</Text>
                                </VStack>
                                <Box display={{ base: "none", md: "flex" }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue("white", "gray.900")}
                            borderColor={useColorModeValue(
                                "gray.200",
                                "gray.700"
                            )}
                        >
                            <Link2 href={baseUri + "/"}>
                                <MenuItem>Profile</MenuItem>
                            </Link2>
                            <MenuDivider />
                            <MenuItem onClick={handleLogout}>Keluar</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
const SideItem = ({ children, icon, url, ...rest }) => {
    return (
        <Link2
            href={url}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    transition: "0.2s",
                    bg: "myorange.400",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link2>
    );
};
export default function Layout({ children }) {
    const router = useRouter();
    useEffect(() => {
        const token = Cookies.get("access_token");
        const role = Cookies.get("role");
        if (!token) router.push("/login");
        if (role !== "professional") {
            Cookies.remove("access_token");
            router.push("/login");
        }
    });
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box minH="100vh" bg={useColorModeValue("mygray.500", "gray.700")}>
                <MobileNav onOpen={onOpen} />
                <Container maxW={"container.xl"} my={"10"}>
                    <Grid
                        templateAreas={{
                            base: `"sidebar" "content"`,
                            md: `"sidebar content content content"`,
                        }}
                        templateRows={{
                            base: "1fr",
                            md: "1fr 1fr",
                        }}
                        templateColumns={{
                            base: "1fr",
                            md: "1fr 1fr 1fr 1fr",
                        }}
                        gap={4}
                    >
                        <GridItem area={`sidebar`}>
                            <VStack bg={"white"} borderRadius={"lg"} py={"6"}>
                                {LinkItems.map((link) => (
                                    <SideItem
                                        key={link.name}
                                        icon={link.icon}
                                        url={link.url}
                                        justifyContent="start"
                                    >
                                        {link.name}
                                    </SideItem>
                                ))}
                            </VStack>
                        </GridItem>
                        <GridItem area={`content`}>{children}</GridItem>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
