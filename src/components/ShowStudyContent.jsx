import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Center,
} from "@chakra-ui/react";

export function ShowStudyContent({
  title = "Lerninhalte dieses Kurses",
  ...rest
}) {
  const content = [
    {
      title: "Einführung: Verstehen Sie ChatGPT",
      content: (
        <Text>
          asdhjashdhjasd <br />
          abshdbahsbdhasdashda <br /> <br />
          asdkjasda
        </Text>
      ),
    },
    {
      title: "Handwerkszeug: Prompting-Techniken, Addons & Datenanalyse",
      content: (
        <Text>
          <strong>asdhjashdhjasd </strong>
          <br />
          abshdbahsbdhasdashda <br /> <br />
          asdkjasda
        </Text>
      ),
    },
    {
      title: "Konkrete Anwendungsbereiche",
      content: (
        <Text>
          asdhjashdhjasd <br />
          abshdbahsbdhasdashda <br /> <br />
          asdkjasda
        </Text>
      ),
    },
    {
      title: "Best Practices im Arbeitsumfeld",
      content: (
        <Text>
          asdhjashdhjasd <br />
          abshdbahsbdhasdashda <br /> <br />
          asdkjasda
        </Text>
      ),
    },
    {
      title: "Ethik & FAQ",
      content: (
        <Text>
          asdhjashdhjasd <br />
          abshdbahsbdhasdashda <br /> <br />
          asdkjasda
        </Text>
      ),
    },
  ];

  return (
    <Center>
      <Accordion _hover={{ bgColor: "white" }} allowToggle {...rest}>
        <AccordionItem>
          <h2>
            <AccordionButton _hover={{ bgColor: "white" }}>
              <Text fontWeight={"bold"} fontSize={20}>
                {title}
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion allowToggle>
              {content.map((content, i) => {
                return (
                  <AccordionItem key={i}>
                    <h2>
                      <AccordionButton>
                        <Text
                          textAlign="left"
                          fontWeight={"bold"}
                          fontSize={18}
                        >
                          {content?.title}
                        </Text>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{content?.content}</AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Center>
  );
}
