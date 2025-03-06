import { Stack, Text, VStack, Wrap } from "@chakra-ui/react";
import { ProjectPlanerAnwser } from "./ProjectPlanerAnwser";
import { ProjectPlanerAnwserLine } from "./ProjectPlanerAnwserLine";

export function ProjectPlanerQuestion({
  question,
  anwsers,
  nextQuestion,
  planerAnwsers,
}) {
  return (
    <VStack w={"100%"}>
      <Text fontWeight={"bold"} textAlign={"center"} fontSize={22} maxW={"90%"}>
        {question}
      </Text>
      {anwsers.length < 3 ? (
        <Wrap>
          {anwsers.map((anwser, i) => {
            return (
              <ProjectPlanerAnwser
                image={anwser.image}
                text={anwser.text}
                nextQuestion={nextQuestion}
                planerAnwsers={planerAnwsers}
                question={question}
                key={i}
              />
            );
          })}
        </Wrap>
      ) : (
        <Stack w={"95%"}>
          {anwsers.map((anwser, i) => {
            return (
              <ProjectPlanerAnwserLine
                image={anwser.image}
                text={anwser.text}
                nextQuestion={nextQuestion}
                planerAnwsers={planerAnwsers}
                question={question}
                key={i}
              />
            );
          })}
        </Stack>
      )}
    </VStack>
  );
}
