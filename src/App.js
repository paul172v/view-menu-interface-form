import React, { useState } from "react";
import classes from "./App.module.scss";

import MainMenu from "./pages/main-menu/MainMenu";
import KidsMenu from "./pages/kids-menu/KidsMenu";
import DrinksMenu from "./pages/drinks-menu/DrinksMenu";

function App() {
  const [page, setPage] = useState(null);

  const goToMainMenu = () => {
    setPage("main-menu");
  };

  const goToKidsMenu = () => {
    setPage("kids-menu");
  };
  const goToDrinksMenu = () => {
    setPage("drinks-menu");
  };

  return (
    <div className={classes.page}>
      <div className={classes.frame}>
        <h1 className={classes.h1}>View Menu Interface Form</h1>

        <div className={classes["u-row"]}>
          <button
            className={classes["button-page-select"]}
            onClick={goToMainMenu}
          >
            Main Menu
          </button>
          <button
            className={classes["button-page-select"]}
            onClick={goToKidsMenu}
          >
            Kids Menu
          </button>
          <button
            className={classes["button-page-select"]}
            onClick={goToDrinksMenu}
          >
            Drinks Menu
          </button>
        </div>

        {page === "main-menu" && <MainMenu />}

        {page === "kids-menu" && <KidsMenu />}

        {page === "drinks-menu" && <DrinksMenu />}
      </div>
    </div>
  );
}

export default App;
