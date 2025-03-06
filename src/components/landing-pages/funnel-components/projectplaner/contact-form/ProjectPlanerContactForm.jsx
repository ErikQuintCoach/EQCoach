import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { ProjectPlanerContactFormCTA } from "./ProjectPlanerContactFormCTA";
import { useForm, FormProvider } from "react-hook-form";
import { ProjectPlanerContactFormInput } from "./ProjectPlanerContactFormInput";
import { ProjectPlanerDatasecruity } from "./ProjectPlanerDatasecruity";
import { useNavigate } from "react-router";
import { useContaxt } from "../../../../../context/Context";
import ReactGA from "react-ga4";

export function ProjectPlanerContactForm({ answers }) {
  const navigate = useNavigate();
  const { cookies } = useContaxt();

  const methods = useForm();

  const onSubmit = (data) => {
    if (cookies) {
      ReactGA.event({
        category: "Landing Page",
        action: "Contact Form submitted",
        label: `Submitted the contact form`,
      });
    }
    const {
      name: customerName,
      email: customerEmail,
      tel: customerNumber,
    } = data;

    const customerAnswers = Object.keys(answers).reduce((acc, question) => {
      const questionAnswer = answers[question];
      const str = `${question}: ${questionAnswer} |`;

      return acc + str;
    }, "");

    const body = JSON.stringify({
      customerName: customerName,
      customerEmail: customerEmail,
      customerNumber: customerNumber,
      customerAnswers: customerAnswers,
    });

    fetch("https://testserver.pokerelo.de/api/mails/webwerk", {
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
      method: "POST",
    }).catch((error) => {
      console.error("Error:", error);
    });

    methods.reset();
    navigate("danke");
    window.scrollTo(0, 0);
  };

  const fields = [
    {
      icon: "👋",
      placeholder: "Dein Name",
      name: "name",
      required: "Bitte gib deinen Namen ein",
      pattern: null,
    },
    {
      icon: "📧",
      placeholder: "Deine E-Mail-Adresse",
      name: "email",
      required: "Bitte gib deine E-Mail-Adresse ein",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Ungültige E-Mail-Adresse",
      },
    },
    {
      icon: "📞",
      placeholder: "Deine Telefonnummer",
      name: "tel",
      required: "Bitte gib deine Telefonnummer ein",
      pattern: {
        //value: /^\+?\d{10,20}$/i,
        value: /^\+?\d{1,20}(?:\s\d{1,20})*$/i,
        message: "Ungültige Telefonnummer",
      },
    },
  ];

  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (index) => {
    setFocusedField(index);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box w={"100%"} px={"5%"}>
          {fields.map((field, i) => {
            return (
              <ProjectPlanerContactFormInput
                key={i}
                field={field}
                index={i}
                focusedField={focusedField}
                handleFocus={handleFocus}
              />
            );
          })}
          <ProjectPlanerDatasecruity />
          <ProjectPlanerContactFormCTA onSubmit={onSubmit} />
        </Box>
      </form>
    </FormProvider>
  );
}
