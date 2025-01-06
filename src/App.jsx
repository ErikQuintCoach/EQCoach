import {
  Stack,
  Box,
  Center,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Navigation } from "./components/header/Navigation";
import { Header } from "./components/header/Header";
import { Success } from "./components/main/Success";
import { About } from "./components/main/About";
import { HeaderImage } from "./components/header/HeaderImage";
import { Services } from "./components/main/Services";
import { CallToAction } from "./components/CallToAction";
import { Process } from "./components/Process";
import ContactForm from "./components/ContactForm";
import { Footer } from "./components/Footer";
import bottom from "./images/bottom.webp";
import { useContaxt } from "./context/Context";
import { Offers } from "./components/Offers";
import { MainInfo } from "./components/main/MainInfo";
import { InfoMaterial } from "./components/InfoMaterial";
import { Qualification } from "./components/Qualification";

export function App() {
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const { textCollection, spacingTop } = useContaxt();

  return (
    <>
      <Box h={`${(4 / 6) * 100}vw`}>
        <Box id="header">
          <Navigation />
          <HeaderImage />
        </Box>
        {variant === "lg" && (
          <>
            <Spacer />
            <Header position={"absolute"} top={0} />
            <Spacer />
          </>
        )}
        {variant !== "lg" && (
          <>
            <Stack pt={`${(4 / 6) * 100}vw`} h={"100vh"}>
              <Spacer />
              <Header mt={"25px"} />
              <Spacer />
            </Stack>
          </>
        )}
      </Box>
      {variant !== "lg" && <Box h={variant === "base" ? "70vh" : "70vh"} />}
      <Stack spacing={spacingTop} pt={["0px", "0px", "0px", "0px"]}>
        <About id={"mission"} />
        <MainInfo />
        <CallToAction />
        <InfoMaterial id={"info"} />
        <Offers id={"offers"} />
        <Qualification id={"qualification"} />
        <Box
          id={"contact"}
          backgroundImage={bottom}
          h={1270}
          backgroundRepeat={"no-repeat"}
        >
          <Center h={"100%"}>
            <ContactForm />
          </Center>
        </Box>
      </Stack>
      <Footer />
    </>
  );
}

export default App;
