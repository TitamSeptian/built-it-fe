import {Box, Heading, useColorModeValue} from "@chakra-ui/react";

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
                <Heading size={{
                    base: 'sm',
                    md: 'md',
                }}>Home</Heading>
            </Box>
        </div>
    );
}

export default Dashboard;