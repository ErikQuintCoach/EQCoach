import { Box, Text } from "@chakra-ui/react";
import { useContaxt } from "../../../../context/Context";

export function ProjectPlanerAnwser({
  image,
  text,
  nextQuestion,
  planerAnwsers,
  question,
}) {
  //const [clicked, setClicked] = useState(false);
  const { color } = useContaxt();

  const clicked = planerAnwsers[question] === text;

  const edgeLength = 150;
  const borderRadius = 20;
  return (
    <Box
      h={edgeLength}
      w={edgeLength}
      p={"1rem"}
      rounded={"0.5rem"}
      boxShadow={
        "0 1px 3px rgba(0, 0, 0, 0.2), inset 0 0 1px 1px rgba(0, 0, 0, 0.2)"
      }
      cursor={"pointer"}
      onClick={() => {
        nextQuestion(text);
      }}
      borderWidth={clicked ? 2 : undefined}
      borderStyle={clicked ? "solid" : undefined}
      borderColor={clicked ? color.mainColor : undefined}
    >
      <Text
        h={"60%"}
        textAlign={"center"}
        fontSize={48}
        lineHeight={`${150 * 0.6}px`}
      >
        {image}
      </Text>
      <Text
        borderBottomRadius={`${borderRadius * 0.5}px`}
        fontWeight={"bold"}
        fontSize={18}
        h={"40%"}
        lineHeight={`${0.4 * edgeLength}px`}
        textAlign={"center"}
      >
        {text}
      </Text>
    </Box>
  );
}
