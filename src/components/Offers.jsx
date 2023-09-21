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
import { ShowStudyContent } from "./ShowStudyContent";

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
            Bei Fragen stehe ich Ihnen gerne zur Verfügung.
            <br /> <br />
            <ActionButton text={"Erstgespräch vereinbaren"} w={"100%"} />
          </Text>
        }
      />
      {/*  <ShowStudyContent pt={7} w={1100} /> */}

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
            <b>Zielgruppe: Lehrkräfte aller Fachbereiche ab der 5ten Klasse.</b>
            <br />
            <b>Dauer: 90 Minuten</b>
            <br /> <br />
            Diese kostenlose Schulung ist unser Beitrag, um
            Bildungseinrichtungen in der digitalen Ära zu unterstützen. Sie
            richtet sich speziell an Lehrkräfte, die ihre Kenntnisse in KI
            erweitern und ihren Schülern eine fundierte, zukunftsorientierte
            Bildung ermöglichen möchten. Bitte beachten Sie, dass aufgrund der
            hohen Nachfrage eine Warteliste besteht. Durch die Buchungen von
            Unternehmen für unsere bezahlten Schulungen können wir diese
            kostenlosen Schulungen für Schulen ermöglichen. Kein Vorwissen
            erforderlich. Wir freuen uns darauf, Sie auf dieser spannenden Reise
            zu begleiten.
            <br /> <br />
            <b>Kompetenzen, die Sie erwerben:</b>
            <br />
            - Verständnis für KI-Grundlagen und speziell ChatGPT <br />-
            Erkennung von Möglichkeiten und Grenzen von ChatGPT im Schulalltag{" "}
            <br />- Entwicklung effektiver Prompts für die Interaktion mit
            ChatGPT <br />- Anwendung von ChatGPT in praktischen
            Bildungsszenarien <br />- Einhaltung von Best Practices für den
            Einsatz von ChatGPT im Unterricht <br />- Bewusstsein für ethische
            und datenschutzrechtliche Aspekte beim Einsatz von KI in der
            Bildung."
            <br /> <br />
            <b>
              Vorrausetzung: mindesten 8 interessierte Lehrkräfte und Sitzt in
              Schleswig Holstein
            </b>
            <ActionButton text={"Erstgespräch vereinbaren"} w={"100%"} />
          </Text>
        }
      />
    </Box>
  );
}
