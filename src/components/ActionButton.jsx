import { Center } from "@chakra-ui/react";
import { AutoTextSize } from "auto-text-size";
import ReactGA from "react-ga4";
import { useContaxt } from "../context/Context";
import "./css/buttonHover.css";

export function ActionButton(props) {
  const { color, cookies } = useContaxt();

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
        onClick={() => {
          if (cookies) {
            ReactGA.event({
              category: "Call to Action Klick in ActionButton",
              action: "Action Button Click",
              label: `Call to Action Klick in ActionButton`,
            });
          }
        }}
        {...rest}
      >
        <AutoTextSize maxFontSizePx={16}>{text}</AutoTextSize>
      </Center>
    </a>
  );
}
