import { Center, useBreakpointValue } from "@chakra-ui/react";
import { useContaxt } from "../context/Context";
import { ActionButton } from "./ActionButton";

export function CallToAction() {
  const { spacingTop } = useContaxt();
  const text = useBreakpointValue({
    base: "Jetzt Termin vereinbaren",
    sm: "Jetzt Termin vereinbaren",
    md: "Jetzt unverbindlichen Termin vereinbaren",
  });
  return (
    <Center py={spacingTop}>
      <ActionButton text={text} />
    </Center>
  );
}
