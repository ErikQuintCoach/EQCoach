import { Image } from "@chakra-ui/react";

export function AudioImage({ image }) {
  return (
    <Image
      px={3}
      src={image}
      alt={"Playbutton der WhatsApp Memo"}
      title={"Playbutton"}
      h={"70%"}
      w={"auto"}
    />
  );
}
