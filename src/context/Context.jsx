import { useBreakpointValue } from "@chakra-ui/react";
import { useState, useContext, useEffect, useRef, createContext } from "react";

const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [color, setColor] = useState({
    /* Previous colors */
    previousMainColor: "#00b4d8", // Hellerer Türkiston
    previousSecondButton: "#9E9E9EBA",

    /* New colors */
    mainColor: "#CF7F00", // New main color
    secondButton: "#9E9E9EBA", // Keeping second button the same
  });

  const textCollection = {
    header: [
      "Nachhilfe 2.0",
      "Für Norddeutschland",
      "Kiel, Rendsburg, Flensburg und mehr",
      "Mit unserer Unterstützung zu besseren Noten",
    ],
    processes: [
      {
        name: "Kennlern- & Beratungstermin",
        text: "Sie fragen ein kostenloses Kennlerngespräch über unsere Webseite an und beantworten uns einige Fragen.",
      },
      {
        name: "Indentifikation der Lernschwächen",
        text: "Sie fragen ein kostenloses Kennlerngespräch über unsere Webseite an und beantworten uns einige Fragen.",
      },
      {
        name: "Regelmäßiger Unterricht",
        text: "Sie fragen ein kostenloses Kennlerngespräch über unsere Webseite an und beantworten uns einige Fragen.",
      },
      {
        name: "Lernmaterialien",
        text: "Sie fragen ein kostenloses Kennlerngespräch über unsere Webseite an und beantworten uns einige Fragen.",
      },
    ],
    subjectHeadline: "In diesen Fächern können wir euch unterstützen",
    subjects: [
      {
        name: "Mathe",
        text: "",
      },
      {
        name: "Physik",
        text: "",
      },
      {
        name: "Informatik",
        text: "",
      },
      {
        name: "Chemie",
        text: "",
      },
      {
        name: "WiPo",
        text: "",
      },
      {
        name: "Geschichte",
        text: "",
      },
      {
        name: "Grafik/Design",
        text: "",
      },
      {
        name: "Kunst/Zeichnen",
        text: "",
      },
      {
        name: "BWL",
        text: "",
      },
      {
        name: "Technik",
        text: "",
      },
      /*       {
        name: "Medizin",
        text: "",
      }, */
    ],
    languagesHeadline: "Wir unterrichten auch folgende Sprachen",
    languages: [
      {
        name: "Deutsch",
        text: "",
      },
      {
        name: "Englisch",
        text: "",
      },
      {
        name: "Französisch",
        text: "",
      },
      {
        name: "Latein",
        text: "",
      },
      {
        name: "Spanisch",
        text: "",
      },
    ],
    aboutHeader: "Unsere Mission beim ",
  };

  const paddingX = [3, 3, 3, 3];
  const spacingTop = ["30px", "40px", "50px", "40px", "100px"];

  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  console.warn("Variant :", variant);

  return (
    <Context.Provider
      value={{
        spacingTop,
        variant,
        paddingX,
        textCollection,
        color,
        setColor,
        isSmartphone: variant === "base",
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useContaxt() {
  return useContext(Context);
}
