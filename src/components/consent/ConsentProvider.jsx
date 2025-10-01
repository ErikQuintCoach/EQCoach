import { Image } from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";
import { ConsentOptIn } from "./ConsentOptIn";

export function ConsentProvider({ children }) {
  const { cookies } = useContaxt();

  return (
    <>
      <ConsentOptIn />
      {cookies && (
        <Image
          height="1px"
          width="1px"
          display={"none"}
          src="https://www.facebook.com/tr?id=817935276436483&ev=PageView&noscript=1"
        />
      )}
      {children}
    </>
  );
}
