import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function SingleBenefit({ icon, iconSize, text, horizontal, ...rest }) {
  return (
    <Stack
      direction={horizontal ? "row" : "column"}
      textAlign={horizontal ? "left" : "center"}
      {...rest}
    >
      <Text w={horizontal ? undefined : "100%"} fontSize={iconSize}>
        {icon}
      </Text>
      <Box fontSize={18}>{text}</Box>
    </Stack>
  );
}

export function LandingPageBenefits({
  title,
  benefits,
  horizontal = true,
  pt,
  iconSize = 28,
  spacing = 2,
  ...rest
}) {
  let numberOfColumns = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
  });

  const restOfBenefits = benefits?.length % numberOfColumns;
  if (restOfBenefits !== 0) {
    numberOfColumns = numberOfColumns - 1;
  }

  return (
    <>
      <Text
        fontWeight={"bold"}
        fontSize={24}
        textAlign={"center"}
        maxW={"90%"}
        pt={pt}
      >
        {title}
      </Text>
      <SimpleGrid columns={numberOfColumns} spacing={spacing} px={"5%"}>
        {benefits?.map((benefit, i) => {
          return (
            <SingleBenefit
              key={i}
              icon={benefit?.icon}
              text={benefit?.text}
              horizontal={horizontal}
              iconSize={iconSize}
              {...rest}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
}
