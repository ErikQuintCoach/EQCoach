import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { FormErrorIcon } from "./FormErrorIcon";

export function ProjectPlanerContactFormInput({
  field,
  index,
  focusedField,
  handleFocus,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box
      h={"60px"}
      w={"100%"}
      borderColor={"rgb(0 0 0 / 0.1)"}
      borderTopRadius={index === 0 ? "0.5rem" : undefined}
      borderTopWidth={"2px"}
      borderRightWidth={"2px"}
      borderLeftWidth={"2px"}
      bg={focusedField === index ? "#f2f7fb" : "transparent"}
      position={"relative"}
    >
      <HStack pl={"5%"}>
        <Text w={"65px"} fontSize={28} textAlign={"center"} lineHeight={"60px"}>
          {field?.icon}
        </Text>
        <Input
          onFocus={() => handleFocus(index)}
          fontWeight={"medium"}
          variant={"ghost"}
          placeholder={field?.placeholder}
          bg={"transparent"}
          {...register(field.name, {
            required: field.required,
            pattern: field.pattern,
          })}
        />
        {errors[field?.name] && (
          <FormErrorIcon message={errors[field?.name]?.message} />
        )}
      </HStack>
    </Box>
  );
}
