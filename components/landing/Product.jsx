import {Container, Grid, GridItem, Heading} from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import ProductImage from '../../public/product.png'

export default function Product() {
    return (
        <div>
            <Container maxW={"container.xl"} mt={10}>
                <Heading my={10}>Cari Apa yang kamu butuhkan !</Heading>
                <Grid templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)"
                }} gap={"4"}>
                    <GridItem>
                        <ProductItem title={"Project A"} image={ProductImage} price={"1000"} info={"ini info lebih lanjut"}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ProductItem>
                    </GridItem>
                    <GridItem>
                        <ProductItem title={"Project A"} image={ProductImage} price={"1000"} info={"ini info lebih lanjut"}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ProductItem>
                    </GridItem>
                    <GridItem>
                        <ProductItem title={"Project A"} image={ProductImage} price={"1000"} info={"ini info lebih lanjut"}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ProductItem>
                    </GridItem>
                    <GridItem>
                        <ProductItem title={"Project A"} image={ProductImage} price={"1000"} info={"ini info lebih lanjut"}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ProductItem>
                    </GridItem>
                </Grid>
            </Container>
        </div>
    );
}