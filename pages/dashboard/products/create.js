import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
    useColorModeValue,
    Box, Flex,
    Textarea, Radio, RadioGroup, Stack, Heading, Button, HStack
} from '@chakra-ui/react'
import Link from "next/link";

export default function Create() {
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
                        <Link href={"/dashboard/products/"}>
                            <Button colorScheme={"mywood"}>Back</Button>
                        </Link>
                    </HStack>
                    <form>
                        <FormControl isRequired>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' variant={"filled"}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Country</FormLabel>
                            <Select placeholder='Select country' variant={"filled"}>
                                <option>United Arab Emirates</option>
                                <option>Nigeria</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Amount</FormLabel>
                            <NumberInput max={50} min={10} variant={"filled"}>
                                <NumberInputField/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper/>
                                    <NumberDecrementStepper/>
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                placeholder='Here is a sample placeholder'
                                variant={"filled"}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Radio</FormLabel>
                            <RadioGroup>
                                <Stack spacing={4} direction='row'>
                                    <Radio value='1' colorScheme={"myorange"} isDisabled>
                                        Radio 1
                                    </Radio >
                                    <Radio value='2' colorScheme={"myorange"}>Radio 2</Radio>
                                    <Radio value='3' colorScheme={"myorange"}>Radio 3</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <Button colorScheme={"mywood"} width={"full"} my={"2"}>Submit</Button>
                        </FormControl>
                    </form>
                </Flex>
            </Box>
        </div>
    )
}