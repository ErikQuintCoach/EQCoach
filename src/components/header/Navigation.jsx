import { HStack, Image, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useContaxt } from "../../context/Context";
import logo from "../../images/logo/logo_big.png";
import { ActionButton } from "../ActionButton";
import { BurgerMenu } from "./BurgerMenu";
import { HeaderLink } from "./HeaderLink";
import { services } from "./services";

export function Navigation({ refs }) {
  const { color } = useContaxt();
  const navigate = useNavigate();
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  function executeScroll(ref) {
    const element = document.getElementById(ref);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <>
      <HStack
        w={"100%"}
        bg={"white"}
        h={["70px", "90px", "90px", "90px"]}
        px={[5, 7, "40px", "20px"]}
        zIndex={5}
        position={"fixed"}
        top={0}
        borderBottomColor={color.mainColor}
        borderBottomWidth={0.3}
        boxShadow={`0px -1px 10px 2px ${color.mainColor}`}
      >
        <Image maxHeight={"60px"} src={logo} />
        <Spacer />
        {variant === "lg" ? (
          <>
            {services.map((service, i) => {
              return (
                <HeaderLink
                  key={i}
                  service={service}
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      executeScroll(service.ref);
                    }, 300);
                  }}
                />
              );
            })}
            <Spacer />
            <ActionButton h={"50px"} fontSize={"13px"} />
          </>
        ) : (
          <>
            {false ? (
              <BurgerMenu
                refs={refs}
                executeScroll={(val) => executeScroll(val)}
              />
            ) : null}
          </>
        )}
      </HStack>
    </>
  );
}
