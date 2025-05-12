import { Box, Center, HStack, Stack, Text } from "@chakra-ui/react";
import headerBackgroundDesktop from "../../images/erik_quint_2.webp";
import headerBackgroundMobile from "../../images/erik_quint.webp";

import { BsFillCheckSquareFill } from "react-icons/bs";
import { useContaxt } from "../../context/Context";

export function Header() {
  const { color, isTablet } = useContaxt();

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
    "Motiviert und inspiriert von deiner Mission",
    "Deine Stärken sind dir klar und du nutzt sie",
    "Du fühlst dich wohl mit dir",
  ];

  return (
    <Box
      id={"header"}
      width={"100%"}
      height={"100vh"}
      backgroundImage={
        isTablet ? headerBackgroundMobile : headerBackgroundDesktop
      }
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
            Geld-zurück-Garantie
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
              Lebe deine Mission:
              <br />
              Selbstbewusstsein und Klarheit
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
