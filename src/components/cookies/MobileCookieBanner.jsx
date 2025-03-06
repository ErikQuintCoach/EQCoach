import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";
import { cookieText } from "./cookieText";
import cookie_icon from "./cookies.webp";

export function MobileCookieBanner({ isOpen, onClose, cookiesList }) {
  const { color, cookies, setCookies } = useContaxt();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={"bottom"}>
      <DrawerOverlay />
      <DrawerContent>
        <Center>
          <Image
            pt={2}
            w={50}
            src={cookie_icon}
            alt={
              "Cookie Icon für Cookie opt in der Kieler Webdesign Agentur WebWerk am Meer"
            }
          />
        </Center>
        <Text
          fontWeight={"extrabold"}
          textAlign={"center"}
          fontSize={22}
          zIndex={3}
        >
          Cookies erlauben?
        </Text>
        <DrawerBody>
          {" "}
          <Text fontSize={12} textAlign={"center"}>
            {cookieText}
          </Text>
        </DrawerBody>

        <DrawerFooter>
          <Center w={"100%"}>
            <Stack spacing={0} w={"100%"}>
              <Button
                bgColor={color?.mainColor}
                _hover={{ bgColor: color?.mainColor }}
                color="white"
                borderWidth={2}
                borderColor={"black"}
                size="md"
                w={"100%"}
                onClick={() => {
                  cookiesList.set("cookieState", true, { path: "/" });
                  setCookies(true);
                  onClose();
                }}
              >
                Cookies akzeptieren
              </Button>
              <HStack fontSize={15} fontWeight={"bold"}>
                <Button
                  as="u"
                  size="md"
                  variant="ghost"
                  _hover={{ bgColor: "white" }}
                  onClick={() => {
                    /*                     cookiesList.set("cookieState", false, {
                      path: "/",
                    }); */
                    onClose();
                  }}
                >
                  ablehnen
                </Button>
                <Spacer />
                <a href="/datenschutz">
                  <Text as="u">Datenschutz</Text>
                </a>
              </HStack>
            </Stack>
          </Center>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
