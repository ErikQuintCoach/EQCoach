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
  useBreakpointValue,
} from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";
import business from "../../images/services/business_analysis.webp";
import coworker from "../../images/services/coworker.webp";
import software from "../../images/services/software.webp";
import support from "../../images/services/support.webp";
import { HeadLine } from "../HeadLine";

export function Services({ input, headline, ...rest }) {
  const services = [
    {
      ...input[0],
      image: software,
    },

    {
      ...input[1],
      image: business,
    },

    {
      ...input[2],
      image: coworker,
    },

    {
      ...input[3],
      image: support,
    },
    {
      ...input[4],
      image: support,
    },
    {
      ...input[5],
      image: support,
    },

    {
      ...input[6],
      image: support,
    },
    {
      ...input[7],
      image: support,
    },
    {
      ...input[8],
      image: support,
    },
    {
      ...input[9],
      image: support,
    },
    {
      ...input[10],
      image: support,
    },
  ];

  const { color, spacingTop, paddingX } = useContaxt();

  const variant = useBreakpointValue({
    sm: "sm",
    md: "md",
  });

  return (
    <Box {...rest}>
      <HeadLine
        text={
          <Text>
            <b>{headline}</b>
          </Text>
        }
      />
      <Wrap justify={"center"} pt={spacingTop} px={paddingX} spacing={"25px"}>
        {services.map((service, index) => {
          if (service?.name != undefined) {
            return (
              <WrapItem key={index}>
                <Card
                  h={variant === "md" && 220}
                  w={variant === "md" ? 220 : "90vw"}
                >
                  <Image
                    src={service.image}
                    w={"100%"}
                    h={"75%"}
                    borderTopRadius={5}
                  />
                  {/* </CardHeader> */}
                  <CardBody>
                    <Stack h={"100%"}>
                      <Heading textAlign={"center"} size={"md"}>
                        {service.name}
                      </Heading>
                      <Spacer />
                      <Text /* pt={2} */ textAlign={"center"}>
                        {service.text}
                      </Text>
                      <Spacer />
                    </Stack>
                  </CardBody>
                </Card>
              </WrapItem>
            );
          }
        })}
      </Wrap>
    </Box>
  );
}
