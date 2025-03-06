import { Stack, Text } from "@chakra-ui/react";

export function StepOneQuestionBack({
  text,
  icon,
  prevQuestion,
  showPrevQuestion,
  ...rest
}) {
  return (
    <Stack w={"100%"} px={"5%"} {...rest}>
      {showPrevQuestion && (
        <Text
          textAlign={"center"}
          as={"u"}
          cursor={"pointer"}
          onClick={prevQuestion}
        >
          zurück
        </Text>
      )}
    </Stack>
  );
}
