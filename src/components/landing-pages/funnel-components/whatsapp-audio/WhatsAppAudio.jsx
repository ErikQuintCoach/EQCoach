import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { AudioImage } from "./AudioImage";
import { AudioPlayButton } from "./AudioPlayButton";
import { AudioProgress } from "./AudioProgress";
import "./whatsAppAudio.css";

export function WhatsAppAudio({
  audio = "kroll_bauausfuehrungen_testimonial.mp3",
  audioType = "audio/mp3",
  image,
  ...rest
}) {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  function stopAllAudio() {
    const audios = document.querySelectorAll(".audio-element");

    audios.forEach((audio) => {
      audio.pause();
    });
  }

  return (
    <Box
      minWidth={"300px"}
      borderRadius={"4px"}
      className="audio green-audio-player"
      {...rest}
    >
      {image ? <AudioImage image={image} /> : <Box w={"15px"} />}
      <AudioPlayButton onBeforePlay={stopAllAudio} audioRef={audioRef} />
      <AudioProgress currentTime={currentTime} duration={duration} />
      <audio
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        class="audio-element"
      >
        <source src={audio} type={audioType} />
      </audio>
    </Box>
  );
}
