import { Center, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../../components/landing/ProductItem";
const Store = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const res = axios
            .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/product`)
            .then((res) => setProducts(res.data.data));

        console.log(products);
    }, []);
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
                    <Heading>Cari Product</Heading>
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
                    {products.map((product) => (
                        <GridItem key={product.id}>
                            <ProductItem
                                title={product.brand}
                                image={product.image}
                                price={product.price}
                                storeName={product.store.name}
                                info={product.description}
                                primary={product.id}
                            >
                                {}
                            </ProductItem>
                        </GridItem>
                    ))}
                </Grid>
            </Container>
        </>
    );
};
export default Store;
