import {
  Image,
  Box,
  Stack,
  Wrap,
  WrapItem,
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Center,
  Spacer,
  HStack,
  useBreakpointValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import background from "../images/middle.webp";
import business from "../images/services/business_analysis.jpeg";
import coworker from "../images/services/coworker.jpeg";
import software from "../images/services/software.jpeg";
import support from "../images/services/support.jpeg";
import { BiSolidRightArrow } from "react-icons/bi";
import { useContaxt } from "../context/Context";
import { useEffect, useState } from "react";
import { BsCalendar2WeekFill, BsPersonVideo3 } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { HeadLine } from "./HeadLine";

const ContentCard = ({ index, spacings, process, processes, width }) => {
  const { color } = useContaxt();
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <HStack spacing={spacings}>
      <Card
        w={variant === "sm" || variant === "base" ? "90vw" : 230}
        h={variant !== "sm" && variant !== "base" && 400}
      >
        <Center pt={50}>{process.icon}</Center>
        <CardBody>
          <Stack h={"100%"} pt={25}>
            <Heading textAlign={"center"} size={"md"}>
              {index + 1}.
            </Heading>
            <Heading textAlign={"center"} size={"md"}>
              {process.name}
            </Heading>
            <Spacer />
            <Text textAlign={"center"}>{process.text}</Text>
            <Spacer />
          </Stack>
        </CardBody>
      </Card>
      {variant !== "sm" &&
        width > 1150 &&
        variant !== "base" &&
        index !== processes.length - 1 && (
          <BiSolidRightArrow
            color={variant === "lg" ? "white" : color.mainColor}
            size={48}
          />
        )}
    </HStack>
  );
};

export function Process({ ...rest }) {
  const { color, spacingTop, textCollection } = useContaxt();
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  const processes = [
    {
      ...textCollection.processes[0],
      icon: <BsCalendar2WeekFill size={48} />,
      image: software,
    },

    {
      ...textCollection.processes[1],
      icon: <MdPhoneInTalk size={48} />,
      image: business,
    },

    {
      ...textCollection.processes[2],
      icon: <BsPersonVideo3 size={48} />,
      image: coworker,
    },

    {
      ...textCollection.processes[3],
      icon: <TfiReload size={48} />,
      image: support,
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const [getHeight, calcHeight] = useState(0);
  const [elementHeight, setHeight] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      const element = document.getElementById("wrapper");
      const element2 = document.getElementById("gridder");
      if (element) {
        setHeight(element.getBoundingClientRect().height);
      }
      if (element2) {
        setHeight(element2.getBoundingClientRect().height);
      }
      calcHeight(width / 2.27 > elementHeight ? width / 2.27 : elementHeight);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    calcHeight(width / 2.27 > elementHeight ? width / 2.27 : elementHeight);
  }, []);

  const spacings = ["20px", "20px", "20px", "0px", "10px"];

  return (
    <Box {...rest}>
      <HeadLine
        mb={5}
        text={
          <Text fontSize={["22px", "25px", "32px", "35px", "45px"]}>
            So läuft unsere <b>Zusammenarbeit</b> ab
          </Text>
        }
      />
      <Box
        h={variant === "base" ? 1400 : getHeight}
        backgroundRepeat={"no-repeat"}
        backgroundImage={variant !== "base" && background}
        backgroundSize={`${
          width / 2.27 > elementHeight ? width : elementHeight * 2.27
        }px ${getHeight}px;`}
        mt={spacingTop}
      >
        <Center h={"100%"}>
          {width < 1200 ? (
            <>
              <Grid
                id={"gridder"}
                gap={[4, 4, 10, 3]}
                templateColumns={[
                  "repeat(1, 4fr)",
                  "repeat(1, 4fr)",
                  "repeat(2, 2fr)",
                  "repeat(4, 1fr)",
                ]}
              >
                {processes.map((process, index) => {
                  return (
                    <GridItem key={index}>
                      <ContentCard
                        width={width}
                        process={process}
                        processes={processes}
                        index={index}
                        spacings={spacings}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </>
          ) : (
            <Wrap
              align={""}
              justify={"center"}
              id={"wrapper"}
              spacing={width > 1150 ? spacings : 5}
            >
              {processes.map((process, index) => {
                return (
                  <>
                    <WrapItem key={index}>
                      <ContentCard
                        width={width}
                        process={process}
                        processes={processes}
                        index={index}
                        spacings={spacings}
                      />
                    </WrapItem>
                  </>
                );
              })}
            </Wrap>
          )}
        </Center>
      </Box>
    </Box>
  );
}
