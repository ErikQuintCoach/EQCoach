import { Box, Center, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useContaxt } from "../context/Context";

export function HeadLine({
  text,
  size = ["25px", "25px", "32px", "35px", "45px"],
  ...rest
}) {
  const { color } = useContaxt();

  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Center {...rest}>
      <Stack>
        <Text textAlign={"center"} fontSize={size}>
          {text}
        </Text>
        <Center>
          <Box w={"60%"} h={1} bgColor={color?.mainColor} />
        </Center>
      </Stack>
    </Center>
  );
}
