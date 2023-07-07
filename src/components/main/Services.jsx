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

export function Services({ ...rest }) {
  const services = [
    {
      name: "Individuelle Software Lösungen",
      text: "Wir erstellen in Zusammenarbeit mit unseren Kunden individuelle Softwarelösungen, um deren Effizienz zu maximieren.",
      image: software,
    },

    {
      name: "Unternehmens Analyse",
      text: "Unser Expertenteam analysiert Ihr Geschäftsfeld, um mögliche Chancen und Risiken zu identifizieren und optimal zu nutzen.",
      image: business,
    },

    {
      name: "Mitarbeiterschulung",
      text: "Wir entwickeln individuelle Schulungen für Ihre Mitarbeiter im Bereich der IT und machen sie fit für die Welt von morgen.",
      image: coworker,
    },

    {
      name: "Support",
      text: "Wir stehen Ihnen ständig mit einem Team von Experten zur Verfügung, um Ihnen online oder persönlich vor Ort bei jeder Art von IT-Problemen zu helfen.",
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
            <b>Wie können wir dein Unternehmen unterstützen?</b>
          </Text>
        }
      />
      <Wrap justify={"center"} pt={spacingTop} px={paddingX} spacing={"75px"}>
        {services.map((service, index) => {
          return (
            <WrapItem key={index}>
              <Card
                h={variant === "md" && 450}
                w={variant === "md" ? 270 : "90vw"}
              >
                <Image
                  src={service.image}
                  w={"100%"}
                  h={"45%"}
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
        })}
      </Wrap>
    </Box>
  );
}
