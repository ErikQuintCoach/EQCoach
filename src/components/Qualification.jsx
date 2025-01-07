import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  Divider,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { HeadLine } from "./HeadLine";
import { useContaxt } from "../context/Context";

export function Qualification() {
  const { isSmartphone } = useContaxt();

  return (
    <Box id="qualification" w="100%">
      <Center>
        <Stack spacing={6} maxW={1000} px={["2.5vw", 7, "100px", "100px"]}>
          {/* Überschrift */}
          <HeadLine
            text={
              <Text>
                <b>Qualifikation und Berufserfahrung</b>
              </Text>
            }
          />
          {/* Inhalt: Nebeneinander */}
          <Stack
            direction={isSmartphone ? "column" : "row"}
            align="flex-start"
            spacing={10}
            w="100%"
          >
            {/* Qualifikationen */}
            <Stack flex="1" spacing={5}>
              <Heading as="h3" size="md">
                Qualifikationen
              </Heading>
              <Divider />
              <Box>
                <Text>
                  <b>Bachelor of Science in Psychologie</b>
                </Text>
                <Text>März 2025 (voraussichtlicher Durchschnitt: 1,5)</Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  <b>Life Coach (IHK und Falkenberg)</b>
                </Text>
                <Text>Zertifizierung 2024, Abschlussnote: 1,5</Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  <b>Betriebswirt für Handelsmanagement</b>
                </Text>
                <Text>
                  Fachbereich Wirtschaft, Abschlussnote: 2,2 (2018 – 2021)
                </Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  <b>Grundausbildung Hypnose</b>
                </Text>
                <Text>2017</Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  <b>Einzelhandelskaufmann</b>
                </Text>
                <Text>Ausbildung bei IKEA, 2015 – 2018</Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  <b>Kaufmännischer Assistent</b>
                </Text>
                <Text>2014 – 2015 (abgebrochen)</Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  <b>Realschulabschluss</b>
                </Text>
                <Text>2014</Text>
              </Box>
              <Divider />
              <Box>
                <Text fontStyle="italic">
                  Du siehst, mein Weg ist krum und schief😉
                </Text>
              </Box>
            </Stack>

            {/* Berufserfahrung */}
            <Stack flex="1" spacing={5}>
              <Heading as="h3" size="md">
                Berufserfahrung
              </Heading>
              <Divider />
              <Box>
                <Text>Coach</Text>
                <Text> Oktober 2024</Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  {" "}
                  fast eine Dekade Verkaufserfahrung für große Firmen wie AHPK,
                  Swarovski und IKEA.
                </Text>
              </Box>
              <Divider />
              <Box>
                <Text>Lehrerfahrung im Bereich KI-Schulungen.</Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  Gründung eines KI-Schulungsunternehmens (2023) und Schließung
                  dieses (2024).
                </Text>
              </Box>
              <Divider />
              <Box>
                <Text>
                  3 Jahre Nachhilfelehrer im Fachbereich Englisch und
                  Mathematik.
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
}
