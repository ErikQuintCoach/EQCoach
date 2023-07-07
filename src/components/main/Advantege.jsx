import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Text,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";
import { BsFillPersonCheckFill, BsFillFileEarmarkFill } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";
import { PiTreeStructureFill } from "react-icons/pi";
import zitat from "../../images/Zitat-1.png";
import { ActionButton } from "../ActionButton";

export function Advantege() {
  const { color } = useContaxt();

  const infos = [
    {
      image: zitat,
      icon: <BsFillPersonCheckFill size={72} color={color.mainColor} />,
      title: "System",
      text: "Wir erarbeiten ein System, das für dich und dein Unternehmen,statt dagegen arbeitet.",
    },
    {
      image: zitat,
      icon: <BsFillFileEarmarkFill size={72} color={color.mainColor} />,
      title: "Expertise",
      text: "Mittels Fachexpertise im Bereich Unternehmens-strukturen sowie Finanzmanagement finden wir die optimale Zusammensetzung für dein Business.",
    },
    {
      image: zitat,
      bgColor: color.mainColor,
      icon: <AiFillEyeInvisible size={72} color={"white"} />,
      color: "white",
      title: "Überblick",
      text: "Durch die Objektivität, über die wir als Außenstehende verfügen, zeigen wir dir die blinden Flecken in deinem Betrieb auf.",
    },
    {
      image: zitat,
      icon: <PiTreeStructureFill size={72} color={"white"} />,
      color: "white",
      bgColor: "black",
      title: "Struktur",
      text: "Mit dem Aufsetzen einer geeigneten Unternehmensstruktur, ist es dir möglich, dich Schritt für Schritt aus deiner operativen Position deines Unternehmens zurückzuziehen.",
    },
  ];

  return (
    <>
      <Box w={"100%"} mt={"300px"} mb={"100px"}>
        <Center>
          <Stack>
            <Text fontSize={"45px"} textAlign={"center"}>
              Welche <b>Vorteile</b> eine professionelle <b>Webseite</b> für
              dich hat
            </Text>
            <Center>
              <Box h={1} w={"60%"} bgColor={color.mainColor} />
            </Center>
          </Stack>
        </Center>
        <Stack>
          <Box w={"50%"} mt={"100px"} ml={"auto"} mr={"auto"}>
            <Center w={"100%"}>
              <HStack spacing={10}>
                {infos.map((info, i) => {
                  return (
                    <>
                      <Card
                        border={`2px solid ${
                          info.bgColor !== "black" ? "#D29F68" : "black"
                        }`}
                        bgColor={info.bgColor ? info.bgColor : "white"}
                        color={info.color ? info.color : "gray.500"}
                        borderRadius={"15px"}
                        h={"400px"}
                        w={"250px"}
                      >
                        <CardHeader>
                          <Center>
                            <Stack>
                              {info.icon ? (
                                <Center w={"100%"}>{info.icon}</Center>
                              ) : (
                                <Image
                                  src={info.image}
                                  color={
                                    info.color ? info.color : color.mainColor
                                  }
                                  w={"40px"}
                                  h={"40px"}
                                />
                              )}
                              <Text
                                fontSize={"20px"}
                                fontWeight={"bold"}
                                color={info.color ? info.color : "black"}
                                mt={"10px"}
                              >
                                {info.title}
                              </Text>
                            </Stack>
                          </Center>
                        </CardHeader>
                        <CardBody mt={"-20px"}>
                          <Center textAlign={"center"}>
                            <Text
                              fontSize={"16px"}
                              /* fontWeight={"hairline"} */
                            >
                              {info.text}
                            </Text>
                          </Center>
                        </CardBody>
                      </Card>
                    </>
                  );
                })}
              </HStack>
            </Center>
          </Box>
          <Center mt={"100px"}>
            <ActionButton ml={0} />
          </Center>
        </Stack>
      </Box>
    </>
  );
}
