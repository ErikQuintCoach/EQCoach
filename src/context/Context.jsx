import { useState, useContext, useEffect, useRef, createContext } from "react";

const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [color, setColor] = useState({
    buttonColor: "#5da2df",
    mainColor: "#5da2df",
    secondButton: "#9E9E9EBA",
  });

  const paddingX = [3, 3, 3, 3];
  const spacingTop = ["30px", "40px", "50px", "40px", "100px"];

  // 0px 30px 60px 0px rgba(53,66,85,0.1) box shadow middle

  return (
    <Context.Provider
      value={{
        spacingTop,
        paddingX,
        color,
        setColor,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useContaxt() {
  return useContext(Context);
}
