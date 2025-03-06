import landingpage_header from "../entrepeneur-offer/kroll_logo.webp";
import free_coaching_image from "../entrepeneur-offer/landingpage_header.webp";

// Umfragefragen zu mentalen Herausforderungen
const mentalSurveyQuestions = [
  {
    question:
      "Welche mentalen Herausforderungen belasten dich aktuell am meisten?",
    anwsers: [
      { image: "😔", text: "Stress und Überforderung" },
      { image: "😓", text: "Angst und Unsicherheit" },
      { image: "😟", text: "Motivationsprobleme" },
      { image: "😞", text: "Isolation und Einsamkeit" },
    ],
  },
  {
    question: "Wie oft fühlst du dich in deinem Alltag mental erschöpft?",
    anwsers: [
      { image: "🔄", text: "Täglich" },
      { image: "⏳", text: "Mehrmals in der Woche" },
      { image: "🗓", text: "Einmal pro Woche" },
      { image: "🆓", text: "Selten" },
    ],
  },
  {
    question: "Hast du bereits professionelle Unterstützung gesucht?",
    anwsers: [
      { image: "✅", text: "Ja" },
      { image: "❌", text: "Nein" },
    ],
  },
  {
    question:
      "In welchen Lebensbereichen beeinträchtigen diese Herausforderungen am stärksten?",
    anwsers: [
      { image: "💼", text: "Beruf" },
      { image: "🏠", text: "Privatleben" },
      { image: "💖", text: "Beziehungen" },
      { image: "🧠", text: "Selbstwahrnehmung" },
    ],
  },
];

// Vorteile der Teilnahme und Infos zum Gratis Coaching
const mentalBenefits = [
  {
    icon: "🧘‍♀️",
    text: (
      <p>
        <b>Gratis Coaching Gewinnspiel:</b>
        <br />
        Nimm an unserer Umfrage teil und sichere dir die Chance auf ein
        exklusives Coaching, das deine mentale Stärke fördert.
      </p>
    ),
  },
  {
    icon: "📊",
    text: (
      <p>
        <b>Individuelle Analyse:</b>
        <br />
        Erhalte wertvolle Einblicke in deine aktuellen mentalen
        Herausforderungen.
      </p>
    ),
  },
  {
    icon: "🎯",
    text: (
      <p>
        <b>Praktische Tipps:</b>
        <br />
        Entdecke Strategien, um deine mentale Gesundheit nachhaltig zu
        verbessern.
      </p>
    ),
  },
];

// Umfrage-Komponente
const mentalSurvey = {
  type: "projectplaner",
  planerQuestions: mentalSurveyQuestions,
  footer: (
    <p>
      Vielen Dank für deine Teilnahme! Unter allen Teilnehmern verlosen wir ein
      Gratis Coaching.
    </p>
  ),
};

// Call-to-Action Button
const callToAction = {
  type: "callToAction",
  onClick: () => {
    window.open("https://example.com/mental-coaching-survey", "_blank");
  },
  text: "Jetzt Umfrage starten & Gratis Coaching gewinnen 🎁",
};

// Landing Page Inhalt
export const zweiterContent = [
  {
    type: "image",
    src: landingpage_header,
    alt: "Landing Page Header",
  },
  {
    type: "text",
    text: "Teile deine aktuellen mentalen Herausforderungen und sichere dir die Chance auf ein Gratis Coaching!",
    fontSize: 25,
    pt: "50px",
  },
  {
    pt: 5,
    type: "benefits",
    title: "Deine Vorteile:",
    benefits: mentalBenefits,
    spacing: 5,
  },
  callToAction,
  mentalSurvey,
  callToAction,
  {
    type: "image",
    src: free_coaching_image,
    alt: "Gratis Coaching",
    pt: 10,
  },
];

// Danke-Seite nach dem Absenden der Umfrage
export const surveyThankYouContent = [
  {
    type: "text",
    text: "Vielen Dank für deine Teilnahme!",
    fontSize: 30,
    fontWeight: "bold",
    pt: "50px",
  },
  {
    type: "text",
    text: "Wir melden uns bei dir, falls du als Gewinner des Gratis Coachings ausgewählt wirst.",
    fontSize: 20,
    pt: 10,
  },
  {
    type: "callToAction",
    text: "Mehr Infos zum Coaching",
    onClick: () => {
      window.open("https://example.com/mental-coaching-info", "_blank");
    },
  },
];
