import { Stack, Text, Box, HStack, Heading } from "@chakra-ui/react";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";
import { useEffect } from "react";
import { useContaxt } from "../context/Context";

export function Imprint() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { color } = useContaxt();

  return (
    <>
      <Stack
        px={[5, 5, 5, 10]}
        pt={"100px"}
        pb={[10, 15, 20, 20]}
        fontWeight={"bold"}
        fontSize={20}
        textAlign="left"
      >
        <Heading as="h1" fontSize={35}>
          IMPRESSUM
        </Heading>
        <Box h={1} w={120} bgColor={color.mainColor} />
        <Text fontWeight={"extrabold"}>JD IT Consulting Gbr</Text>
        <Text>
          Lise-Meitner-Ring 30
          <br />
          D-23843 Bad Oldesloe
          <br />
          Germany
        </Text>
        <br />
        <HStack
          _hover={{ color: color.mainColor }}
          cursor={"pointer"}
          onClick={() => (window.location = "tel:01723287188")}
        >
          <ImMobile size={25} />
          <Text fontSize={20}>+ 49 (0) 0172 / 3287188 </Text>
        </HStack>
        <HStack
          _hover={{ color: color.mainColor }}
          cursor={"pointer"}
          onClick={() => (window.location = "mailto:info@jd-it-consulting.de")}
        >
          <AiOutlineMail size={25} />
          <Text>info@jd-it-consulting.de</Text>
        </HStack>
        <br />
        <Text>
          Vertretungsberechtigt:
          <br />
          Richard Johann Constantin Dahms
          <br />
          Gerrit Jürgensen
        </Text>
        <br />
        <Text>
          {/* Amtsgericht Kiel - HRB 3988 */}
          {/* <br />
          USt - IdNr.: DE XXX XX XX XX <br />
          Steuer-Nr. XX/XXX/XX/XXX Finanzamt Kiel-Süd */}
        </Text>
        <br />
        <br />
        <Text fontSize={[25, 25, 30, 35]}>HAFTUNGSHINWEIS</Text>
        <Box h={1} w={200} bgColor={color.mainColor} />
        <br />
        <Text>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </Text>
        <br />
        <br />
        <Text fontSize={[20, 25, 30, 35]}>
          GESTALTUNG, KONZEPTION, TECHNISCHE UMSETZUNG
        </Text>
        <Box h={1} w={650} maxWidth={"70vw"} bgColor={color.mainColor} />
        <br />
        <Text>
          WebWerk am Meer <br />
          Werbe- und Marketingagentur
          <br />
          <br />
          <HStack
            cursor="pointer"
            onClick={() => (window.location = "https://webwerk-am-meer.de/")}
          >
            <MdWebAsset size={40} />
            <a>www.webwerk-am-meer.de</a>
          </HStack>
        </Text>
      </Stack>
    </>
  );
}
