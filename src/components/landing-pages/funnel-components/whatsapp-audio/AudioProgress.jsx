import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { formatSecondsToTimer } from "./formatSecondsToTimer";

export function AudioProgress({ currentTime, duration }) {
  return (
    <Box className="controls">
      <Box className="current-time">{formatSecondsToTimer(currentTime)}</Box>
      <Box w={"100%"} px={3}>
        <Slider
          aria-label="slider-ex-2"
          colorScheme="orange"
          defaultValue={0}
          value={((currentTime ?? 0) / (duration ?? 0)) * 100}
          focusThumbOnChange={false}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box className="total-time">{formatSecondsToTimer(duration)}</Box>
    </Box>
  );
}
