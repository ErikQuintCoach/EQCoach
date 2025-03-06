import { Box, Image, Stack, Text } from "@chakra-ui/react";

export function LandingPageChatPreview({ title, pt, images = [], ...rest }) {
  return (
    <Stack>
      <Text
        fontWeight={"bold"}
        fontSize={24}
        textAlign={"center"}
        pt={pt}
        {...rest}
      >
        {title}
      </Text>
      <Box>
        {images?.map((image, i) => {
          return <Image src={image} key={i} />;
        })}
      </Box>
    </Stack>
  );
}
