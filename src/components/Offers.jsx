import {
  Box,
  Center,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";
import { AboutText } from "./main/AboutText";
import { HeadLine } from "./HeadLine";
import { ActionButton } from "./ActionButton";

import bild_eins from "../images/angebote-bild_eins.jpg";
import nachhilfe_schülerin_tafel from "../images/nachhilfe_schülerin_an_tafel.jpg";

export function Offers({ ...rest }) {
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
          <Text fontSize={["32px", "38px", "50px", "50px"]} fontWeight={"bold"}>
            Deine Coaching Optionen
          </Text>
        }
      />

      <AboutText
        w={1100}
        textWidth={["95vw", "90vw", "90vw", "500px"]}
        side={"left"}
        name={"Create Your Path"}
        image={
          <Image
            boxShadow={variant !== "base" && "17px 17px 0px 5px #000000"}
            src={bild_eins}
            w={variant !== "base" ? "350px" : "95vw"}
            borderRadius={10}
          />
        }
        text={
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Dein Weg in ein erfülltes Leben
            </Heading>

            <Accordion allowToggle defaultIndex={[0]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Du stehst vor diesen Herrausforderungen:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={2}>
                  <ul style={{ marginLeft: "1rem", listStyleType: "disc" }}>
                    <li>
                      Ich habe Angst, in 32 Jahren aufzuwachen, und alles ist
                      gleich – nichts hat sich verändert, <b>ich</b> habe nichts
                      verändert.
                    </li>
                    <li>
                      Ich sehe, wie andere ihren Weg gehen, und frage mich:
                      Warum fühlt sich meiner so falsch an?
                    </li>
                    <li>
                      Ich habe keine ehrliche Antwort auf die Frage: Was ist
                      meine Lebensvision?
                    </li>
                    <li>Ich nutze meine Stärken nicht voll aus.</li>
                    <li>Unsicherheiten und Selbstzweifel stehen mir im Weg.</li>
                    <li>
                      Ich frage mich: Was kann ich eigentlich wirklich? Was will
                      ich eigentlich wirklich?
                    </li>
                    <li>
                      Alle scheinen halbwegs zufrieden zu sein, aber ich spüre,
                      dass da mehr sein muss. Nur weiß ich nicht, wie ich es
                      finde.
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Die Lösung - Wie Create Your Path dir hilft:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={2}>
                  <ul style={{ marginLeft: "1rem", listStyleType: "disc" }}>
                    <li>
                      <strong>Klarheit:</strong> Ich sehe was ich kann, weiß ich
                      will und achte was mir wichtig ist.
                    </li>
                    <li>
                      <strong>Selbstvertrauen:</strong> Ich fühle, dass ich bin
                      auf dem richtigen Weg.
                    </li>
                    <li>
                      <strong>Struktur:</strong> Ich weiß welche Schritte ich
                      nun gehe.
                    </li>
                    <li>
                      <strong>Nachhaltigkeit:</strong> Meine Vision ist endlich
                      teil meines Alltags!
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Ablauf und Umfang:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={2}>
                  <Text mb={1}>
                    <b>3 Monate Betreuung</b>
                  </Text>
                  <ul style={{ marginLeft: "1rem", listStyleType: "disc" }}>
                    <li>
                      <strong>Analyse und Reflexion:</strong> Gemeinsam
                      betrachten wir deine aktuelle Situation und klären dein
                      Anliegen (erste Sitzung: 120 Minuten).
                    </li>
                    <li>
                      <strong>Vision und Ziele:</strong> In den Sitzungen 2–6
                      (60–90 Minuten) entwickeln wir eine Vision, die dich
                      inspiriert, und setzen konkrete Ziele.
                    </li>
                    <li>
                      <strong>Planung und Umsetzung:</strong> Du nutzt
                      praktische Tools und Strategien und bleibst im Handeln.
                    </li>
                    <li>
                      <strong>Feedback und Anpassung:</strong> Durch regelmäßige
                      Check-ins bleibst du auf Kurs.
                    </li>
                    <li>
                      <strong>Konstanter Fortschritt:</strong> Transferaufgaben
                      ermöglichen nachhaltige Veränderung.
                    </li>
                    <li>
                      <strong>Abschlussplan:</strong> In der letzten Sitzung
                      reflektieren wir und erstellen deinen
                      Step-by-Step-Visionsplan.
                    </li>
                    <li>
                      <strong>+1 Sitzung:</strong> Nach drei Monaten schauen
                      wir, wie sich alles entwickelt hat.
                    </li>
                  </ul>
                  <Text mt={1}>
                    Betreuung von Montag bis Samstag über WhatsApp.{" "}
                    <span style={{ fontStyle: "italic" }}>
                      (Details im kostenlosen Kennlerngespräch.)
                    </span>
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Was ist Create Your Path nicht:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={2}>
                  <Text>
                    Es ist <strong>keine</strong> schnelle Fix-Lösung oder
                    Beratung, sondern ein Coaching-Programm, das auf deine
                    aktive Mitarbeit setzt. Den Unterschied zwischen Coaching
                    und Beratung findest du{" "}
                    <a href="/coaching-vs-beratung">hier</a>.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Was du mitbringen solltest:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={2}>
                  <ul style={{ marginLeft: "1rem", listStyleType: "disc" }}>
                    <li>Ernsthafter Wille, etwas zu verändern.</li>
                    <li>
                      Bewusstsein, dass Veränderung nicht von alleine passiert.
                    </li>
                    <li>
                      Bereitschaft, aktiv an deiner Transformation zu arbeiten.
                    </li>
                  </ul>
                  <Text mt={1}>
                    Ich begleite und unterstütze dich, aber den Weg musst du
                    selbst gehen.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Box mt={2}>
              <ActionButton
                text={"Kostenloses Erstgespräch vereinbaren"}
                w={"100%"}
              />
            </Box>
          </Box>
        }
      />
    </Box>
  );
}
