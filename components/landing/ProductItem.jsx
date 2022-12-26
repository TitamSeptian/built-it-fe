import {
    Button,
    Heading,
    Text,
    VStack,
    Box,
    HStack,
    Avatar,
    Image,
    IconButton,
} from "@chakra-ui/react";
import ProductImage from "../../public/product.png";
import toRupiah from "@develoka/angka-rupiah-js";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import Cookies from "js-cookie";

export default function ProductItem({
    image,
    title,
    price,
    info,
    storeName,
    primary,
}) {
    const token = Cookies.get("access_token");
    // image = ProductImage;
    return (
        <div>
            <VStack
                align={"left"}
                borderRadius={"lg"}
                padding={{
                    base: "4",
                    md: "8",
                }}
                gap={"4"}
                bgColor={"mygray.main"}
                color={"gray.800"}
                justifyContent={"center"}
            >
                <Box borderRadius={"lg"} overflow={"hidden"}>
                    <Image
                        src={
                            image ??
                            "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                        alt={title}
                    />
                </Box>
                <Heading
                    size={{
                        base: "md",
                        md: "lg",
                    }}
                    fontWeight={"medium"}
                >
                    {title}
                    <Text fontWeight={"normal"} fontSize={"xs"}>
                        {info}
                    </Text>
                </Heading>
                <Text fontWeight={"semibold"}>
                    {toRupiah(price, { dot: ".", floatingPoint: 0 })}
                </Text>
                <HStack>
                    <Avatar
                        size={"xs"}
                        src={
                            image ??
                            "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                    />
                    <Text fontSize={"xs"}>{storeName}</Text>
                </HStack>
                <HStack>
                    <Link href={"/product/" + primary}>
                        <Button colorScheme={"myorange"} variant={"solid"}>
                            Lihat
                        </Button>
                    </Link>
                    {/* if no token dont show cart button */}
                    {!token ? (
                        <></>
                    ) : (
                        <IconButton
                            colorScheme={"mywood"}
                            variant={"outline"}
                            aria-label={"Add to cart"}
                            icon={<BiCart />}
                        />
                    )}
                </HStack>
            </VStack>
        </div>
    );
}
