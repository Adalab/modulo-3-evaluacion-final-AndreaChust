// Fichero src/index.jsx (código nuevo)

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  </StrictMode>,
);