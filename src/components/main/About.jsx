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
import { AboutText } from "./AboutText";
import "../css/About.css";
import erik_quint from "../../images/erik_quint.jpg";

import { useContaxt } from "../../context/Context";
import { HeadLine } from "../HeadLine";

export function About({ ...rest }) {
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
            Meine <b>Mission</b> mit ai for everyone
          </Text>
        }
      />
      <AboutText
        w={1100}
        textWidth={["90vw", "90vw", "90vw", "500px"]}
        side={"right"}
        image={
          <Image
            boxShadow={variant !== "base" && "17px 17px 0px 5px #000000"}
            src={erik_quint}
            w={variant !== "base" ? "350px" : "90vw"}
            borderRadius={10}
          />
        }
        text={
          <Text /* maxW={"50vw"} */>
            Als passionierter Schnelllerner und Wissensvermittler habe ich mein
            Leben der Förderung des Lernens gewidmet. Mit einem fundierten
            Hintergrund in Betriebswirtschaft, und meinem aktuellen Studium der
            Psychologie mache ich IT-Themen für Nicht-ITler verständlich und
            zugänglich. <br /> <br />
            Mein Ziel ist es, Menschen und Unternehmen dabei zu helfen, in der
            KI-Ära zu glänzen. <b>Niemand soll zurück bleiben.</b> <br /> <br />
            Ein zentraler Bestandteil meiner Mission ist es, Bildung
            zugänglicher zu machen.
            <b>
              Mit jeder Unternehmensbuchung wird eine kostenlose Schulung für
              Schulen finanziert, wodurch sie dazu beitragen, die Welt zu einem
              besseren Ort zu machen.
            </b>
          </Text>
        }
      />
    </Box>
  );
}
