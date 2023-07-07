import { HStack, Text, Spacer } from "@chakra-ui/react";

export function Footer() {
  return (
    <HStack w={"100%"} pt={10} px={10}>
      <Spacer />
      <HStack spacing={8} fontSize={18}>
        <Text cursor={"pointer"}>
          <a href={"/datenschutz"} target="_blank">
            Datenschutz
          </a>
        </Text>
        <Text cursor={"pointer"}>
          <a href={"/impressum"} target="_blank">
            Impressum
          </a>
        </Text>
      </HStack>
    </HStack>
  );
}
