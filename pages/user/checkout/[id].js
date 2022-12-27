import { Button, Heading, useToast, VStack } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import CartItem from "../../../components/user/CartItem";
import axios from "axios";
export default function Checkout() {
    const toast = useToast();
    const token = Cookies.get("access_token");
    const [data, setData] = useState([]);
    const [carts, setCarts] = useState([]);
    const [products, setProducts] = useState([]);
    const [store, setStore] = useState([]);
    useEffect(() => {
        const res = axios
            .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setData(res.data.data);
                setCarts(res.data.data.carts);
                setProducts(res.data.data.carts[0].products);
                setStore(res.data.data.carts[0].store);
            });

        console.log(data);
        console.log(carts);
        console.log(products);
        console.log(store);
    }, []);
    return (
        <>
            <VStack
                bg={"white"}
                borderRadius={"lg"}
                py={"4"}
                mt={2}
                px={"4"}
                alignItems={"start"}
                rowGap={"6"}
                columnGap={"10"}
            >
                <Heading size={"md"}>Checkout</Heading>
                {products.map((cx) => (
                    <div key={cx.id}>
                        <Heading size={"xs"}>{store.name}</Heading>
                        <CartItem
                            key={cx.id}
                            title={cx.brand}
                            img={cx.images[0].image_url}
                            price={cx.price}
                            qty={1}
                        />
                    </div>
                ))}
                <Button
                    alignSelf={"end"}
                    size="sm"
                    colorScheme={"myorange"}
                    onClick={() => {
                        toast({
                            title: "Midtrans belum terhubung",
                            description: "Silahka tunggu konfirmasi admin",
                            status: "warning",
                            duration: 9000,
                            isClosable: true,
                        });
                    }}
                >
                    Bayar
                </Button>
            </VStack>
        </>
    );
}
