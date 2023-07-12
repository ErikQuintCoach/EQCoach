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
import mainImage from "../../images/nachhilfe_schüler_am_tisch.jpg";
import { BiSearchAlt, BiLineChart } from "react-icons/bi";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { HeadLine } from "../HeadLine";
import { useContaxt } from "../../context/Context";

export function Success({ ...rest }) {
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
      title: "1. Online Nachhilfe",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
    },
    {
      image: zitat,
      icon: <MdOutlineSettingsInputComponent size={48} />,
      title: "2. Vorort Nachhilfe",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
    },
    {
      image: zitat,
      icon: <BiLineChart size={48} />,
      title: "3. Ferienkurse",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,",
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
                    <Text fontSize={"20px"} fontWeight={"bold"} pl={"10px"}>
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
            Unsere <b>Lernmethoden</b> für euren {" "}
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
