import { useBreakpointValue } from "@chakra-ui/react";
import { useState, useContext, createContext } from "react";
import Cookies from "universal-cookie";
import ReactGA from "react-ga4";

const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [color, setColor] = useState({
    //mainColor: "#1A064B", // Das hier verändert die Farbe für die gesamte Webseite
    mainColor: "#f8961e",
  });

  const paddingX = [3, 3, 3, 3];
  const spacingTop = ["30px", "40px", "50px", "40px", "100px"];

  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const googleAnalyticsTag = "G-DV9ZP2JF9S";

  const cookiesList = new Cookies();
  let cookieState;
  if (cookiesList.get("cookieState")) {
    cookieState = true;
  } else {
    cookieState = false;
  }

  const [cookies, setCookies] = useState(cookieState);

  if (cookies) {
    const testMode = !(window.location.host !== "localhost:5173");
    console.log(
      "ReactGA",
      testMode ? "im Testmodus" : "",
      "initialisiert (Context)"
    );
    ReactGA.initialize(googleAnalyticsTag, {
      testMode: testMode,
    });
  }

  return (
    <Context.Provider
      value={{
        spacingTop,
        variant,
        paddingX,
        color,
        setColor,
        cookies,
        setCookies,
        isSmartphone: variant === "base",
        isTablet: variant === "base" || variant === "sm",
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useContaxt() {
  return useContext(Context);
}
