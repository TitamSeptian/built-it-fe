import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
} from "@chakra-ui/react";
import alif from "../../public/members/alif.png";
import septian from "../../public/members/septian.png";
import balqis from "../../public/members/balqis.png";
import arif from "../../public/members/arif.png";
import iman from "../../public/members/iman.png";
import zulfa from "../../public/members/zulfa.png";
import Image2 from "next/image";
import TeamItem from "./TeamItem";

export default function Team() {
    const memebers = [
        {
            id: "1",
            name: "Zulfa Nursyadiyah",
            as: "Documentation",
            image: zulfa,
        },
        {
            id: "2",
            name: "Septian Pradipta",
            as: "Frontend Developer",
            image: septian,
        },
        {
            id: "3",
            name: "Iman Nurohamman",
            as: "Backend Developer",
            image: iman,
        },
        {
            id: "4",
            name: "Alif Nafian",
            as: "Backend Developer",
            image: alif,
        },
        {
            id: "5",
            name: "Balqis Syahira",
            as: "Product Designer",
            image: balqis,
        },
        {
            id: "6",
            name: "Arif Pamungkas",
            as: "Quality Assurance",
            image: arif,
        },
    ];
    return (
        <>
            <Container maxW={"container.xl"} my={"10"}>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    }}
                    gap={6}
                >
                    {memebers.map((member, index) => (
                        <GridItem key={member.id}>
                            <TeamItem
                                name={member.name}
                                image={member.image}
                                as={member.as}
                            />
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
