import { Box, Center, HStack, Spacer, Text } from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import { useContaxt } from "../../../../context/Context";

export function ProjectPlanerAnwserLine({
  image,
  text,
  nextQuestion,
  planerAnwsers,
  question,
}) {
  const clicked = planerAnwsers[question] === text;

  const { color } = useContaxt();

  return (
    <Box
      p={"1rem"}
      rounded={"0.5rem"}
      boxShadow={
        "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 0 1px 1px rgba(0, 0, 0, 0.1)"
      }
      onClick={() => {
        nextQuestion(text);
      }}
      borderWidth={clicked ? 2 : undefined}
      borderStyle={clicked ? "solid" : undefined}
      borderColor={clicked ? color.mainColor : undefined}
      cursor={"pointer"}
      w={"100%"}
    >
      <HStack w={"100%"} spacing={5}>
        <Center fontSize={28} w={"25px"} h={"100%"}>
          {image}
        </Center>
        <Text fontWeight={"bold"} fontSize={16}>
          {text}
        </Text>
        <Spacer />
        <Box
          w={"20px"}
          h={"20px"}
          bgColor={clicked ? color.mainColor : undefined}
          borderRadius={"100%"}
          boxShadow={
            "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 0 1px 1px rgba(0, 0, 0, 0.1)"
          }
        >
          <Center h={"100%"}>
            <BsCheck color="white" fontSize={"25px"} />
          </Center>
        </Box>
      </HStack>
    </Box>
  );
}
