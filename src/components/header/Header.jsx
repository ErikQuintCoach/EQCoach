import {
  Box,
  Center,
  HStack,
  Stack,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";
import { ActionButton } from "../ActionButton";

export function Header({ ...rest }) {
  const { color, paddingX, textCollection } = useContaxt();
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <>
      <Box w={"100%"} zIndex={100} px={paddingX} {...rest}>
        <Center pt={variant === "lg" && "150px"}>
          <Box>
            <Text
              color={"black"}
              fontSize={"16px"}
              letterSpacing={2}
              textTransform={"uppercase"}
              fontWeight={"black"}
              bgColor={"white"}
              display={variant === "lg" && "inline-block"}
              borderTopRadius={variant === "lg" && "25px"}
              py={variant === "lg" && 5}
              px={variant === "lg" && 10}
            >
              ai for everyone
            </Text>
            <br />
            <Stack
              spacing={0}
              fontSize={["25px", "36px", "48px", "48px", "64px"]}
              fontWeight={"bold"}
            >
              <Text
                display={variant === "lg" && "inline-block"}
                bgColor={"white"}
                borderTopRightRadius={variant === "lg" && "25px"}
                pt={variant === "lg" && 5}
                px={variant === "lg" && 10}
              >
                ChatGPT-Online Seminar:
              </Text>
              <Text
                display={variant === "lg" && "inline-block"}
                bgColor={"white"}
                borderBottomRightRadius={variant === "lg" && "25px"}
                pb={variant === "lg" && 5}
                px={variant === "lg" && 10}
              >
                Ihr Weg zur KI-Kompetenz!
              </Text>
            </Stack>

            <Text
              bgColor={"white"}
              borderBottomRadius={"25px"}
              pb={variant === "lg" && 5}
              px={variant === "lg" && 10}
              pt={"10px"}
              fontSize={"18px"}
              fontWeight={"black"}
              display={variant === "lg" && "inline-block"}
            >
              für Führungskräfte und Unternehmer
            </Text>
            <br></br>
            {variant === "base" ? (
              <Center>
                <ActionButton />
              </Center>
            ) : (
              <ActionButton />
            )}
          </Box>
        </Center>
      </Box>
    </>
  );
}
