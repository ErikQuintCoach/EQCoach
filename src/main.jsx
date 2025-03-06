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
import { surveyContent } from "./components/landing-pages/page-definitions/refferal/surveyContent.jsx";

const router = createBrowserRouter([
  { path: "*", element: <App /> },
  { path: "/", element: <App /> },
  {
    path: "/umfrage",
    element: <LandingPage content={surveyContent} />,
  },
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
        <RouterProvider router={router} />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
