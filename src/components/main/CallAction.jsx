import {
  Box,
  Text,
  Center,
  HStack,
  Card,
  CardBody,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";
import zitat from "../../images/Zitat-1.png";
import { ActionButton } from "../ActionButton"

export function CallAction() {
  const { color } = useContaxt();

  const infos = [
    {
      image: zitat,
      text: "Klicke auf den Button",
    },
    {
      image: zitat,
      text: "Beantworte die Fragen",
    },
    {
      image: zitat,
      text: "Vereinbare ein unverbindliches Erstgespräch",
    },
  ];

  return (
    <>
      <Box w={"100%"} mt={"300px"} mb={"100px"}>
        <Center w={"100%"}>
          <Text fontSize={"45px"}>
            <b>Du</b> möchtest den nächsten <b>Schritt</b> gehen?
          </Text>
        </Center>
        <Box mt={"100px"} mb={"100px"}>
          <HStack >
            <Center w={"100%"}>
              {infos.map((info, i) => {
                return (
                  <>
                    <Card
                      key={i}
                      w={"300px"}
                      h={"250px"}
                      borderRadius={"15px"}
                      border={`2px solid ${color.mainColor}`}
                      mr={"25px"} // hstack mit spacing not working?
                    >
                      <CardBody>
                        <Center h={"200px"}>
                          <Stack>
                            <Center>
                            <Image
                              src={info.image}
                              w={"20px"}
                              h={"20px"}
                              ml={"5px"}
                            ></Image>
                            </Center>
                            <Text
                            textAlign={"center"}
                              fontSize={"18px"}
                              fontWeight={"bold"}
                              pt={"5px"}
                            >
                              {info.text}
                            </Text>
                          </Stack>
                        </Center>
                      </CardBody>
                    </Card>
                  </>
                );
              })}
            </Center>
          </HStack>
        </Box>
        <Center w={"100%"}>
        <ActionButton />
        </Center>

      </Box>
    </>
  );
}
