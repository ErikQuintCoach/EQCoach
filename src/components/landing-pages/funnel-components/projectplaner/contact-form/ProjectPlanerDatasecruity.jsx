import { Box, Center, Checkbox, HStack, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

export function ProjectPlanerDatasecruity() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const navigate = useNavigate();

  return (
    <Box
      h={"60px"}
      w={"100%"}
      borderColor={"rgb(0 0 0 / 0.1)"}
      borderBottomRadius={"0.5rem"}
      borderWidth={"2px"}
    >
      <HStack h={"100%"} pl={"5%"}>
        <Center w={"65px"}>
          <Checkbox
            borderColor={errors?.datasecruity && "rgb(239 35 60 / 0.5)"}
            {...register("datasecruity", { required: true })}
            size={"lg"}
          />
        </Center>
        <Text fontWeight={"light"} fontSize={13} pl={"16px"}>
          <u onClick={() => navigate("/datenschutz")}>
            Datenschutzbestimmungen
          </u>{" "}
          gelesen und akzeptiert
        </Text>
      </HStack>
    </Box>
  );
}
