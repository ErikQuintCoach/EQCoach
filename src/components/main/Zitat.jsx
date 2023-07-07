import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import zitat from "../../images/Zitat-1.png";
import { FaQuoteLeft } from "react-icons/fa";
import quoteImage from "../../images/quote.png";
import { useContaxt } from "../../context/Context";

function VideoBox(props) {
  const { quote, variant } = props;
  return (
    <Box
      w={variant === "lg" ? "450px" : "90vw"}
      h={variant === "lg" ? "450px" : "50.625vw"}
      bg={"blue"}
    >
      <Stack h={"100%"} px={10} pb={10}>
        <Spacer />
        <HStack color={"white"} align={"flex-start"}>
          <Image src={quoteImage} w={"48px"} />
          <Text textAlign={"center"} fontSize={20} fontWeight={"bold"}>
            {quote}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}

function Content(props) {
  const { variant, problem, target, solution, name, job } = props;

  const AvatarShowcase = () => {
    return (
      <HStack mt={"10px"}>
        <Avatar></Avatar>
        <Stack spacing={0} pl={"10px"}>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text>{job}</Text>
        </Stack>
      </HStack>
    );
  };

  return (
    <Box w={variant === "lg" ? "450px" : "90vw"}>
      <Stack>
        <Heading size={"md"}>Problem</Heading>
        <Text>{problem}</Text>
        <Heading pt={2} size={"md"}>
          Ziel
        </Heading>
        <Text>{target}</Text>
        <Heading pt={2} size={"md"}>
          Lösung
        </Heading>
        <Text>{solution}</Text>
        {variant === "lg" ? (
          <AvatarShowcase />
        ) : (
          <Center>
            <AvatarShowcase />
          </Center>
        )}
      </Stack>
    </Box>
  );
}

export function Zitat(props) {
  const { side, quote, problem, target, solution, name, job } = props;
  const { spacingTop } = useContaxt();
  const variant = useBreakpointValue({
    md: "md",
    lg: "lg",
  });
  return (
    <>
      <Center w={"100%"} mt={spacingTop}>
        {variant === "lg" ? (
          <HStack spacing={"50px"}>
            {side === "left" && <VideoBox variant={variant} quote={quote} />}
            <Content
              variant={variant}
              problem={problem}
              solution={solution}
              target={target}
              name={name}
              job={job}
            />
            {side === "right" && <VideoBox variant={variant} quote={quote} />}
          </HStack>
        ) : (
          <Stack spacing={"50px"}>
            <VideoBox quote={quote} variant={variant} />
            <Content
              variant={variant}
              problem={problem}
              solution={solution}
              target={target}
              name={name}
              job={job}
            />
          </Stack>
        )}
      </Center>
    </>
  );
}
