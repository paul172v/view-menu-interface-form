import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ModalContextProvider } from "./context/modal-context";
import { MainMenuContextProvider } from "./context/main-menu-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <MainMenuContextProvider>
        <App />
      </MainMenuContextProvider>
    </ModalContextProvider>
  </React.StrictMode>
);
