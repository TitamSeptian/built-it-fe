import { Container, Grid, GridItem } from "@chakra-ui/react";
import ServiceItem from "./ServiceItem";
import {FaArchive} from "react-icons/fa";

export default function Service() {
    return (
        <div>
            <Container
                maxW={"container.xl"}
                // bgColor={"mywood.main"}
                // padding={"8"}
                borderRadius={"lg"}
            >
                <Grid templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)"
                }} gap={"4"}>
                    <GridItem>
                        <ServiceItem title="Servce 1" icon={<FaArchive/>}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ServiceItem>
                    </GridItem>
                    <GridItem>
                        <ServiceItem title="Servce 1" icon={<FaArchive/>}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ServiceItem>
                    </GridItem>
                    <GridItem>
                        <ServiceItem title="Servce 1" icon={<FaArchive/>}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ServiceItem>
                    </GridItem>
                    <GridItem>
                        <ServiceItem title="Servce 1" icon={<FaArchive/>}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ServiceItem>
                    </GridItem>
                    <GridItem>
                        <ServiceItem title="Servce 1" icon={<FaArchive/>}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ServiceItem>
                    </GridItem>
                    <GridItem>
                        <ServiceItem title="Servce 1" icon={<FaArchive/>}>
                            Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam Ayam
                        </ServiceItem>
                    </GridItem>
                </Grid>
            </Container>
        </div>
    );
}
