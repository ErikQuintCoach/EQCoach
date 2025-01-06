import { Button, Center } from "@chakra-ui/react";
import { useContaxt } from "../context/Context";
import "./css/buttonHover.css";
import { AutoTextSize } from "auto-text-size";

export function ActionButton(props) {
  const { color } = useContaxt();

  const {
    link = "https://calendly.com/erik-quint/30min",
    text = "Kostenloses Kennlerngespräch",
    ...rest
  } = props;

  return (
    <a href={link} target="_blank">
      <Center
        padding={"16px"}
        fontWeight={"semibold"}
        letterSpacing={2.5}
        borderRadius={"50vh"}
        color={"white"}
        textTransform={"uppercase"}
        bg={color.mainColor}
        {...rest}
      >
        <AutoTextSize maxFontSizePx={16}>{text}</AutoTextSize>
      </Center>
    </a>
  );
}
