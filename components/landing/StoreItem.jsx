import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text} from "@chakra-ui/react";
import toRupiah from "@develoka/angka-rupiah-js";

const StoreItem = ({children, title, image}) => {
    return(
        <>
            <Card maxW={{
                base: "md",
                lg: "2xs"
            }} boxShadow={"md"}>
                <CardBody>
                    <Image
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>
                        <Text fontSize={"sm"}>
                            {children}
                        </Text>
                        {/*<Text fontSize='md' fontWeight={"semibold"}>*/}
                        {/*    {toRupiah({price}, {useUnit: true, floatingPoint: 0})}*/}
                        {/*</Text>*/}
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='mywood' size={"sm"}>
                            Beli Di toko ini
                        </Button>
                        {/*<Button variant='ghost' colorScheme='mywood' size={"sm"}>*/}
                        {/*    Add to cart*/}
                        {/*</Button>*/}
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}
export default StoreItem;