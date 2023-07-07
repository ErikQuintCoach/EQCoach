import {
  Avatar,
  Box,
  Center,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import zitat from "../../images/Zitat-1.png";
import { HeadLine } from "../HeadLine";
import { Zitat } from "./Zitat";

export function Testimonials() {
  return (
    <>
      <Box w={"100%"}>
        <HeadLine
          text={
            <Text>
              Welcher <b>Meinung</b> unsere bisherigen Kunden sind
            </Text>
          }
        />
        <Zitat
          problem={
            "Burcu Frohnert ist schon selbstständig als Schulungsanbieterin in der Beauty Branche tätig gewesen. Sie konnte ihr Geschäft nicht von alleine weiter skalieren, da ihr schlichtweg die Prozesse und das Wissen gefehlt haben, um Aufgaben effizient abzugeben und Mitarbeiter erfolgreich einzuarbeiten."
          }
          target={
            "Ihr Ziel war es, mehr aus sich selbst herauszuholen und von einer Selbstständigen, die alles selbst erledigt, zu einer Unternehmerin mit Mitarbeitern aufzusteigen."
          }
          solution={
            "Mithilfe von Baulig Consulting konnte Burcu Frohnert ihre Sorgen, Mitarbeiter einzustellen, überwinden und dank des Geschäftsführertrainings ein Team, bestehend aus 8 Mitarbeitern einstellen und effizient einlernen. Das Unternehmen hat mittlerweile einen Monatsumsatz von 170.000 Euro und strebt die 500.000 Euro an."
          }
          side={"left"}
          name={"Dr. Carmen Meyer"}
          job={"Coaching für Aktieninvestments"}
          quote={
            "Im ersten Monat, als ich mit Tobias zusammengearbeitet habe, konnte ich meinen Monatsumsatz auf 350.000€ netto skalieren."
          }
        />
        <Zitat
          problem={
            "Dem 3 Mann Coaching-Team der Baumdick GmbH fehlte es an Professionalität, um von dem monatlichen Umsatz von 40.000 Euro wirklich erfolgreich zu skalieren. Es gab keinen replizierbaren Vertriebsprozess und auch das Coaching der Kunden verlief unstrukturiert, wodurch nur wenige Kunden betreut werden konnten."
          }
          target={
            "Ziel war es das Coaching auf einen 6-stelligen Monatsumsatz zu skalieren. Besonders entscheidend war hierfür die systematisierte Abarbeitung der vielen Kundenanfragen. Mittlerweile liegt der Umsatz der Baumdick GmbH bei 384.000 Euro im Monat."
          }
          solution={
            "Durch einen strukturierteren Vertriebsprozess und einem Neuaufbau des eigentlichen Coachings konnte die Baumdick GmbH endlich mehr Kunden annehmen und diese sogar noch besser betreuen. Neue Mitarbeiter werden ab sofort digital gewonnen und ausgebildet."
          }
          side={"right"}
          name={"Elias Kaltenberger"}
          job={"Videographie und Consulting"}
          quote={
            "Durch Tobias durfte ich lernen, was es bedeutet, ein freies und selbstbestimmtes Leben zu führen."
          }
        />
      </Box>
    </>
  );
}
