import { Center, useBreakpointValue } from "@chakra-ui/react";
import { useContaxt } from "../context/Context";
import { ActionButton } from "./ActionButton";

export function CallToAction() {
  const { spacingTop } = useContaxt();
  const text = useBreakpointValue({
    base: "Termin vereinbaren",
    sm: "Jetzt Termin vereinbaren",
    md: "Termin vereinbaren",
  });
  return (
    <Center>
      <ActionButton text={text} />
    </Center>
  );
}
