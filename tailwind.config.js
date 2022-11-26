/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                myorange: {
                    50: "#fad9c9",
                    100: "#f5b79a",
                    200: "#f3a783",
                    300: "#f1976c",
                    400: "#ef8655",
                    500: "#EA6526",
                    600: "#c94e13",
                    700: "#b24511",
                    800: "#9b3c0f",
                    900: "#6c2a0b",
                },
                myblack: {
                    50: "#5a6295",
                    100: "#474d75",
                    200: "#3d4366",
                    300: "#343856",
                    400: "#2a2e46",
                    500: "#171926",
                    600: "#040406",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                },
                mywood: {
                    50: "#edcdaf",
                    100: "#e4b286",
                    200: "#dfa571",
                    300: "#da985c",
                    400: "#d68b47",
                    500: "#BF712B",
                    600: "#955822",
                    700: "#814c1d",
                    800: "#6c4018",
                    900: "#42270f",
                },
                mygray: {
                    50: "#ffffff",
                    100: "#ffffff",
                    200: "#ffffff",
                    300: "#ffffff",
                    400: "#ffffff",
                    500: "#F0F1F2",
                    600: "#d5d7da",
                    700: "#c7cbce",
                    800: "#b9bec3",
                    900: "#9ea4ab",
                },
            }
        },
    },
    plugins: [],
};
