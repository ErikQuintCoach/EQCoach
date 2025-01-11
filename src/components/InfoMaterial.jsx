import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useContaxt } from "../context/Context";
import { HeadLine } from "./HeadLine";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function InfoMaterial({ ...rest }) {
  const testimonials = [
    {
      title: "Marcus, 42",
      description: `.... durch Erik konnte ich die Ursache meiner mentalen Blockaden verstehen und sie über den Coaching Prozess hinweg lösen. Dafür bin ich unendlich dankbar!`,
      link: null, // No link for Marcus
      className: "marcus-background",
      image: "Marcus_42 image.webp", // Use the exact filename from the images folder
      type: "testimonial",
    },
    {
      title: "Elaine, 21",
      description: `... so unterstützend und wertvoll. Ich habe mich wohl und sicher gefühlt,.., wertvolle Erkenntnisse gewonnen. Insgesamt hat es mich gestärkt und motiviert.`,
      link: null, // No link for Elaine
      className: "elaine-background",
      image: "Elaine Foto.webp", // Use the exact filename from the images folder
      type: "testimonial",
    },
    {
      title: "Veronika, 29",
      description: `.... Durch seine klaren, gezielten Fragen und empathische Art sind wir in eine Tiefe vorgedrungen, die nachhaltige Veränderungen ermöglicht hat. Absolut empfehlenswert!`,
      link: null,
      className: "veronika-background",
      image: "Veronika_Bild.webp",
      type: "testimonial",
    },
    {
      title: "Coaching ist nachweislich effektiv!",
      description: `Wissenschaftliche Studien zeigen konsequent, dass Coaching Menschen dabei hilft, ihre persönlichen und beruflichen Ziele zu erreichen.`,
      link: "https://www.rauen.de/coaching-report/definition-coaching/wirksamkeit.html",
      className: "coaching-effective-background",
      image: null, // No image for the study tile
      type: "study",
    },
    {
      title: "Lisa, 28",
      description: `...Erik weiß, wovon er spricht. Er hat mit mir meine tiefliegenden Glaubenssätze beleuchtet mich dazu gebracht, aus meiner Komfortzone auszutreten.Ich habe mich sehr wohl gefühlt und würde es immer wieder tun. `,
      link: null, // No link for Lisa
      className: "veronika-background",
      image: "Lisa_Foto.webp",
      type: "testimonial",
    },
  ];

  const { spacingTop } = useContaxt();

  return (
    <Stack spacing={"50px"} {...rest}>
      <HeadLine
        text={
          <Text>
            Was <b>Klienten</b> vor dir über mich <b>sagen</b>
          </Text>
        }
      />
      <TestimonialCarousel testimonials={testimonials} />
    </Stack>
  );
}
