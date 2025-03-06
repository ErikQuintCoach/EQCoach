export function formatSecondsToTimer(seconds) {
  const roundedSeconds = Math.ceil(seconds);

  const minutes = Math.floor(roundedSeconds / 60);
  const secondsLeft = roundedSeconds % 60;

  const formattedSeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  const formattedTime = `${minutes}:${formattedSeconds}`;

  return formattedTime;
}
