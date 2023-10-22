import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ModalContextProvider } from "./context/modal-context";
import { MainMenuContextProvider } from "./context/main-menu-context";
import { KidsMenuContextProvider } from "./context/kids-menu-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <MainMenuContextProvider>
        <KidsMenuContextProvider>
          <App />
        </KidsMenuContextProvider>
      </MainMenuContextProvider>
    </ModalContextProvider>
  </React.StrictMode>
);
