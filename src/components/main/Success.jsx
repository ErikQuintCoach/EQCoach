import {
  Stack,
  Text,
  Box,
  Center,
  HStack,
  Card,
  CardHeader,
  CardBody,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ActionButton } from "../ActionButton";
import zitat from "../../images/Zitat-1.png";
import mainImage from "../../images/process.webp";
import { BiSearchAlt, BiLineChart } from "react-icons/bi";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { HeadLine } from "../HeadLine";
import { useContaxt } from "../../context/Context";

export function Success({...rest}) {
  const { spacingTop, paddingX } = useContaxt();
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  const infos = [
    {
      image: zitat,
      icon: <BiSearchAlt size={48} />,
      title: "1. Analyse",
      text: " Wir sehen uns zunächst an, wie dein Unternehmen aktuell in den verschiedenen Bereichen aufgestellt ist. Sobald geklärt ist, ob und wie dein Vertrieb funktioniert, deine Mitarbeiter*innen aufgestellt sind und natürlich auch, wie es um dich steht, gehen wir zum Optimierungsschritt.",
    },
    {
      image: zitat,
      icon: <MdOutlineSettingsInputComponent size={48} />,
      title: "2. Optimierung",
      text: " Durch unsere jahrelange Expertise erkennen wir etwaige Probleme in deinem Unternehmen: Mit der 1:1 Strategie, die wir individuell für dich erstellen, ist es dir möglich, die „blinden Flecken“ auszumerzen. Sei es die Änderung der Unternehmensform, eine Reform deines Vertriebsprozesses oder eine generelle Umstrukturierung: Wir stehen an deiner Seite.",
    },
    {
      image: zitat,
      icon: <BiLineChart size={48} />,
      title: "3. Umsetzung",
      text: "Auch während der Umsetzung deines „Schlachtplans“ stehen wir dir zur Verfügung. Bei etwaigen Fragen, Problemen oder Anregungen haben wir stets ein offenes Ohr und greifen dir bestmöglich unter die Arme. Da unsere Experten in den verschiedensten Bereichen unterwegs sind, hast du bei jedem Anliegen einen passenden Ansprechpartner.",
    },
  ];

  const Content = () => {
    return (
      <Stack spacing={5}>
        {infos.map((info, i) => {
          return (
            <Box key={i}>
              <Card
                w={["90vw", "90vw", "70vw", 600, 650]}
                borderRadius={"30px"}
                boxShadow="2xl"
                p="6"
                rounded="md"
                bg="white"
                _hover={{ bg: "black", color: "white" }}
              >
                <CardHeader pt={"10px"}>
                  <HStack>
                    {info.icon}
                    <Text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      pl={"10px"}
                    >
                      {info.title}
                    </Text>
                  </HStack>
                </CardHeader>
                <CardBody mt={"-30px"}>
                  <Text
                                        textAlign={variant === "base" && "center"}
                    pl={
                      variant === "lg" && "50px"
                    } /* fontWeight={"hairline"} */
                  >
                    {info.text}
                  </Text>
                </CardBody>
              </Card>
            </Box>
          );
        })}
      </Stack>
    );
  };

  const ImageBox = () => {
    return (
      <Image
        src={mainImage}
        w={["90vw", "90vw", "70vw", "16.7vw"]}
        minW={["300px", "300px", "300px", "300px"]}
        bg={"blue"}
        mb={"20px"}
        boxShadow={"17px 17px 0px 5px #000000"}
        borderRadius={"25px"}
      ></Image>
    );
  };

  return (
    <Box {...rest}>
        <HeadLine
          text={
            <Text>
              Unsere <b>Vorgehensweise</b> für euren unternehmerischen{" "}
              <b>Erfolg</b>
            </Text>
          }
        />
        <Center w={"100%"} mt={spacingTop}>
          {variant === "lg" ? (
            <HStack spacing={10} px={paddingX}>
              <Stack>
                <ImageBox />
                <ActionButton />
              </Stack>
              <Content />
            </HStack>
          ) : (
            <Stack spacing={5} px={paddingX}>
              <ImageBox />
              <Stack spacing={5}>
                <Content />
                <Center>
                  <ActionButton /* w={["100%", "70%", "100%", "60%"]} */ />
                </Center>
              </Stack>
            </Stack>
          )}
        </Center>
    </Box>
  );
}
