import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import * as atatus from "atatus-spa";

atatus.config("42b798755c294b7f9a0bbf2bb87928ab").install();

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

reportWebVitals();
