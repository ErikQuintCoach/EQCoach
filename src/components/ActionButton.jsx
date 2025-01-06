import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useContaxt } from "../context/Context";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./css/buttonHover.css";

export function ActionButton(props) {
  const { color, setColor } = useContaxt();

  const [show, setShow] = useState(false);

  const {
    ml,
    link = "https://calendly.com/erik-quint/30min",
    text = "Kostenloses Kennlerngespräch",
    ...rest
  } = props;

  return (
    <Stack
      px={1.5}
      py={1.5}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      borderRadius={"50vh"}
    >
      <a href={link} target="_blank">
        <Button
          ml={ml}
          h={"80px"}
          fontSize={"16px"}
          w={"350px"}
          textAlign={"center"}
          borderRadius={"50vh"}
          color={"white"}
          bg={color.mainColor}
          _hover={{ bgColor: color.mainColor }}
          textTransform={"uppercase"}
          letterSpacing={2.5}
          className="parent"
          {...rest}
        >
          {text}
          {show && <MdKeyboardArrowRight className="child" size={32} />}
        </Button>
      </a>
    </Stack>
  );
}
