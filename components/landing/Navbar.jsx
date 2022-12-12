import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Container,
} from "@chakra-ui/react";

import logo48 from "../../public/logo/logo48x48.png";

import {BiMenu, BiMenuAltRight} from "react-icons/bi";
import {ColorModeSwitcher} from "../ColorModeSwitcher";
import Image from "next/image";
import Link from "next/link";

export default function WithSubnavigation() {
    const {isOpen, onToggle} = useDisclosure();
    const hrefLogin = '/login';
    
    return (
        <div>
            <Container maxW={"container.xl"}>
                <Box>
                    <Flex
                        // bg={useColorModeValue("white", "gray.800")}
                        bg={useColorModeValue("white", "gray.800")}
                        color={useColorModeValue("gray.600", "white")}
                        minH={"80px"}
                        py={{base: 2}}
                        px={{base: 4}}
                        borderColor={useColorModeValue("gray.200", "gray.900")}
                        align={"center"}
                        // bgColor={"gray.900"}
                    >
                        <Flex
                            flex={{base: 1, md: "auto"}}
                            ml={{base: -2}}
                            display={{base: "flex", md: "none"}}
                        >
                            <IconButton
                                onClick={onToggle}
                                icon={
                                    isOpen ? (
                                        <BiMenuAltRight w={3} h={3}/>
                                    ) : (
                                        <BiMenu w={5} h={5}/>
                                    )
                                }
                                variant={"ghost"}
                                aria-label={"Toggle Navigation"}
                            />
                        </Flex>
                        <Flex
                            flex={{base: 1}}
                            justify={{base: "center", md: "start"}}
                        >
                            {/* <Text
                            textAlign={useBreakpointValue({
                                base: "center",
                                md: "left",
                            })}
                            fontFamily={"heading"}
                            color={useColorModeValue("gray.800", "white")}
                        >
                            Logo
                        </Text> */}
                            <Image src={logo48} alt="logo"/>

                            <Flex display={{base: "none", md: "flex"}} ml={10}>
                                <DesktopNav/>
                            </Flex>
                        </Flex>

                        <Stack
                            flex={{base: 1, md: 0}}
                            justify={"flex-end"} 
                            direction={"row"}
                            spacing={6}
                        >
                            <ColorModeSwitcher/>
                            <Link href={hrefLogin} passHref  legacyBehavior>
                                <Button
                                    as={"a"}
                                    fontSize={"sm"}
                                    fontWeight={400}
                                    // variant={"link"}
                                    href={"#"}
                                    colorScheme={"myorange"}
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </Stack>
                    </Flex>

                    <Collapse in={isOpen} animateOpacity>
                        <MobileNav/>
                    </Collapse>
                </Box>
            </Container>
        </div>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("myorange.main", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box
                    key={navItem.label}
                    // bgColor={"mygray.main"}
                    // textColor={"myorange.main"}
                    borderRadius={"md"}
                    // _hover={{bgColor: "mygray.main"}}
                >
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Flex alignItems={"center"} justifyItems={"center"}>
                                <Link
                                    p={2}
                                    href={navItem.href ?? "#"}
                                >
                                    <Button colorScheme={"myorange"} variant={"ghost"}>
                                        {navItem.label}
                                    </Button>
                                </Link>
                            </Flex>
                        </PopoverTrigger>
                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({label, href, subLabel}) => {
    return (
        <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            // _hover={{bg: useColorModeValue("myorange.50", "gray.900")}}
        >
            <Stack direction={"row"} align={"center"} justifyContent={"center"}>
                <Box>
                    <Text transition={"all .3s ease"} fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon color={""} w={5} h={5} as={BiMenuAltRight}/>
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{md: "none"}}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({label, children, href}) => {
    const {isOpen, onToggle} = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                // _hover={{
                //     textDecoration: "none",
                // }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={BiMenu}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{marginTop: "0!important"}}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: "Beranda",
        href: "/",
        isActive: true,
    },
    {
        label: "Toko",
        href: "/store",
    },
    {
        label: "Tentang",
        href: "/about",
    },
    {
        label: "Bahan Bangunan",
        href: "#",
    },
    // {
    //     label: "Find Work",
    //     children: [
    //         {
    //             label: "Job Board",
    //             subLabel: "Find your dream design job",
    //             href: "#",
    //         },
    //         {
    //             label: "Freelance Projects",
    //             subLabel: "An exclusive list for contract work",
    //             href: "#",
    //         },
    //     ],
    // },
];
