import { Box, Center, Text, HStack } from "@chakra-ui/react";
import { ActionButton } from "../ActionButton";
import { Stack } from "@chakra-ui/react";
import { HeadLine } from "../HeadLine";
import { BsX } from "react-icons/bs";

export function MainInfo() {
  return (
    <>
      <Box w={"100%"}>
        <Center>
          <Box maxW={1000} px={["2.5vw", 7, "100px", "100px"]}>
            <Stack spacing={"50px"}>
              <HeadLine
                text={
                  <Text
                    fontSize={["32px", "38px", "50px", "50px"]}
                    textAlign="center"
                    fontWeight={"bold"}
                  >
                    Das beschäftigt dich?
                  </Text>
                }
              />
              <Stack spacing={4} fontSize={"18px"}>
                <HStack>
                  <BsX color="red" size="20px" />
                  <Text>
                    "Ich spüre,
                    dass das Leben mehr bietet. Nur weiß ich nicht, wie ich es
                    finde."
                  </Text>
                </HStack>
                <HStack>
                  <BsX color="red" size="20px" />
                  <Text>
                    "Ich habe Angst, in 32 Jahren aufzuwachen und alles ist
                    gleich. Nichts hat sich verändert – <b>ich</b> habe nichts
                    verändert."
                  </Text>
                </HStack>
                <HStack>
                  <BsX color="red" size="20px" />
                  <Text>
                    "Was sind meine Stärken? Wie kann ich diese besser einsetzen? Was will ich
                    <b> wirklich</b>?"
                  </Text>
                </HStack>
                <HStack>
                  <BsX color="red" size="20px" />
                  <Text>
                    "Wann finde ich den Mut, endlich richtig durchzustarten?"
                  </Text>
                </HStack>
                <HStack>
                  <BsX color="red" size="20px" />
                  <Text>
                    "Ich möchte mehr erleben, mehr erreichen nur wie schaffe ich das?"
                  </Text>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
}
