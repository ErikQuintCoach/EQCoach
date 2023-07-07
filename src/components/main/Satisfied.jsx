import {
  Box,
  Text,
  Center,
  Card,
  CardHeader,
  CardBody,
  HStack,
  Image,
} from "@chakra-ui/react";
import zitat from "../../images/Zitat-1.png";

export function Satisfied() {
  const infos = [
    {
      image: zitat,
      title: "Individuelle Beratung",
      text: " Wir bieten dir eine maßgeschneiderte Lösung für deine persönlichen und geschäftlichen Anliegen.",
    },
    {
      image: zitat,
      title: "Individuelle Beratung",
      text: " Wir bieten dir eine maßgeschneiderte Lösung für deine persönlichen und geschäftlichen Anliegen.",
    },
    {
      image: zitat,
      title: "Individuelle Beratung",
      text: " Wir bieten dir eine maßgeschneiderte Lösung für deine persönlichen und geschäftlichen Anliegen.",
    },
  ];

  return (
    <>
      <Box w={"100%"} mt={"300px"} mb={"100px"}>
        <Center w={"100%"}>
          <Text fontSize={"45px"}>
            <b>Warum</b> unsere Kunden so <b>zufrieden</b> sind bisher
          </Text>
        </Center>
        <Center w={"100%"} mt={"50px"}>
          <Box w={"50vw"} h={"300px"}>
            <HStack spacing={"25px"}>
              {infos.map((info, i) => {
                return (
                  <>
                    <Card
                      key={i}
                      w={"16.6vw"}
                      h={"280px"}
                      borderRadius={"25px"}
                      boxShadow="2xl"
                      p="6"
                      rounded="md"
                      bg="white"
                      _hover={{ bg: "black", color: "white" }}
                    >
                      <CardHeader pt={"10px"}>
                        <Image src={info.image} w={"30px"} h={"30px"}></Image>
                      </CardHeader>
                      <CardBody>
                        <Text fontSize={"20px"} fontWeight={"bold"}>
                          {" "}
                          {info.title}
                        </Text>
                        <Text pt={"10px"}>{info.text}</Text>
                      </CardBody>
                    </Card>
                  </>
                );
              })}
            </HStack>
          </Box>
        </Center>
      </Box>
    </>
  );
}
