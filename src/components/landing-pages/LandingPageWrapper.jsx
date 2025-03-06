import { Box, VStack } from "@chakra-ui/react";
import { Footer } from "../Footer";

export function LandingPageWrapper({ children, ...rest }) {
  return (
    <Box h={"100%"} w={"100%"} className={"landing-page"}>
      <VStack spacing={0} {...rest}>
        {children}
      </VStack>
      <Footer />
    </Box>
  );
}
