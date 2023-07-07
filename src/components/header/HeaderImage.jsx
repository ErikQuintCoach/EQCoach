import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import header from "../../images/header.webp";
import headerBackground from "../../images/headerBackground.jpg";

export function HeaderImage() {
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  return (
    <Box position={"absolute"} mt={"50px"}>
      <Image
        src={headerBackground}
        w={"100vw"} /*  position={"absolute"} top={0} */
      />
      <Image src={header} w={"100vw"} position={"absolute"} bottom={0} />
    </Box>
  );
}
