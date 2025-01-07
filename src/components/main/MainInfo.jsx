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
                    "Alle scheinen halbwegs zufrieden zu sein, aber ich spüre,
                    dass da mehr sein muss. Nur weiß ich nicht, wie ich es
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
                    "Was kann ich eigentlich wirklich? Was will ich eigentlich
                    wirklich?"
                  </Text>
                </HStack>
                <HStack>
                  <BsX color="red" size="20px" />
                  <Text>
                    "Finde ich irgendwann den Mut, endlich etwas zu ändern?"
                  </Text>
                </HStack>
                <HStack>
                  <BsX color="red" size="20px" />
                  <Text>
                    "Ich sehe, wie andere ihren Weg gehen, und frage mich: Warum
                    fühlt sich meiner so falsch an?"
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
