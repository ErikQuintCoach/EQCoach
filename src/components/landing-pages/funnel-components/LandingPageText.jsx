import { Text } from "@chakra-ui/react";

export function LandingPageText({ text, ...rest }) {
  return (
    <Text w={"90%"} fontWeight={"bold"} textAlign={"center"} {...rest}>
      {text}
    </Text>
  );
}
