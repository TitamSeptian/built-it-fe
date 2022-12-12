import Navbar from '../../components/landing/Navbar';
import {
    Center,
    Container, Grid, GridItem, Heading
} from "@chakra-ui/react";
import StoreItem from '../../components/landing/StoreItem';
const Store = () => {
    const StoreLists = [
        {
            id: 1,
            title: 'toko 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor.',
            image: 'https://via.placeholder.com/1600x900',
        },
        {
            id: 2,
            title: 'toko 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor.',
            image: 'https://via.placeholder.com/1600x900',
        },
        {
            id: 2,
            title: 'toko 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor.',
            image: 'https://via.placeholder.com/1600x900',
        },
        {
            id: 2,
            title: 'toko 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor.',
            image: 'https://via.placeholder.com/1600x900',
        },
        {
            id: 2,
            title: 'toko 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nunc, sed aliquam massa nisl eget dolor.',
            image: 'https://via.placeholder.com/1600x900',
        },
    ]
    return (
        <>
            <Container maxW="container.xl" my={{
                base: 4,
                md: 8,
                lg: 12,
            }}>
                <Center my={{
                    base: 4,
                    md: 8,
                    lg: 12,
                }}>
                    <Heading>Cari Toko</Heading>
                </Center>
                <Grid templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                }} gap={'6'} justifyContent={"center"} alignItems={"center"} placeItems={"center"}>
                    {StoreLists.map((store) => (
                        <GridItem key={store.id} >
                            <StoreItem title={store.title} image={store.image}>
                                {store.description}
                            </StoreItem>
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </>
    )

}
export default Store;
