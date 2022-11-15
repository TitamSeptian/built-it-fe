import { Box } from "@chakra-ui/react";
import Image from "next/image";
import logo48 from "../../public/logo/logo48x48.png";

export default function Logo(pick = "48") {
    const logo = logo48;
    switch (pick) {
        case "48":
            logo = logo48;
            break;
        default:
            logo = logo48;
            break;
    }
    return (
        <Box>
            <Image src={logo} alt="Logo" />
        </Box>
    );
}
