import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ActionButton } from "./ActionButton";
import { HeadLine } from "./HeadLine";
import { AboutText } from "./main/AboutText";
import bild_eins from "../images/angebote-bild_eins.webp";

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
                    <li>Ich frage mich: Was will ich eigentlich wirklich?</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Deine Lösung - Wie Create Your Path dir hilft:
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={2}>
                  <ul style={{ marginLeft: "1rem", listStyleType: "disc" }}>
                    <li>
                      <strong>Klarheit:</strong> Ich sehe, was ich kann, weiß,
                      was ich will, und achte, was mir wichtig ist.
                    </li>
                    <li>
                      <strong>Selbstvertrauen:</strong> Ich fühle mich wohl. Mit
                      mir, meinen Entscheidungen und meinem Weg.
                    </li>
                    <li>
                      <strong>Struktur:</strong> Ich gehe die richtigen
                      Schritte.
                    </li>
                    <li>
                      <strong>Nachhaltigkeit:</strong> Meine Vision ist Teil
                      meines Alltags!
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
                    <b>3 Monate Betreuung + Bonus nach 6 Monaten</b>
                  </Text>
                  <b>Du findest heraus, wie dein Traumleben</b>
                  <ul style={{ marginLeft: "1rem", listStyleType: "disc" }}>
                    <li>aussieht</li>
                    <li>wie es sich anfühlt</li>
                    <li>wie es Realität wird</li>
                    <li>du lebst selbstbewusst, klar</li>
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
                    <a href="https://akademie-individualpsychologie.ch/psychologische-beratung/">
                      hier
                    </a>
                    .
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
                    Ich begleite dich und unterstütze dich mit 111%! Ich kann
                    den Weg jedoch nicht für dich gehen.
                    <br />
                    <br />
                    Du fühlst dich angesprochen?
                    <br />
                    Dann Let's go!
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
