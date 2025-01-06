import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  useBreakpointValue,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Spacer,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router";
import { useContaxt } from "../../context/Context";
import { HeaderLink } from "./HeaderLink";
import { services } from "./services";

export function BurgerMenu({ refs, executeScroll }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { color } = useContaxt();
  const size = useBreakpointValue({ base: 36, sm: 48, md: 48});
  const navigate = useNavigate();

  return (
    <>
      <GiHamburgerMenu
        color={color.mainColor}
        size={size}
        onClick={() => (isOpen ? onClose() : onOpen())}
        cursor={"pointer"}
      />

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent borderRadius={0}>
          <DrawerBody px={0} w={"100%"}>
            <Stack spacing={15} h={"100%"}>
              <Spacer />
              {services.map((service, i) => {
                return (
                  <HeaderLink
                    key={i}
                    service={service}
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        executeScroll(service.ref);
                      }, 300);
                      onClose();
                    }}
                    fontSize={24}
                  />
                );
              })}
              <Spacer />
            </Stack>
          </DrawerBody>

          {/*           <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
