import { Box, Center, Tooltip } from "@chakra-ui/react";
import { TiWarning } from "react-icons/ti";

export function FormErrorIcon({ message }) {
  return (
    <Tooltip
      label={message}
      borderColor={"rgb(0 0 0 / 0.1)"}
      bgColor="white"
      borderWidth={"1px"}
      borderRadius={"0.5rem"}
      fontWeight={"semibold"}
      color="black"
    >
      <Box
        position={"absolute"}
        right={"10px"}
        top={"20px"}
        w={"20px"}
        h={"20px"}
        borderRadius={"100%"}
        bgColor={"rgb(239 35 60 / 0.8)"}
      >
        <Center h={"100%"}>
          <TiWarning color="white" fontSize={12} />
        </Center>
      </Box>
    </Tooltip>
  );
}
