import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ModalActiveContextProvider } from "./context/modal-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalActiveContextProvider>
      <App />
    </ModalActiveContextProvider>
  </React.StrictMode>
);
