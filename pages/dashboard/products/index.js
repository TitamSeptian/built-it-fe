import {
    Box, Flex, Heading, Text, useColorModeValue, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, HStack, Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Products() {
    return (
        <div>
            <Box
                p={{
                    base: '4',
                    md: '6',
                }}
                bg={useColorModeValue('white', 'gray.700')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                borderRadius={"lg"}
                boxShadow={"md"}
            >
                <Flex flexDirection={"column"} gap={"3"}>
                    <HStack mx={"3"} justifyContent={"space-between"}>
                        <Heading size={{base: 'sm', md: 'md',}}>Products</Heading>
                        <Link href={"/dashboard/products/create"}>
                            <Button colorScheme={"mywood"}>Create</Button>
                        </Link>
                    </HStack>
                    <TableContainer>
                        <Table variant='simple'>
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Flex>
            </Box>
        </div>
    )
}