import {
  Box,
  Button,
  Center,
  HStack,
  Image,
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
import "./cookieOptIn.css";
import cookie_icon from "./cookies.webp";
import { cookieText } from "./cookieText";
import { MobileCookieBanner } from "./MobileCookieBanner";

export function CookieOptIn() {
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
        category: "Cookie OptIn",
        action: "Cookies Zustimmung erhalten",
        label: "Zustimmung",
      });
    }
  }, [cookies]);

  if (cookies) return null;

  return (
    <>
      {variant === "lg" && isOpen ? (
        <Box
          className="stickyBottom"
          zIndex={100}
          w={"100vw"}
          bgColor={"white"}
          borderColor={"black"}
          borderTopWidth={2}
        >
          <Box
            className={"half-circle"}
            bgColor="white"
            position={"absolute"}
            top={-59.9}
            right={window.innerWidth / 2 - 60}
          />
          <Image
            position={"absolute"}
            top={-35}
            right={window.innerWidth / 2 - 35}
            w={70}
            src={cookie_icon}
            title={"Cookie Icon für Cookie opt in"}
            alt={
              "Cookie Icon für Cookie opt in der Kieler Webdesign Agentur WebWerk am Meer"
            }
          />
          <Center>
            <Stack pt={10}>
              <Text
                fontWeight={"extrabold"}
                textAlign={"center"}
                fontSize={18}
                zIndex={3}
              >
                {" "}
                Cookies erlauben?{" "}
              </Text>
              <Text fontSize={12} maxW={"95vw"} textAlign={"center"} pb={4}>
                {cookieText}
              </Text>
              <Center>
                <Stack w={350}>
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
                    Cookies akzeptieren
                  </Button>
                  <HStack fontSize={12} fontWeight={"bold"}>
                    <Button
                      as="u"
                      size="md"
                      variant="ghost"
                      _hover={{ bgColor: "white" }}
                      cursor={"pointer"}
                      fontSize={12}
                      onClick={() => {
                        cookiesList.set("cookieState", false, {
                          path: "/",
                        });
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
        <MobileCookieBanner
          isOpen={isOpen}
          onClose={onClose}
          cookiesList={cookiesList}
        />
      )}
    </>
  );
}
