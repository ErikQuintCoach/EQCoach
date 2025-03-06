import online_reviews from "../entrepeneur-offer/trust_reviews.jpg";
import references from "../entrepeneur-offer/references.webp";
import landingpage_header from "../entrepeneur-offer/landingpage_header.webp";
import kroll_logo from "../entrepeneur-offer/kroll_logo.webp";
import mom_media_logo from "../entrepeneur-offer/kroll_logo.webp";
import jd_it_consulting_logo from "../entrepeneur-offer/jd_it_consulting_logo.png";

const planerQuestions = [
  {
    question: "Könntest du jetzt mehr Traumkunden annehmen?",
    anwsers: [
      {
        image: "🚀",
        text: "Ja",
      },
      {
        image: "👎",
        text: "Nein",
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
    question: "Welches Budget hast du für deine neue Webseite eingeplant?",
    anwsers: [
      { image: "💵", text: "Weniger als 1000€" },
      { image: "💸", text: "1000€ - 3000€" },
      { image: "💰", text: "Über 3000€" },
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
    icon: "❌",
    text: (
      <p>
        <b>Geld {"&"} Zeit verbrannt </b> mit anderen Agenturen
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
    icon: "📈",
    text: (
      <p>
        Ihr <b>Geschäft auf eine finanziell sichere Stufe bringen</b>
      </p>
    ),
  },
];

const procedureOfCooperation = [
  {
    icon: "💬",
    text: (
      <p>
        <b>Kostenloses Beratungsgespräch.</b> Unser Team analysiert mit dir{" "}
        <b>in 15 Minuten</b> deine aktuelle Situation und die Ziele, die du
        erreichen möchtest
      </p>
    ),
  },
  {
    icon: "👨🏻‍🎨",
    text: (
      <p>
        Unser Designer zeigt dir sein
        <b> auf deine Anforderungen zugeschnittenes Konzept</b>
      </p>
    ),
  },
  {
    icon: "🥳",
    text: (
      <p>
        <b>Du erhältst unsere Designentwürfe</b> und gibts uns in einem kurzen{" "}
        <b>15–30-minütigen</b> Termin Feedback
      </p>
    ),
  },
  {
    icon: "👨‍💻",
    text: (
      <p>
        Die <b>Entwicklung beginnt.</b> Unsere Experten setzen deine
        Anforderungen raketenschnell um
      </p>
    ),
  },
  {
    icon: "🔁",
    text: (
      <p>
        In <b>Feedbackschleifen</b> wird so lange an der Webseite gearbeitet,
        bis du <b>zu 100 % </b> zufrieden bist
      </p>
    ),
  },
  {
    icon: "📆",
    text: (
      <p>
        Deine Webseite ist <b>in 10 Tagen fertig, oder du zahlst nicht</b>
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
      "https://calendly.com/david-vonzurmuehlen-b3lb/30min",
      "_blank"
    );
  },
  text: "Jetzt Termin vereinbaren 🎯",
};

export const surveyContent = [
  {
    type: "text",
    text: "Erreiche mit unseren Website-Optimierungen noch 2024 bis zu 4 fachen Monatsumsatz 🎯",
    fontSize: 25,
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
  {
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
    audio: "momentum_media_testimonial.mp3",
    audioType: "audio/mp3",
  },
  {
    type: "text",
    text: "Auch diese Unternehmen sind durch uns mehr in der Sichtbarkeit",
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

export const revenueMagnetOfferThankYouContent = [
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
