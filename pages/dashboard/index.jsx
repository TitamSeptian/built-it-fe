import {Box, Flex, Heading, Text, useColorModeValue} from "@chakra-ui/react";

const Dashboard = () => {
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
                    <Heading size={{base: 'sm', md: 'md',}}>Home</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur cupiditate delectus
                        dolor doloribus dolorum eaque eligendi ex excepturi, facere ipsum maiores molestiae nam neque
                        nesciunt repellendus reprehenderit tempore vel!</Text>
                </Flex>
            </Box>
        </div>
    );
}

export default Dashboard;