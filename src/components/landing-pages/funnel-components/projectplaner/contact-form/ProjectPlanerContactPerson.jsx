import { Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import contactPerson from "../../../../../images/webdesign_vertriebler_david_kreis.webp";

export function ProjectPlanerContactPerson() {
  return (
    <VStack px={"5%"} pt={10}>
      <Box textAlign={"center"}>
        <Text>Dein Ansprechpartner</Text>
        <Text fontWeight={"black"} fontSize={22}>
          Hi, ich bin David 👋
        </Text>
      </Box>
      <Image src={contactPerson} w={"60%"} maxW={450} />
      <Text
        textAlign={"center"}
        fontWeight={"semibold"}
        fontSize={16}
        maxW={450}
      >
        Ich bin David, dein Ansprechpartner. Im nächsten Schritt sprechen wir
        beide einmal ganz kurz am Telefon und lernen uns kennen. Ich melde mich
        in den nächsten 24 Stunden bei dir, ganz unverbindlich.
      </Text>
      <VStack fontWeight={"medium"}>
        <Text>🙍‍♂️ David von zur Mühlen</Text>
        <Text>
          <a href="tel:+4915758308209">📞 +49 1575 8308209</a>
        </Text>
      </VStack>
    </VStack>
  );
}
