import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Icon,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";
import headerBackgroundDesktop from "./images/erik_quint_2.webp";
import headerBackgroundMobile from "./images/erik_quint.webp";

export function PlaceholderApp() {
  const bg = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const descColor = useColorModeValue("gray.600", "gray.300");
  const phoneNumber = "XYZ"; // TODO: Bitte hier die echte Telefonnummer eintragen

  return (
    <Box minH="100vh" bg={bg} py={{ base: 12, md: 20 }}>
      <Container maxW="5xl">
        <Stack spacing={8} align="center" textAlign="center" mb={{ base: 6, md: 10 }}>
          <Badge colorScheme="teal" fontSize="0.8em" px={3} py={1} borderRadius="full">
            Hinweis
          </Badge>
          <Heading size={{ base: "lg", md: "xl" }}>Wir strukturieren unsere Angebote um</Heading>
          <Text color={descColor} fontSize={{ base: "md", md: "lg" }} maxW="3xl">
            Aktuell arbeiten wir daran, unsere Angebote umzustrukturieren. Solltest du Hilfe benötigen oder einen Termin vereinbaren wollen, melde dich bitte unter Telefonnummer XYZ.
          </Text>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={0}
          borderRadius="2xl"
          overflow="hidden"
          borderWidth="1px"
          borderColor={borderColor}
          bg={cardBg}
          boxShadow="xl"
        >
          <Image
            src={headerBackgroundMobile}
            alt="Erik Quint"
            display={{ base: "block", md: "none" }}
            objectFit="cover"
            w="100%"
            h="220px"
          />
          <Image
            src={headerBackgroundDesktop}
            alt="Erik Quint"
            display={{ base: "none", md: "block" }}
            objectFit="cover"
            w={{ md: "45%" }}
            maxH={{ md: "420px" }}
          />

          <Box
            p={{ base: 6, md: 10 }}
            w={{ md: "55%" }}
            display="flex"
            flexDir="column"
            justifyContent="center"
            gap={6}
          >
            <Heading size="md">Direkter Kontakt</Heading>
            <Text color={descColor} fontSize="md">
              Du erreichst uns am schnellsten telefonisch:
            </Text>
            <HStack spacing={4}>
              <Button
                as={Link}
                href={`tel:${phoneNumber}`}
                leftIcon={<Icon as={FiPhone} />}
                colorScheme="teal"
                size="lg"
              >
                Jetzt anrufen: {phoneNumber}
              </Button>
            </HStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
