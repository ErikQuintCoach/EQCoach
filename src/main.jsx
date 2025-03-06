import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { ContextProvider } from "./context/Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Imprint } from "./routes/Imprint copy.jsx";
import { Datasecruity } from "./routes/Datasecruity.jsx";
import { Navigation } from "./components/header/Navigation.jsx";
import { LandingPage } from "./components/landing-pages/LandingPage.jsx";
import {
  surveyContent,
  surveyThankYouContent,
} from "./components/landing-pages/page-definitions/refferal/surveyContent.jsx";
import { CookieProvider } from "./components/cookies/CookieProvider.jsx";
// Hier den Inhalt für die neue Landing Page reinladen (siehe Beispielhaft "surveyContent")

const router = createBrowserRouter([
  { path: "*", element: <App /> },
  { path: "/", element: <App /> },
  /*Hier eine neue Route anlegen*/
  /*
  Beispiel Landing Page Route:

  {
    path: "hier-route-angeben",
    element: <LandingPage content={hier-content-objekt-hin} />,
  },
    {
    path: "/hier-route-angeben/danke",
    element: <LandingPage content={hier-thank-you-ontent-objekt-hin} />,
  },

  */
  /*   {
    path: "/umfrage",
    element: <LandingPage content={surveyContent} />,
  },
  {
    path: "/umfrage/danke",
    element: <LandingPage content={surveyThankYouContent} />,
  }, */
  {
    path: "/impressum",
    element: (
      <Box>
        <Navigation />
        <Imprint />
      </Box>
    ),
  },
  {
    path: "/datenschutz",
    element: (
      <Box>
        <Navigation />
        <Datasecruity />
      </Box>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextProvider>
        <CookieProvider>
          <RouterProvider router={router} />
        </CookieProvider>
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
