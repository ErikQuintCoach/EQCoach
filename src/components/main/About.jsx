import { Box, Image, Text } from "@chakra-ui/react";
import { useContaxt } from "../../context/Context";
import imageDesktop from "../../images/erik_quint.webp";
import imageMobile from "../../images/erik_quint_2.webp";
import "../css/About.css";
import { HeadLine } from "../HeadLine";
import { AboutText } from "./AboutText";

export function About({ ...rest }) {
  const { variant, isTablet } = useContaxt();

  return (
    <Box {...rest}>
      <HeadLine
        text={
          <Text>
            Meine Mission mit <b>Create your Path</b>
          </Text>
        }
      />
      <AboutText
        w={1100}
        textWidth={["95vw", "90vw", "90vw", "500px"]}
        side={"right"}
        image={
          <Image
            boxShadow={variant !== "base" && "17px 17px 0px 5px #000000"}
            src={isTablet ? imageMobile : imageDesktop}
            w={variant !== "base" ? "350px" : "95vw"}
            borderRadius={10}
          />
        }
        text={
          <Text>
            Wir leben gesünder, wohlhabender und besser versorgt als je zuvor.
            Dennoch fällt es vielen schwer, ein erfülltes, selbstbestimmtes
            Leben zu führen. Kaum einer lebt noch seinen Traum. <br /> <br />
            <Text as="i">
              "Wer lebt schon seine Träume?" ... "Nur Träumer!"
            </Text>
            <br />
            <b>Oder?</b> <br /> <br />
            Mich beflügelt der Gedanke, <strong>dir</strong> zu helfen, das zu
            tun. Auf der Basis fundamentaler Aspekte deiner Selbst kreiren wir{" "}
            <strong>deinen Traum</strong>. So klar, so attraktiv, dass er zur
            Vision wird. Eine Vision, die wir nun Realität werden lassen.
            <br /> <br />
            <b>Wie schaffen wir das?</b> <br /> <br />
            <Text>
              Mithilfe von <strong>wissenschaftlich</strong> fundierten
              Ansätzen, <strong>psychologischer</strong> Expertise und{" "}
              <strong>praxiserprobten</strong> Methoden entwickeln wir deine{" "}
              <strong>Lebensvision</strong>, stärken deine{" "}
              <strong>Kompetenzen</strong> und nutzen{" "}
              <strong>deine Ressourcen</strong> – also all jene inneren und
              äußeren <strong>Stärken</strong>, die dir zur Verfügung stehen,
              wie <strong>Fähigkeiten</strong>, <strong>Wissen</strong> oder{" "}
              <strong>unterstützende Menschen</strong> – um{" "}
              <strong>Klarheit</strong> zu gewinnen.
            </Text>
          </Text>
        }
      />
    </Box>
  );
}
