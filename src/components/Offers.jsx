import {
  Box,
  Center,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AboutText } from "./main/AboutText";
import "./css/About.css";
import bild_eins from "../images/angebote-bild_eins.jpg";
import nachhilfe_schülerin_tafel from "../images/nachhilfe_schülerin_an_tafel.jpg";

import { useContaxt } from "../context/Context";
import { HeadLine } from "./HeadLine";
import { ActionButton } from "./ActionButton";

export function Offers({ ...rest }) {
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  const { textCollection } = useContaxt();

  return (
    <Box {...rest}>
      <HeadLine
        text={
          <Text>
            Unsere Angebote bei <b>ai for everyone</b>
          </Text>
        }
      />
      <AboutText
        w={1100}
        textWidth={["90vw", "90vw", "90vw", "500px"]}
        side={"left"}
        name={"ChatGPT: Führungskräfte-Seminar in KI"}
        image={
          <Image
            boxShadow={variant !== "base" && "17px 17px 0px 5px #000000"}
            src={bild_eins}
            w={variant !== "base" ? "350px" : "90vw"}
            borderRadius={10}
          />
        }
        text={
          <Text /* maxW={"50vw"} */>
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At <br /> <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At <br /> <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At <br /> <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            erat, sed diam voluptua. At <br /> <br />
            <ActionButton text={"Erstgespräch vereinbaren"} w={"100%"} />
          </Text>
        }
      />

      <AboutText
        w={1100}
        textWidth={["90vw", "90vw", "90vw", "500px"]}
        side={"right"}
        name={"ChatGPT für Lehrkräfte an Schulen"}
        image={
          <Image
            boxShadow={variant !== "base" && "17px 17px 0px 5px #000000"}
            src={nachhilfe_schülerin_tafel}
            w={variant !== "base" ? "350px" : "90vw"}
            borderRadius={10}
          />
        }
        text={
          <Text /* maxW={"50vw"} */>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At
            <br /> <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At
            <br /> <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At
            <br /> <br />
            <ActionButton text={"Erstgespräch vereinbaren"} w={"100%"} />
          </Text>
        }
      />
    </Box>
  );
}
