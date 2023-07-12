import {
  Avatar,
  Box,
  Center,
  HStack,
  Image,
  Stack,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";

//todo br und image

export function AboutText(props) {
  const { text, side, image, name, textWidth, ...rest } = props;
  const { spacingTop } = useContaxt();
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const TextBlock = ({ ...rest }) => {
    return (
      <Stack {...rest}>
        <Text
          w={textWidth}
          color={"black"}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          {name}
        </Text>
        <Text
          w={textWidth}
          color={"gray.800"}
          fontSize={"18px"} /* fontWeight={"hairline"} */
        >
          {text}
        </Text>
      </Stack>
    );
  };

  return (
    <>
      <Center w={"100%"} mt={spacingTop} px={10}>
        {variant === "lg" ? (
          <HStack align={"flex-start"} {...rest}>
            {side === "left" && (
              <>
                {image} <Spacer />{" "}
              </>
            )}
            <TextBlock />
            {side === "right" && (
              <>
                {" "}
                <Spacer /> {image}
              </>
            )}
          </HStack>
        ) : (
          <Stack {...rest}>
            <Center>{image}</Center>
            <Center pt={[3, 10, 10, 10]}>
              <TextBlock
                textAlign={variant !== "base" ? "center" : "justify"}
              />
            </Center>
          </Stack>
        )}
      </Center>
    </>
  );
}
