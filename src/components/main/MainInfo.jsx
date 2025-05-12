import { Box, Center, Text, HStack } from "@chakra-ui/react";
import { ActionButton } from "../ActionButton";
import { Stack } from "@chakra-ui/react";
import { HeadLine } from "../HeadLine";
import { BsX } from "react-icons/bs";

export function MainInfo() {
  const BulletPoint = ({ text }) => {
    return (
      <HStack>
        <BsX color="red" size="20px" />
        <Text>{`"${text}"`}</Text>
      </HStack>
    );
  };

  const bulletPoints = [
    "Ich weiß, dass da mehr ist, aber wie finde ich es?",
    "Ich habe Angst, in 32 Jahren aufzuwachen und festzustellen, dass alles gleichgeblieben ist – ich habe nichts verändert.",
    "Ich wäre gerne selbstbewusster und zufriedener.",
    "Werde ich irgendwann den Mut finden, endlich etwas zu ändern?",
    "Ich will endlich durchstarten – aber wie?",
  ];

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
                {bulletPoints.map((text, index) => {
                  return <BulletPoint text={text} key={index} />;
                })}
              </Stack>
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
}
