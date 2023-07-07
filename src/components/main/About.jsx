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
import richard from "../../images/richard.webp";
import gerrit from "../../images/gerrit.webp";

import { useContaxt } from "../../context/Context";
import { HeadLine } from "../HeadLine";

export function About({...rest}) {
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (

      <Box {...rest}>
        <HeadLine
          text={
            <Text>
              Die Gesichter hinter <b>JD IT Consulting</b>
            </Text>
          }
        />
        <AboutText
          w={1100}
          textWidth={["90vw", "90vw", "90vw", "500px"]}
          side={"left"}
          name={"Richard Dahms"}
          image={
            <Image
              boxShadow={variant !== "base" && "17px 17px 0px 5px #000000"}
              src={richard}
              w={variant !== "base" ? "350px" : "90vw"}
              borderRadius={10}
            />
          }
          text={
            <Text /* maxW={"50vw"} */>
              Mit mehr als 5 Jahren Berufserfahrung in der IT und Beratung habe
              ich erkannt, wie wichtig die Unterstützung im Bereich der
              Digitalisierung für heutige Unternehmen ist.
              <br /> <br />
              Mit der Gründung von JD IT Consulting möchte ich mein in den
              letzten Jahren erworbenes Wissen mit unseren Kunden teilen, um
              effizienter und gleichzeitig entspannter zu arbeiten.
              <br /> <br />
              Mit mehr als 5 Jahren Berufserfahrung in der IT und Beratung habe
              ich erkannt, wie wichtig die Unterstützung im Bereich der
              Digitalisierung für heutige Unternehmen ist.
              <br /> <br />
              Mit der Gründung von JD IT Consulting möchte ich mein in den
              letzten Jahren erworbenes Wissen mit unseren Kunden teilen, um
              effizienter und gleichzeitig entspannter zu arbeiten.
            </Text>
          }
        />

        <AboutText
          w={1100}
          textWidth={["90vw", "90vw", "90vw", "500px"]}
          side={"right"}
          name={"Gerrit Jürgensen"}
          image={
            <Image
              boxShadow={variant !== "base" && "17px 17px 0px 5px #000000"}
              src={gerrit}
              w={variant !== "base" ? "350px" : "90vw"}
              borderRadius={10}
            />
          }
          text={
            <Text /* maxW={"50vw"} */>
              Mit mehr als 4 Jahren Erfahrung im Produktmanagement von
              IT-Produkten und Kundenberatung wurde mir klar, dass viele
              Unternehmen Optimierungs- und Digitalisierungsmöglichkeiten bei
              weitem nicht ausreizen.
              <br /> <br />
              Diese Möglichkeiten aufzeigen ist mein Antrieb und war die
              treibende Kraft mit meinem Partner die JD IT Consulting zu
              gründen.
              <br /> <br />
              Mit mehr als 4 Jahren Erfahrung im Produktmanagement von
              IT-Produkten und Kundenberatung wurde mir klar, dass viele
              Unternehmen Optimierungs- und Digitalisierungsmöglichkeiten bei
              weitem nicht ausreizen.
              <br /> <br />
              Diese Möglichkeiten aufzeigen ist mein Antrieb und war die
              treibende Kraft mit meinem Partner die JD IT Consulting zu
              gründen.
            </Text>
          }
        />
      </Box>

  );
}
