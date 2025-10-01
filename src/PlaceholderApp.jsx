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
  Center,
} from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";
import headerBackgroundDesktop from "./images/erik_quint_2.webp";
import headerBackgroundMobile from "./images/erik_quint.webp";
import { useContaxt } from "./context/Context";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/header/Navigation";

export function PlaceholderApp() {
  const bg = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const descColor = useColorModeValue("gray.600", "gray.300");
  const phoneNumber = "+ 49 176 310 090 17"; // TODO: Bitte hier die echte Telefonnummer eintragen
  const { isTablet, color, spacingTop } = useContaxt();

  return (
    <>
      <Navigation />
      <Box minH="100vh" bg={bg}>
        <Center
          minH="100vh"
          height={"100%"}
          pt={["78px", "98px", "98px", "98px"]}
        >
          <Container maxW="5xl" pb={0} mb={0}>
            <Heading
              size={{ base: "lg", md: "xl" }}
              textAlign={"center"}
              pb={4}
            >
              Lebe deine Mission: <br /> Selbstbewusstsein und Klarheit
            </Heading>

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
                textAlign={isTablet ? "center" : "left"}
                alignItems={isTablet ? "center" : "left"}
              >
                <Badge
                  bgColor={color.mainColor}
                  color="white"
                  fontSize="0.8em"
                  px={3}
                  py={1}
                  fontWeight={"bold"}
                  textAlign={"center"}
                  borderRadius="full"
                  maxWidth={"96px"}
                >
                  Hinweis
                </Badge>
                <Heading size="md">
                  Wir strukturieren unsere Angebote um
                </Heading>
                <Text color={descColor} fontSize="md">
                  Aktuell arbeiten wir daran, unsere Angebote umzustrukturieren.
                  Solltest du Hilfe benötigen oder einen Termin vereinbaren
                  wollen, melde dich bitte unter unserer Telefonnummer:
                </Text>
                <HStack spacing={4}>
                  <Button
                    as={Link}
                    href={`tel:${phoneNumber}`}
                    leftIcon={!isTablet && <Icon as={FiPhone} />}
                    bgColor={color.mainColor}
                    _hover={{ bgColor: color.mainColor }}
                    color="white"
                    size="lg"
                    width={"100%"}
                    textAlign={"center"}
                  >
                    Jetzt anrufen: {isTablet && <br />} {phoneNumber}
                  </Button>
                </HStack>
              </Box>
            </Stack>
            <Footer />
          </Container>
        </Center>
      </Box>
    </>
  );
}
