import { Box, Image } from "@chakra-ui/react";
import play from "./play.png";
import pause from "./pause.png";

export function AudioPlayButton({ audioRef, onBeforePlay = () => {} }) {
  const paused = audioRef?.current?.paused;
  return (
    <Box
      onClick={() => {
        if (paused) {
          onBeforePlay();
          audioRef?.current?.play();
        } else {
          audioRef?.current?.pause();
        }
      }}
    >
      <Image
        cursor={"pointer"}
        w={"24px"}
        alt="Startknopf um das Kundenreview abzuspielen"
        src={paused ? play : pause}
      />
    </Box>
  );
}
