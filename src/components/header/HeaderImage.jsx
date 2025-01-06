import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import header from "../../images/header.webp";
import headerBackground from "../../images/header.jpg";

export function HeaderImage() {
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Box 
      position={"relative"} // Von "absolute" zu "relative" geändert
      mt={"10px"}
      overflow="hidden"
      height={["50vh", "60vh", "70vh", "80vh"]} // Dynamische Höhe für verschiedene Breakpoints
      w="100%"
    >
      {/* Hintergrundbild */}
      <Image 
        src={headerBackground} 
        w="100%" 
        objectFit="cover"
        height="100%" // Passt sich an die Box-Höhe an
      />

      {/* Vordergrundbild */}
      <Image 
        src={header} 
        w="100%" 
        position={"absolute"} 
        bottom={0}
        objectFit="cover"
        height={["30%", "40%", "50%", "60%"]} // Dynamische Höhe für verschiedene Breakpoints
      />
    </Box>
  );
}

