import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";
import { consentText } from "./consentText";

export function MobileConsentBanner({ isOpen, onClose, cookiesList }) {
  const { color, setCookies } = useContaxt();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={"bottom"}>
      <DrawerOverlay />
      <DrawerContent>
        <Center>
          <Text pt={3} fontWeight={"extrabold"} textAlign={"center"} fontSize={22}>
            Zustimmung zur Datennutzung
          </Text>
        </Center>
        <DrawerBody>
          <Text fontSize={12} textAlign={"center"}>
            {consentText}
          </Text>
        </DrawerBody>

        <DrawerFooter>
          <Center w={"100%"}>
            <Stack spacing={2} w={"100%"}>
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
                Akzeptieren
              </Button>
              <HStack fontSize={15} fontWeight={"bold"}>
                <Button
                  as="u"
                  size="md"
                  variant="ghost"
                  _hover={{ bgColor: "white" }}
                  onClick={() => {
                    cookiesList.set("cookieState", false, { path: "/" });
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
