import { Box, Center, HStack, Stack, Text } from "@chakra-ui/react";
import headerBackground from "../../images/header.webp";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useContaxt } from "../../context/Context";

export function Header() {
  const { color } = useContaxt();

  const Benefit = ({ text }) => {
    return (
      <HStack>
        <BsFillCheckSquareFill color={color.mainColor} />
        <Text
          fontWeight={"semibold"}
          fontSize={["12px", "14px", "16px", "18px"]}
        >
          {text}
        </Text>
      </HStack>
    );
  };

  const benefits = [
    "Erschaffe eine Vision die dich ehrlich motiviert und inspiriert",
    "Finde deine Stärken, deine Werte und andere Ressourcen",
    "Erkenne und ersetzte hinderliche Denkmuster",
  ];

  return (
    <Box
      id={"header"}
      width={"100%"}
      height={"100vh"}
      backgroundImage={headerBackground}
      backgroundPosition={"center"}
      backgroundSize={"auto 100%"}
      position={"relative"}
    >
      <Center width={"100%"} position={"absolute"} bottom={"32px"}>
        <Box px={"8px"}>
          <Text
            padding={"16px"}
            fontWeight={"bold"}
            width={"fit-content"}
            backgroundColor={"white"}
            borderTopRadius={["14px", "16px", "16px", "16px"]}
          >
            TESTKUNDEN GESUCHT
          </Text>
          <Stack
            padding={["8px", "16px", "16px", "16px"]}
            backgroundColor={"white"}
            borderRadius={"16px"}
            borderTopLeftRadius={"0px"}
          >
            <Text
              fontWeight={"extrabold"}
              fontSize={["22px", "24px", "36px", "36px"]}
            >
              Create your Path: <br />
              Klarheit und Selbstentfaltung
            </Text>
            <Text
              fontSize={["16px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              in 12 Wochen durch wissenschaftlich valide Methoden:
            </Text>
            <Stack>
              {benefits.map((benefit, index) => {
                return <Benefit text={benefit} key={index} />;
              })}
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
