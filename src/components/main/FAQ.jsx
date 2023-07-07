import {
  Box,
  Center,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";

export function FAQ() {
  const { color } = useContaxt();

  const FAQS = [
    {
      title: "Wie viel kostet eine Beratung?",
      text: "Mir ist es leider nicht möglich, dir darauf eine pauschale Antwort zu geben. Es kommt darauf an, wo du aktuell stehst und wo du hinmöchtest. Mein Team und ich können dich dahingehend im Rahmen von zwei bis zwölf Monaten begleiten.",
    },
    {
      title: "Gibt es eine Erfolgsgarantie?",
      text: "Wir können dir das Werkzeug für den Erfolg in die Hand geben, die Umsetzung ist jedoch in deiner Verantwortung. Wer grundsätzlich 1:1 umsetzt, ist allerdings auf einem sehr guten Weg. Der Erfolg unserer 100+ Kunden spricht für sich. Die Anleitungen und Tipps, die ich gebe, stammen allesamt aus eigener Erfahrung.",
    },
    {
      title: "Wie läuft die Zusammenarbeit konkret ab?",
      text: "Der Zeitrahmen unserer Pakete beläuft sich zwischen zwei und zwölf Monaten. Ich möchte jedoch anmerken, dass die Zusammenarbeit sehr individuell ist. Wir sehen uns zunächst deine „Ist- und Wunschsituation“ an. Daraufhin erarbeiten wir zusammen einen Fahrtplan, bei dem du 1:1 To-Do’s bekommst. Die Coaches sind bei Fragen zusätzlich telefonisch für dich erreichbar. Wir erreichen deine Ziele also gemeinsam.",
    },
    {
      title: "Was sind die Hauptprobleme deiner bestehenden Kunden?",
      text: "Meiner Meinung nach ist die größte Herausforderung meiner Kunden, ihr Unternehmen ab einem gewissen Punkt noch weiter voranzubringen. Grobe Fehler in der Mitarbeiter*innenführung und der Unternehmensstruktur führen dazu, dass mehr Gewinn und gleichzeitig mehr Zeit für sich selbst zu haben, fast unmöglich scheinen.",
    },
  ];

  return (
    <>
      <Box w={"100%"} mt={"300px"} mb={"100px"}>
        <Center w={"100%"}>
          <Text fontSize={"45px"}>Häufig gestellte Fragen (FAQ)</Text>
        </Center>
        <Center w={"100%"}>
          <Accordion allowToggle mt={"50px"} mb={"50px"}>
            {FAQS.map((faq, i) => {
              return (
                <>
                  <AccordionItem w={"1000px"} mb={"20px"}>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize={"16px"}
                          fontWeight={"semibold"}
                        >
                          {faq.title}
                        </Box>
                        <AccordionIcon color={color.mainColor} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{faq.text}</AccordionPanel>
                  </AccordionItem>
                </>
              );
            })}
          </Accordion>
        </Center>
      </Box>
    </>
  );
}
