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
            Diese Schulung für Führungskräfte und Unternehmer bietet einen
            tiefgreifenden Einblick in die Welt der KI und insbesondere in die
            Nutzung von ChatGPT. Sie benötigen keinerlei IT-Vorkenntnisse. Wir
            bringen Ihnen bei, wie Sie ChatGPT effektiv in Ihrem Unternehmen
            einsetzen können, um Arbeitsabläufe zu optimieren und Ihre{" "}
            Geschäftsziele zu erreichen . Sie lernen auch, die Grenzen der KI zu
            erkennen und wie Sie sicherstellen können, dass sie ethisch und
            verantwortungsvoll eingesetzt wird.
            <br /> <br />
            <b>
              Bonus: Darüber hinaus unterstützt jede Buchung unserer Schulung
              das kostenlose Unterrichten an Schulen, was bedeutet, dass Sie
              nicht nur in Ihr Unternehmen, sondern auch in die nächste
              Generation von Führungskräften investieren. Ganz nach dem Motto Ai
              for everyone.
            </b>
            <br /> <br />
            Bei Fragen stehe ich ihnen gerne zur Verfügung.
            <br /> <br />
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
