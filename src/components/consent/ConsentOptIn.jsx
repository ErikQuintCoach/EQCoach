import {
  Box,
  Button,
  Center,
  HStack,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Cookies from "universal-cookie";
import { useContaxt } from "../../context/Context";
import { consentText } from "./consentText";
import { MobileConsentBanner } from "./MobileConsentBanner";

export function ConsentOptIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { color, cookies, setCookies } = useContaxt();
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const cookiesList = new Cookies();

  useEffect(() => {
    if (!cookies) {
      onOpen();
    }
  }, []);

  useEffect(() => {
    if (cookies) {
      ReactGA.event({
        category: "Consent OptIn",
        action: "Zustimmung erhalten",
        label: "Zustimmung",
      });
    }
  }, [cookies]);

  if (cookies) return null;

  return (
    <>
      {variant === "lg" && isOpen ? (
        <Box
          position="fixed"
          bottom={0}
          left={0}
          right={0}
          zIndex={100}
          w="100%"
          bgColor="white"
          borderColor="black"
          borderTopWidth={2}
          py={4}
        >
          <Center>
            <Stack pt={2} spacing={3} align="center">
              <Text fontWeight={"extrabold"} textAlign={"center"} fontSize={18}>
                Zustimmung zur Datennutzung
              </Text>
              <Text fontSize={12} maxW={"95vw"} textAlign={"center"} pb={2}>
                {consentText}
              </Text>
              <Center>
                <Stack w={350} spacing={2}>
                  <Button
                    bgColor={color?.mainColor}
                    _hover={{ bgColor: color?.mainColor }}
                    color="white"
                    borderWidth={2}
                    borderColor={"black"}
                    size="md"
                    w={350}
                    onClick={() => {
                      cookiesList.set("cookieState", true, { path: "/" });
                      setCookies(true);
                      onClose();
                    }}
                  >
                    Akzeptieren
                  </Button>
                  <HStack fontSize={12} fontWeight={"bold"} w="350px">
                    <Button
                      as="u"
                      size="md"
                      variant="ghost"
                      _hover={{ bgColor: "white" }}
                      cursor={"pointer"}
                      fontSize={12}
                      onClick={() => {
                        cookiesList.set("cookieState", false, { path: "/" });
                        onClose();
                      }}
                    >
                      ablehnen
                    </Button>
                    <Spacer />
                    <a href="/datenschutz">
                      <Text as="u" cursor={"pointer"}>
                        Datenschutz
                      </Text>
                    </a>
                  </HStack>
                </Stack>
              </Center>
            </Stack>
          </Center>
        </Box>
      ) : (
        <MobileConsentBanner
          isOpen={isOpen}
          onClose={onClose}
          cookiesList={cookiesList}
        />
      )}
    </>
  );
}
