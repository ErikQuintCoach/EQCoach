import { Box, Center, Text } from "@chakra-ui/react";
import { ActionButton } from "../ActionButton";

export function MainInfo() {
  return (
    <>
      <Box w={"100%"} h={"30vh"}>
        <Center>
          <Box w={"45%"} pt={"80px"}>
            <Text fontSize={"22px"} fontWeight={"semibold"}>
              Kommen dir die folgenden Punkte bekannt vor?
            </Text>
            <br />
            <Text fontSize={"18px"} fontWeight={"hairline"}>
              Du machst zwar anständige <b>Umsätze</b>, musst aber, wenn du <b>mehr Geld</b>
              verdienen möchtest,<br/> auch <b>mehr arbeiten</b>. Du hast kein effektives
              System und investierst deine wertvolle Zeit auch<br/> in Aufgaben, die
              dir überhaupt keinen Spaß machen.
            </Text>
            <br />
            <Text fontSize={"18px"} fontWeight={"hairline"}>
              In deiner Welt musst du, um dein Unternehmen weiter
              voranzubringen, auch mehr Energie aufwenden.<br/> Du landest im
              <b>Delirium der Demotivation</b>, weil du kaum Zeit für Dinge hast, die
              dir Spaß machen.<br/> Deine eigene <b>Gesundheit</b>, Familie und Freunde
              bleiben völlig auf der Strecke. Du bezahlst dem Staat<br/> am Ende des
              Jahres <b>48-51% Steuern</b>, weil dir das Wissen fehlt, deine Steuern
              völlig legal auf unter <b>25%</b><br/> zu reduzieren, ohne auswandern zu
              müssen.
            </Text>
            <br />
            <Text fontSize={"18px"} fontWeight={"hairline"}>
              Wenn du <b>mehr Zeit</b> für dich und deine Lieben haben möchtest und
              oben drein deine <b>Steuerlast</b> senken willst,<br/> lade ich dich auf ein
              unverbindliches Erstgespräch ein. Klicke dafür auf den Button 
              <b> „Termin vereinbaren“.</b>
            </Text>
            <br />
            <br />
            <Box ml={"-110px"} w={"200px"}>
            <ActionButton ml={100}/>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
}
