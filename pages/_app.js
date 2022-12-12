import Head from "next/head";
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";
import theme from "../styles/theme/theme";
import theme2 from "../styles/theme";
// import {router} from "next/client";
import { useRouter } from "next/router";
import DashboardLayout from "../components/dashboard/Layout";
import MainLayout from "../components/landing/Layout";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const { pathname } = router;
    const TheDefault = () => {
        return (
            <>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <title>Build it</title>
                </Head>
                <NextNProgress  color="#EA6526" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            </>
        );
    };
    if (pathname.startsWith("/dashboard")) {
        return (
            <>
                <TheDefault />
                <ChakraProvider theme={theme}>
                    <DashboardLayout>
                        <Component {...pageProps} />
                    </DashboardLayout>
                </ChakraProvider>
            </>
        );
    } else {
        return (
            <>
                <TheDefault />
                <ChakraProvider theme={theme}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </ChakraProvider>
            </>
        );
    }
}

export default MyApp;
