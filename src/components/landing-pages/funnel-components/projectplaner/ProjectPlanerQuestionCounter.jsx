import { Box, Text } from "@chakra-ui/react";

export function ProjectPlanerQuestionCounter({
  currentQuestion,
  planerQuestions,
  showContactFormular,
}) {
  return (
    <Box textAlign={"center"} fontWeight={"semibold"} fontSize={17}>
      {showContactFormular ? (
        <Text fontSize={14}>Wir freuen uns darauf, dich kennenzulernen 🥳</Text>
      ) : (
        <>
          {currentQuestion === planerQuestions?.length - 1
            ? "letzte Frage"
            : `Frage ${currentQuestion + 1} von ${planerQuestions?.length}`}{" "}
          🙌
        </>
      )}
    </Box>
  );
}
