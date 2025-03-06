import { Box, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProjectPlanerContactForm } from "./contact-form/ProjectPlanerContactForm";
import { StepOneQuestionBack } from "./StepOneQuestionBack";
import { ProjectPlanerQuestion } from "./ProjectPlanerQuestion";
import { ProjectPlanerQuestionCounter } from "./ProjectPlanerQuestionCounter";
import { useContaxt } from "../../../../context/Context";
import ReactGA from "react-ga4";

export function LandingPageProjectPlaner({ planerQuestions, footer, ...rest }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showContactFormular, setShowContactFormular] = useState(false);
  const { cookies, googleAnalyticsTag } = useContaxt();
  const [answers, setAnswers] = useState({});

  const nextQuestion = (answer) => {
    if (cookies) {
      ReactGA.event({
        category: "Landing Page",
        action: "Anwsered Project Planer Question",
        label: `${planerQuestions[currentQuestion].question}: ${answer}`,
      });
    }

    setAnswers({
      ...answers,
      [planerQuestions[currentQuestion].question]: answer,
    });
    if (currentQuestion !== planerQuestions?.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 400);
    } else {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setShowContactFormular(true);
      }, 400);
    }
  };

  const prevQuestion = () => {
    const newAnwsers = answers;
    delete newAnwsers[planerQuestions[currentQuestion]?.question];
    setAnswers(newAnwsers);

    if (cookies) {
      const testMode = !(window.location.host !== "localhost:5173");
      console.log(
        "ReactGA",
        testMode ? "im Testmodus" : "",
        "initialisiert (ProjectPlaner)"
      );
      ReactGA.initialize(googleAnalyticsTag, {
        testMode: testMode,
      });
      ReactGA.event({
        category: "Landing Page",
        action: "Removed Project Planer Question",
        label: `${planerQuestions[currentQuestion]?.question}`,
      });
    }

    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
    if (showContactFormular) {
      setCurrentQuestion(planerQuestions?.length - 1);
      setShowContactFormular(false);
    }
  };

  return (
    <VStack w={"100%"} h={"100%"} maxW={600} {...rest}>
      <ProjectPlanerQuestionCounter
        currentQuestion={currentQuestion}
        planerQuestions={planerQuestions}
        showContactFormular={showContactFormular}
      />
      {!showContactFormular ? (
        <ProjectPlanerQuestion
          question={planerQuestions[currentQuestion].question}
          anwsers={planerQuestions[currentQuestion].anwsers}
          nextQuestion={nextQuestion}
          planerAnwsers={answers}
        />
      ) : (
        <ProjectPlanerContactForm answers={answers} />
      )}
      <StepOneQuestionBack
        prevQuestion={prevQuestion}
        showPrevQuestion={currentQuestion !== 0}
      />
      {/* {showContactFormular && <ProjectPlanerContactPerson />} */}
      <Box pt={3} fontSize={"md"} fontWeight={"semibold"} textAlign={"center"}>
        {footer}
      </Box>
    </VStack>
  );
}
