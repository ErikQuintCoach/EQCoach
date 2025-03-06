import { procedureOfCooperation } from "../../funnelConstants";
import landingpage_header from "./landingpage_header.webp";
import references from "./references.webp";
import online_reviews from "./trust_reviews.jpg";
import mom_media_logo from "./mom_media_logo.jpg";
import kroll_logo from "./kroll_logo.webp";
import jd_it_consulting_logo from "./jd_it_consulting_logo.png";

const planerQuestions = [
  {
    question: "Wann hast du gegründet?",
    anwsers: [
      {
        image: "📆",
        text: "2023",
      },
      {
        image: "🎉",
        text: "2024",
      },
    ],
  },
  {
    question: "Was möchtest Du mit Deiner Webseite erreichen?",
    anwsers: [
      { image: "🖥", text: "Online gefunden werden" },
      { image: "👁", text: "In die Sichtbarkeit kommen" },
      { image: "🚀", text: "Umsatz steigern" },
      { image: "🤝", text: "langfristige Kundenbeziehungen" },
      { image: "👷‍♂️", text: "Mitarbeitergewinnung" },
    ],
  },
  {
    question: "Hast du bereits eine bestehende Webseite?",
    anwsers: [
      {
        image: "👍",
        text: "Ja",
      },
      {
        image: "👎",
        text: "Nein",
      },
    ],
  },
  {
    question: "Wann können wir dich am besten erreichen?",
    anwsers: [
      { image: "🌞", text: "Jederzeit" },
      { image: "🕙", text: "Vormittags (8-12 Uhr)" },
      { image: "🕓", text: "Nachmittags (12-18 Uhr)" },
      { image: "🌙", text: "Abends (ab 18 Uhr)" },
    ],
  },
];

const offerResults = [
  {
    icon: "🚀",
    text: (
      <p>
        <b>Nur Du und Deine Vision:</b> <br /> Arbeite endlich wieder an deinem
        Kerngeschäft, ohne dich von unnötigen Kleinaufgaben ablenken zu lassen.
      </p>
    ),
  },
  {
    icon: "💰",
    text: (
      <p>
        <b>Kundenanfragen am Fließband:</b>
        <br /> Nutze deine erhöhte Sichtbarkeit, damit Traumkunden zu dir kommen
      </p>
    ),
  },
  {
    icon: "📈",
    text: (
      <p>
        <b>Werde wahrgenommen:</b> <br />
        Deine potentiellen Kunden, erkennen direkt deinen qualitativen Marktwert
      </p>
    ),
  },
];

const painPoints = [
  {
    icon: "😱",
    text: (
      <p>
        Du hast <b>ständig die Sorge</b>, deine Miete nicht bezahlen zu können
      </p>
    ),
  },
  {
    icon: "😩",
    text: (
      <p>
        <b>Deine Kunden springen ab</b> und landen bei der Konkurrenz
      </p>
    ),
  },
  {
    icon: "🎢",
    text: (
      <p>
        <b>Deine Umsätze sind nicht vorhersehbar.</b> Mal kommen Aufträge, mal
        nicht
      </p>
    ),
  },
];

const reasonsForOtherCustomers = [
  {
    icon: "🧭",
    text: (
      <p>
        Ihnen <b>planbar Umsätze generieren</b>
      </p>
    ),
  },
  {
    icon: "💎",
    text: (
      <p>
        Sie <b>als Premium-Dienstleister positionieren</b>
      </p>
    ),
  },
  {
    icon: "🤝",
    text: (
      <p>
        Von Anfang an als <b>langfristiger Partner</b> an Ihrer Seite sind
      </p>
    ),
  },
];

const projectPlaner = {
  type: "projectplaner",
  planerQuestions: planerQuestions,
  footer: (
    <p>
      Wir melden uns <u>innerhalb von 24 h</u> bei dir.
    </p>
  ),
};

const callToAction = {
  type: "callToAction",
  onClick: () => {
    window.open(
      "https://calendly.com/webwerk_am_meer/gruender_angebot",
      "_blank"
    );
  },
  text: "Jetzt Termin vereinbaren 🎯",
};

export const entrepreneurOfferContent = [
  /*   { type: "image", src: landingpage_header },
   */ {
    type: "text",
    text: "Was wäre, wenn sich dein Monatsumsatz durch eine neue Webseite dieses Jahr noch vervierfacht? 📈",
    /* text: "Erreiche mit unseren Webseitenstrategien noch in 2024 dein bis zu 3-4 fachen Wunschumsatz pro Monat 🎯", */
    fontSize: 24,
    pt: "50px",
  },
  {
    pt: 5,
    type: "benefits",
    title: "Du wirst folgende Veränderungen sehen...",
    benefits: offerResults,
    spacing: 5,
  },
  {
    type: "whatsAppAudio",
    title: (
      <p>
        Folgendes änderte sich für{" "}
        <i>
          <u>Kroll Bauausführungen</u>
        </i>{" "}
        ...
      </p>
    ),
    image: kroll_logo,
    pt: 5,
    fontSize: 20,
    audio: "kroll_bauausfuehrungen_testimonial.mp3",
    audioType: "audio/mp3",
  },
  callToAction,
  projectPlaner,
  {
    pt: 5,
    type: "benefits",
    title: "Sicher kennst du das auch...",
    benefits: painPoints,
    spacing: 5,
  },
  callToAction,
  {
    pt: 5,
    type: "benefits",
    title: "Viele Kunden kommen zu uns, damit wir...",
    benefits: reasonsForOtherCustomers,
    spacing: 5,
  },
  /*   {
    type: "whatsAppAudio",
    title: (
      <p>
        <i>
          <u>JD IT Consulting</u>
        </i>{" "}
        vetraut uns, weil...
      </p>
    ),
    image: jd_it_consulting_logo,
    pt: 5,
    fontSize: 20,
    audio: "talking.wav",
    audioType: "audio/wav",
  }, */
  {
    type: "text",
    text: "Diese Unternehmen vertrauen auf uns",
    fontSize: 18,
    fontWeight: "extrabold",
    pt: 10,
  },
  { type: "image", px: ["5%", "5%", "20%", "20%"], src: references },
  { type: "image", src: online_reviews },
  callToAction,
  {
    pt: 10,
    type: "benefits",
    title: "Wie läuft unsere Zusammenarbeit ab?",
    benefits: procedureOfCooperation,
    spacing: 5,
  },
  {
    type: "whatsAppAudio",
    title: (
      <p>
        Das sagt die{" "}
        <i>
          <u>Momentum Media GmbH</u>
        </i>{" "}
        über unsere Zusammenarbeit...
      </p>
    ),
    image: mom_media_logo,
    pt: 5,
    fontSize: 18,
    audio: "momentum_media_testimonial.mp3",
    audioType: "audio/mp3",
  },
  callToAction,
  { type: "image", src: online_reviews },
  projectPlaner,
];

export const entrepreneurOfferThankYouContent = [
  {
    type: "contactPerson",
  },
  {
    type: "callToAction",
    text: "mehr erfahren 🔎",
    onClick: () => {
      window.open("https://webwerk-am-meer.de", "_blank");
    },
  },
  {
    pt: 10,
    type: "benefits",
    title: "So geht es jetzt weiter:",
    benefits: procedureOfCooperation,
    alignItems: "flex-start",
    iconSize: 38,
    spacing: 5,
  },
  { type: "image", src: online_reviews },
];
