import { Box, Center, Text } from "@chakra-ui/react";
import { ActionButton } from "../ActionButton";

export function MainInfo() {
  return (
    <>
      <Box w={"100%"}>
        <Center>
          <Box maxW={1000} px={[5, 7, "100px", "100px"]}>
            <Text fontSize={"18px"}>
              Entdecken Sie die spannende Welt der Künstlichen Intelligenz (KI)
              und erfahren Sie, wie sie Ihren Arbeitsalltag revolutionieren
              kann.
              <br />
              <br />
              Unsere Kurse bieten Ihnen praxisorientierte Schulungen, in denen
              Sie die verschiedenen Anwendungsmöglichkeiten von Künstlicher
              Intelligenz kennenlernen. Tauchen Sie ein in faszinierende Themen
              wie maschinelles Lernen, automatisierte Entscheidungsfindung und
              intelligente Datenanalyse.
              <br />
              <br />
              Warum sollten Sie unsere Kurse wählen? Unsere Experten verfügen
              über langjährige Erfahrung in der KI-Branche und wissen, wie man
              komplexe Konzepte verständlich vermittelt. Mit interaktiven
              Lernmethoden und praxisnahen Beispielen sorgen wir dafür, dass Sie
              das Gelernte direkt in Ihrem Arbeitsumfeld anwenden können.
              <br />
              <br />
              Egal, ob Sie ein Unternehmen sind, das KI in seine
              Geschäftsprozesse integrieren möchte, oder eine Schule, die ihren
              Schülern einen Einblick in diese innovative Technologie bieten
              möchte - wir haben den passenden Kurs für Sie. Unsere
              maßgeschneiderten Schulungen werden Ihren spezifischen
              Anforderungen gerecht und helfen Ihnen, die Möglichkeiten von KI
              optimal auszuschöpfen.
              <br />
              <br />
              Machen Sie sich bereit, Ihre Arbeit auf ein neues Level zu heben.
              Kontaktieren Sie uns noch heute, um mehr über unsere Kurse zu
              erfahren und Ihre Reise in die Welt der Künstlichen Intelligenz zu
              beginnen.
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
}
