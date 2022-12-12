import {Box, Flex, Grid, GridItem, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";

import Image2 from "next/image";

export default function TeamItem(props) {
    return (
        <VStack align={"left"}
                borderRadius={"lg"}
                padding={{
                    base: "4",
                    md: "8",
                }}
                gap={"4"}
                bgColor={"mygray.main"}
                color={"gray.800"}
                justifyContent={"center"}>
            <div className={"aspect-square object-contain rounded-full overflow-hidden"}>
                <Image2 src={props.image} alt={props.name} className={" "}/>
            </div>
            <Heading size={"lg"}>{props.name}</Heading>
            <Text>{props.as}</Text>
        </VStack>
    )
}