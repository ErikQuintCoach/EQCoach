import { Box, VStack } from "@chakra-ui/react";
import { WhatsAppAudio } from "./whatsapp-audio/WhatsAppAudio";

export function LandingPageWhatsAppAudio({
  title,
  pt,
  image,
  audio,
  audioType,
  ...rest
}) {
  return (
    <VStack w={"100%"} px={2} spacing={4}>
      <Box
        fontWeight={"bold"}
        fontSize={24}
        textAlign={"center"}
        pt={pt}
        {...rest}
      >
        {title}
      </Box>
      <WhatsAppAudio image={image} audio={audio} />
    </VStack>
  );
}
