import { Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContaxt } from "../../../../../context/Context";
import { useFormContext } from "react-hook-form";

export function ProjectPlanerContactFormCTA({ onSubmit }) {
  const { handleSubmit } = useFormContext(); // retrieve all hook methods

  const { color } = useContaxt();

  return (
    <Center>
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        style={{
          backgroundColor: true ? "#f4a261" : color.mainColor,
          width: "80%",
          cursor: "pointer",
          borderRadius: "0.375rem",
          fontWeight: "black",
          textAlign: "center",
          marginTop: "20px",
          padding: "10px",
          userSelect: "none",
        }}
        onClick={handleSubmit(onSubmit)}
      >
        <Text fontSize="lg" fontWeight="black" color="white">
          Jetzt Sichtbar werden 🚀
        </Text>
      </motion.div>
    </Center>
  );
}
