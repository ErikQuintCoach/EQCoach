import { Center, useBreakpointValue } from "@chakra-ui/react";
import { ActionButton } from "./ActionButton";

export function CallToAction() {
  return (
    <Center>
      <ActionButton
        text={"kostenloses Kennenlerngespräch"}
        fontSize={["14px", "16px", "16px", "16px"]}
      />
    </Center>
  );
}
