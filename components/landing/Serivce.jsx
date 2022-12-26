import { Container, Grid, GridItem } from "@chakra-ui/react";
import ServiceItem from "./ServiceItem";
import { FaArchive } from "react-icons/fa";

export default function Service() {
    return (
        <div>
            <Container
                maxW={"container.xl"}
                // bgColor={"mywood.main"}
                // padding={"8"}
                borderRadius={"lg"}
            >
                <Grid
                    templateColumns={{
                        base: "repeat(2, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    }}
                    gap={"4"}
                >
                    <GridItem>
                        <ServiceItem
                            title="Beli Bahan Bangunan"
                            icon={<FaArchive />}
                        >
                            Dapat membeli bahan bangunan dengan mudah dan cepat
                        </ServiceItem>
                    </GridItem>
                    <GridItem>
                        <ServiceItem
                            title="Panggil Professional"
                            icon={<FaArchive />}
                        >
                            Dapat memanggil professional untuk membantu
                            pekerjaan anda
                        </ServiceItem>
                    </GridItem>
                    <GridItem>
                        <ServiceItem title="Cepat" icon={<FaArchive />}>
                            Dapat membeli bahan bangunan dengan mudah dan cepat
                        </ServiceItem>
                    </GridItem>
                </Grid>
            </Container>
        </div>
    );
}
