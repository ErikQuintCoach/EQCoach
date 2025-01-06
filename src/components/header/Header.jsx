import {
  Box,
  Center,
  HStack,
  Stack,
  Spacer,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsFillCheckSquareFill } from "react-icons/bs";
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

  const Benefit = ({ text }) => {
    return (
      <HStack>
        <BsFillCheckSquareFill />
        <Text fontSize={["14px", "22px", "22px", "22px"]}>{text}</Text>
      </HStack>
    );
  };
  const benefits = [
    "Erschaffe eine Vision die dich ehrlich motiviert und inspiriert",
    "Finde deine Stärken, deine Werte und andere Ressourcen",
    "Erkenne und ersetzte hinderliche Denkmuster",
  ];

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
              Testkunden gesucht
            </Text>
            <br />
            <Stack
              spacing={0}
              fontSize={["20px", "36px", "48px", "48px", "56px"]}
              fontWeight={"bold"}
            >
              <Text
                display={variant === "lg" && "inline-block"}
                bgColor={"white"}
                borderTopRightRadius={variant === "lg" && "25px"}
                pt={variant === "lg" && 5}
                px={variant === "lg" && 10}
              >
                Create Your Path:
              </Text>
              <Text
                display={variant === "lg" && "inline-block"}
                bgColor={"white"}
                borderBottomRightRadius={variant === "lg" && "25px"}
                fontSize={["26px", "25px", "30px", "37px", "46px"]}
                fontWeight={"black"}
                pb={variant === "lg" && 5}
                px={variant === "lg" && 10}
              >
                Klarheit und Selbstentfaltung
              </Text>
            </Stack>

            <Text
              bgColor={"white"}
              borderBottomRadius={"25px"}
              pb={variant === "lg" && 5}
              px={variant === "lg" && 10}
              pt={"10px"}
              fontSize={["16px", "18px", "18px", "18px"]}
              fontWeight={"extrabold"}
              display={variant === "lg" && "inline-block"}
            >
              in 12 Wochen durch wissenschaftlich valide Methoden:
              <br />
              <br />
              {benefits.map((benefit, i) => {
                return (
                  <Box key={i}>
                    <Benefit text={benefit} />
                  </Box>
                );
              })}
            </Text>
            <br />
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
