import {VStack, Text, HStack, Heading, Box} from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceItem({ title, children, icon }) {
    return (
        <>
            <VStack
                align={"left"}
                borderRadius={"lg"}
                padding={{
                    base: "4",
                    md: "8",
                }}
                gap={"4"}
                bgColor={"myorange.main"}
                color={"mygray.main"}
            >
                <Box borderRadius={"full"} bgColor={"myorange.100"} p={"2"} alignSelf={"start"} color={"myorange.main"}>
                     {icon}
                </Box>
                <Heading size={{
                    base: "md",
                    md: "lg",
                }} fontWeight={"medium"}>
                    {title}
                </Heading>
                <Text
                    fontSize={{
                        base: "sm",
                        md: "md",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: children,
                    }}
                ></Text>
                <Link href={"#"}>
                    <HStack alignItems={"left"}>
                        <span>learn more</span>
                        <FaArrowRight
                            className="ml-2"
                            style={{ width: "inherit", height: "inherit" }}
                        />
                    </HStack>
                </Link>
            </VStack>
        </>
    );
}
