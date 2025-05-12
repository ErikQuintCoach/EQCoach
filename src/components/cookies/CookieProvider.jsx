import { Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContaxt } from "../../context/Context";
import { CookieOptIn } from "./CookieOptIn";

export function CookieProvider({ children }) {
  const { cookies } = useContaxt();
  /*   useEffect(() => {
    if (cookies) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "817935276436483");
      fbq("track", "PageView");
    }
  }, [cookies]); */

  return (
    <>
      <CookieOptIn />
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
