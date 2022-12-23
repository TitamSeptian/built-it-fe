import { Center, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
// import axios from "axios";
import ProfessionalItem from "../../components/landing/ProfessionalItem";
const Store = () => {
    const [professionals, setProfessionals] = useState([
        {
            id: 1,
            brand: "Mas Cio",
            image: "https://via.placeholder.com/150",
            skill: "Civil Engineering",
        },
        {
            id: 2,
            brand: "Mas Cio",
            image: "https://via.placeholder.com/150",
            skill: "Civil Engineering",
        },
        {
            id: 3,
            brand: "Mas Cio",
            image: "https://via.placeholder.com/150",
            skill: "Civil Engineering",
        },
        {
            id: 4,
            brand: "Mas Cio",
            image: "https://via.placeholder.com/150",
            skill: "Civil Engineering",
        },
    ]);
    // useEffect(() => {
    // const res = axios
    //     .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/product`)
    //     .then((res) => setProducts(res.data.data));

    // console.log(products);
    // }, []);
    return (
        <>
            <Container
                maxW="container.xl"
                my={{
                    base: 4,
                    md: 8,
                    lg: 12,
                }}
            >
                <Center
                    my={{
                        base: 4,
                        md: 8,
                        lg: 12,
                    }}
                >
                    <Heading>Cari Professional</Heading>
                </Center>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(4, 1fr)",
                    }}
                    gap={"6"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    placeItems={"center"}
                >
                    {professionals.map((pro) => (
                        <GridItem key={pro.id}>
                            <ProfessionalItem
                                title={pro.brand}
                                image={pro.image}
                                skill={pro.skill}
                                primary={pro.id}
                            >
                                {}
                            </ProfessionalItem>
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </>
    );
};
export default Store;
