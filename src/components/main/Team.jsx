import {
  Card,
  Center,
  Text,
  Box,
  Stack,
  Image,
  HStack,
} from "@chakra-ui/react";
import Person from "../../images/Eric.jpg";

export function Team() {
  const persons = [
    {
      Image: Person,
      title: "Eric Bubacz",
      text: "Foto- und Videograph",
    },
    {
      Image: Person,
      title: "Eric Bubacz",
      text: "Foto- und Videograph",
    },
    {
      Image: Person,
      title: "Eric Bubacz",
      text: "Foto- und Videograph",
    },
    {
      Image: Person,
      title: "Eric Bubacz",
      text: "Foto- und Videograph",
    },
  ];

  return (
    <>
      <Box w={"100%"} mt={"300px"} bg={"#1D1D25"} h={"40vh"} mb={"200px"} pt={"50px"}>
        <Center w={"100%"}>
          <Text fontSize={"45px"} color={"white"}>
            {" "}
            Das Team
          </Text>
        </Center>
        <Box mt={"50px"}>
          <Center w={"100%"}>
            <HStack spacing={"55px"}>
              {persons.map((person, i) => {
                return (
                  <>
                    <Stack spacing={0}>
                      <Image
                        src={person.Image}
                        w={"200px"}
                        borderTopRadius={"25px"}
                      ></Image>
                      <Box
                        bg={"white"}
                        w={"200px"}
                        h={"100px"}
                        borderBottomRadius={"25px"}
                      >
                        <Stack>
                          <Text
                            pl={"15px"}
                            pt={"10px"}
                            fontSize={"20px"}
                            fontWeight={"black"}
                          >
                            {person.title}
                          </Text>
                          <Text pl={"15px"} fontWeight={"hairline"}>{person.text}</Text>
                        </Stack>
                      </Box>
                    </Stack>
                  </>
                );
              })}
            </HStack>
          </Center>
        </Box>
      </Box>
    </>
  );
}
