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
    link = "https://calendly.com/jd-it-consulting/erstgespraech",
    text = "Termin vereinbaren",
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
          h={"70px"}
          fontSize={"18px"}
          w={"300px"}
          textAlign={"center"}
          borderRadius={"50vh"}
          color={"white"}
          bg={color.buttonColor}
          _hover={{ bgColor: color.buttonColor }}
          textTransform={"uppercase"}
          letterSpacing={2}
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
