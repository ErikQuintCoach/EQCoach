import {
  Button,
  Spacer,
  Text,
  Input,
  Textarea,
  Center,
  HStack,
  Stack,
  Box,
  useBreakpointValue,
  NumberInput,
  Heading,
} from "@chakra-ui/react";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useToastHook } from "./useToastHook";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContaxt } from "../context/Context";

const ContactData = ({ height, width, call, setCall }) => {
  const variant = useBreakpointValue({ base: "base", sm: "sm" });

  const { color } = useContaxt();

  const TelIcon = () => {
    return (
      <HStack>
        <Box
          w={100}
          h={100}
          bgColor={color.mainColor}
          color="white"
          borderRadius={5}
          onClick={() => {
            window.location = "tel:017631009017";
          }}
        >
          <Center w={"100%"} h={"100%"}>
            <ImMobile fontSize={60} />
          </Center>
        </Box>
        <Stack>
          <Text
            cursor={"pointer "}
            onClick={() => {
              window.location = "tel:017631009017";
            }}
            fontSize={variant === "base" ? 20 : 26}
            fontWeight="bold"
          >
            {" "}
            +49 176 31009017
          </Text>
          {/*           <Text fontSize={variant === "base" ? 18 : 22} color="gray" w={230}>
            {" "}
            Mo. - So. 10:00 - 22:00
          </Text> */}
        </Stack>
      </HStack>
    );
  };

  const MailIcon = () => {
    return (
      <HStack>
        <Box
          w={100}
          h={100}
          bgColor={color.mainColor}
          color="white"
          cursor={"pointer"}
          onClick={() => {
            window.location = "mailto:erik_quint@yahoo.de";
          }}
          borderRadius={5}
        >
          <Center w={"100%"} h={"100%"}>
            <AiOutlineMail fontSize={60} />
          </Center>
        </Box>
        <Text
          onClick={() => {
            window.location = "mailto:erik_quint@yahoo.de";
          }}
          fontSize={variant === "base" ? 18 : 26}
          fontWeight="bold"
        >
          {variant === "base" ? (
            <>erik_quint@yahoo.de</>
          ) : (
            <>erik_quint@yahoo.de</>
          )}
        </Text>
      </HStack>
    );
  };

  return (
    <>
      {variant !== "md" ? (
        <Stack h={height} w={width}>
          <TelIcon />
          <Spacer />
          <MailIcon />
          <Spacer />
        </Stack>
      ) : (
        <HStack h={height} w={width}>
          <TelIcon />
          <Spacer />
          <MailIcon />
          <Spacer />
        </HStack>
      )}
    </>
  );
};

export function ContactForm() {
  const [state, newToast] = useToastHook();
  const [call, setCall] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const { color } = useContaxt();
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const onSubmit = async (data) => {
    const { name, email, message, phone } = data;
    try {
      axios.post(
        `https://webwerk-am-meer.de/php/contactFormular.php?name=${name}&tel=${phone}&email=${email}&message=${message}`
      );
      reset();
      newToast({
        title: "Danke für ihre Anfrage",
        message:
          "Ihre Anfrage wurde versendet, wir melden uns so schnell wie möglich bei Ihnen",
        status: "success",
      });
    } catch (e) {
      console.log(e);
    }
  };
  const contentHeight = 250;

  const Header = () => {
    return (
      <Box textAlign={"left"} fontWeight="bold" maxW={800}>
        {window.location.pathname !== "/kontakt" && (
          <Text fontSize={25} color={"gray"} pt={2}>
            {" "}
            Fragen, Anliegen, Kooperationsideen?{" "}
          </Text>
        )}
        <Box
          fontSize={[23, 27, 40, 40, 42]}
          width={variant === "lg" && "16ch"}
          letterSpacing={[-2, -2, -3, -3]}
        >
          {" "}
          Meld dich bei mir
        </Box>
        {variant === "lg" && (
          <ContactData
            height={contentHeight}
            call={call}
            setCall={(val) => setCall(val)}
          />
        )}
      </Box>
    );
  };

  return (
    <Center pt={0}>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <HStack w={["90vw", "90vw", "90vw", "95vw", "90vw"]}>
          {variant === "lg" && <Header />}
          {variant === "lg" ? (
            <>
              <Spacer />
              <Stack h={contentHeight} w={"30vw"}>
                <Textarea
                  borderWidth={1}
                  borderColor={"black"}
                  bgColor={"white"}
                  h={contentHeight}
                  placeholder={"Wie können wir ihnen weiterhelfen?"}
                  {...register("message", {
                    required: true,
                  })}
                />
                <Spacer />
                <Button
                  w={"50%"}
                  bgColor={color.mainColor}
                  rightIcon={<ArrowForwardIcon />}
                  type="submit"
                  color="white"
                >
                  SENDEN
                </Button>
              </Stack>
              <Spacer />
              <Stack h={contentHeight} w={300}>
                <Box>
                  <Input
                    borderWidth={1}
                    borderColor={"black"}
                    bgColor={"white"}
                    aria-label="Wie heißen Sie?"
                    placeholder={"Ihr Name *"}
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Bitte geben Sie ihren Namen ein",
                      },
                      maxLength: {
                        value: 30,
                        message: "Bitte geben Sie 30 Zeichen, oder weniger ein",
                      },
                    })}
                  />
                  {errors.email && (
                    <Text color="red" fontSize="15">
                      Bitte geben Sie ihren Namen ein
                    </Text>
                  )}
                </Box>
                <Spacer />
                <Box>
                  <Input
                    borderWidth={1}
                    borderColor={"black"}
                    bgColor={"white"}
                    aria-label="Wie lautet Ihre Emailadresse?"
                    placeholder={"Ihre Emailadresse *"}
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                  />
                  {errors.email && (
                    <Text color="red" fontSize="15">
                      Bitte geben Sie eine gültige Emailadresse ein
                    </Text>
                  )}
                </Box>
                <Spacer />
                <Input
                  borderWidth={1}
                  borderColor={"black"}
                  bgColor={"white"}
                  aria-label="Wie lautet Ihre Telefonnummer?"
                  placeholder={"Ihre Telefonnummer"}
                  {...register("phone")}
                  type={"tel"}
                />
              </Stack>
            </>
          ) : (
            <Box>
              <Stack alignItems={"flex-start"}>
                <Header />
                <ContactData
                  call={call}
                  setCall={(val) => setCall(val)}
                  width={"90vw"}
                />
                <Spacer />
                <Stack w={"90vw"}>
                  <Textarea
                    borderWidth={1}
                    borderColor={"black"}
                    bgColor={"white"}
                    h={contentHeight - 100}
                    placeholder={"Wie können wir ihnen weiterhelfen?"}
                    {...register("message", {
                      required: true,
                    })}
                  />
                </Stack>
                <Spacer />
                <Stack>
                  <Box>
                    <Input
                      borderWidth={1}
                      borderColor={"black"}
                      bgColor={"white"}
                      aria-label="Wie heißen Sie?"
                      w={"90vw"}
                      placeholder={"Ihr Name *"}
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Bitte geben Sie ihren Namen ein",
                        },
                        maxLength: {
                          value: 30,
                          message:
                            "Bitte geben Sie 30 Zeichen, oder weniger ein",
                        },
                      })}
                    />
                    {errors.email && (
                      <Text color="red" fontSize="15">
                        Bitte geben Sie ihren Namen ein
                      </Text>
                    )}
                  </Box>
                  <Spacer />
                  <Box>
                    <Input
                      borderWidth={1}
                      borderColor={"black"}
                      bgColor={"white"}
                      aria-label="Wie lautet Ihre Emailadresse?"
                      placeholder={"Ihre Emailadresse *"}
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                    />
                    {errors.email && (
                      <Text color="red" fontSize="15">
                        Bitte geben Sie eine gültige Emailadresse ein
                      </Text>
                    )}
                  </Box>
                  <Spacer />
                  <NumberInput
                    placeholder={"Ihre Telefonnummer"}
                    {...register("phone")}
                  />
                  <Button
                    w={"100%"}
                    bgColor={color.mainColor}
                    color="white"
                    rightIcon={<ArrowForwardIcon />}
                    type="submit"
                  >
                    SENDEN
                  </Button>
                </Stack>
              </Stack>
            </Box>
          )}
        </HStack>
      </form>
    </Center>
  );
}

export default ContactForm;
