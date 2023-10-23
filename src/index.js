import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ModalContextProvider } from "./context/modal-context";
import { MainMenuContextProvider } from "./context/main-menu-context";
import { KidsMenuContextProvider } from "./context/kids-menu-context";
import { DrinksMenuContextProvider } from "./context/drinks-menu-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <MainMenuContextProvider>
        <KidsMenuContextProvider>
          <DrinksMenuContextProvider>
            <App />
          </DrinksMenuContextProvider>
        </KidsMenuContextProvider>
      </MainMenuContextProvider>
    </ModalContextProvider>
  </React.StrictMode>
);
