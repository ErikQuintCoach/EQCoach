import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Spacer,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useContaxt } from "../context/Context";
import { ActionButton } from "./ActionButton";
import { HeadLine } from "./HeadLine";

export function InfoMaterial({...rest}) {
  const infos = [
    {
      title: "MIT: ChatGPT steigert Produktivität um 37% - gleiche Qualität",
      description: `Dieser Effizienzgewinn wurde mit einem "Industriellen Revolution-Level" verglichen.`,
      link: "https://www.aiforeveryone.de/_files/ugd/9c8d93_548209a639844d00a248a75fc19bf403.pdf",
    },
    {
      title: "Italien: 50% weniger Output durch Verbot von ChatGPT",
      description: `Die unbeabsichtigten Folgen der Zensur digitaler Technologie - 
        Untersucht wurde der Output von 8000 Programmierern.`,
      link: "https://www.aiforeveryone.de/_files/ugd/9c8d93_cd08663c75144edca042006b4a1ac4fc.pdf",
    },
    {
      title: "ChatGPT Schulung verringert Ängste",
      description: `GPT-Schulungen reduzieren Ängste der Mitarbeiter und steigern gleichzeitig ihre Bereitschaft, dieses Tool effektiv zu nutzen.`,
      link: "https://www.aiforeveryone.de/_files/ugd/9c8d93_548209a639844d00a248a75fc19bf403.pdf",
    },
  ];

  const { spacingTop } = useContaxt();

  const InfoCard = ({ info, title, description }) => {
    return (
      <Card h={400} maxW={400}>
        <CardHeader textAlign={"center"} h={130}>
          <Heading size={"lg"}>{title}</Heading>
        </CardHeader>
        <CardBody fontSize={22} textAlign={"center"}>
          <Stack h={"100%"}>
            <Text>{description}</Text>
            <Spacer />
            <ActionButton
              text={"Zur Studie"}
              h={"50px"}
              fontSize={"15px"}
              w={"250px"}
            />
          </Stack>
        </CardBody>
      </Card>
    );
  };

  return (
    <Stack spacing={"60px"} {...rest}>
      <HeadLine
        text={
          <Text>
            Einige <b>Informationen</b> über <b>Künstliche Intelligenz</b>
          </Text>
        }
      />
      <Wrap justify={"center"} spacing={"50px"}>
        {infos.map((info, i) => {
          return (
            <WrapItem>
              <InfoCard
                title={info.title}
                description={info.description}
                link={info.link}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Stack>
  );
}
