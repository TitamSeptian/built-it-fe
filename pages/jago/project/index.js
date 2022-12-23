import {
    VStack,
    Heading,
    Text,
    HStack,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function project() {
    const projectSample = [
        {
            id: 1,
            name: "Project 1",
            project: "Jl. Raya Cibubur No. 1",
        },
        {
            id: 2,
            name: "Project 2",
            project: "Jl. Raya Cibubur No. 2",
        },
        {
            id: 3,
            name: "Project 3",
            project: "Jl. Raya Cibubur No. 3",
        },
    ];
    const handleDelete = (id) => {
        alert(id);
        console.log(id);
    };
    return (
        <>
            <HStack
                bg={"white"}
                borderRadius="lg"
                justifyContent={"space-between"}
                py={"2"}
                mt={2}
                px={"4"}
            >
                <Heading size={"md"}>Log Project</Heading>
                <Link href={"/jago/project/create"}>
                    <Button
                        variant={"outline"}
                        size="sm"
                        colorScheme="myorange"
                    >
                        Tambah Projects
                    </Button>
                </Link>
            </HStack>
            {projectSample.map((project) => (
                <VStack
                    key={project.id}
                    bg={"white"}
                    borderRadius={"lg"}
                    py={"4"}
                    mt={2}
                    px={"4"}
                    alignItems={"start"}
                    // rowGap={"6"}
                    columnGap={"10"}
                >
                    <Heading size={"md"}>{project.name}</Heading>
                    <Text fontSize={"sm"}>{project.project}</Text>
                    <HStack alignSelf={"end"}>
                        <Link href={`/jago/project/${project.id}`}>
                            <Button
                                variant={"ghost"}
                                size="sm"
                                colorScheme={"blue"}
                            >
                                Edit
                            </Button>
                        </Link>
                        <Button
                            variant={"ghost"}
                            size="sm"
                            colorScheme={"red"}
                            onClick={(e) => handleDelete(project.id)}
                        >
                            Hapus
                        </Button>
                    </HStack>
                </VStack>
            ))}
        </>
    );
}
