import { Box, Center } from "@chakra-ui/react";
import { AutoTextSize } from "auto-text-size";

export function LandingPageHeading({ text, ...rest }) {
  return (
    <Box w={"90%"} fontWeight={"bold"} {...rest}>
      <AutoTextSize>{text}</AutoTextSize>
    </Box>
  );
}
