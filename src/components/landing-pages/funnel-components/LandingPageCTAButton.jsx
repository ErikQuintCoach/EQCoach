import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContaxt } from "../../../context/Context";
import ReactGA from "react-ga4";

export function LandingPageCTAButton({
  text = "Jetzt Sichtbar werden 🚀",
  animate = true,
  onClick,
}) {
  const { color, cookies, googleAnalyticsTag } = useContaxt();

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={
        animate
          ? {
              scale: [1, 1.2, 1],
            }
          : false
      }
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 2,
      }}
      style={{
        backgroundColor: true ? "#f4a261" : color.mainColor,
        width: "80%",
        maxWidth: 320,
        cursor: "pointer",
        borderRadius: "0.375rem",
        textAlign: "center",
        marginTop: "20px",
        padding: "10px",
        userSelect: "none",
      }}
      onClick={() => {
        if (cookies) {
          ReactGA.event({
            category: "Landing Page",
            action: "clicked CTA Button",
            label: `Landing Page CTA: ${text}`,
          });
          console.log("Google Analytics Event geworfen");
        }
        onClick();
      }}
    >
      <Text fontSize="lg" fontWeight="black" color="white">
        {text}
      </Text>
    </motion.div>
  );
}
