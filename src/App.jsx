import { Box, Center, Stack } from "@chakra-ui/react";
import { CallToAction } from "./components/CallToAction";
import ContactForm from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { InfoMaterial } from "./components/InfoMaterial";
import { Offers } from "./components/Offers";
import { Qualification } from "./components/Qualification";
import { Navigation } from "./components/header/Navigation";
import { About } from "./components/main/About";
import { MainInfo } from "./components/main/MainInfo";
import { useContaxt } from "./context/Context";
import bottom from "./images/bottom.webp";
import { Header } from "./components/header/Header";

export function App() {
  const { spacingTop } = useContaxt();

  return (
    <>
      <Navigation />
      <Stack spacing={spacingTop}>
        <Header />
        <MainInfo />
        <CallToAction />
        <InfoMaterial id={"info"} />
        <Offers id={"offers"} />
        <About id={"mission"} />
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
