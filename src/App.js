import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./App.module.scss";

import modalContext from "./context/modal-context";

import MainMenu from "./pages/main-menu/MainMenu";
import KidsMenu from "./pages/kids-menu/KidsMenu";
import DrinksMenu from "./pages/drinks-menu/DrinksMenu";

import ModalBackground from "./components/modals/modal-background/ModalBackground";
import ModalDeleteItem from "./components/modals/delete-item/ModalDeleteItem";
import ModalEditStandardItem from "./components/modals/main-menu/edit--standard-item/ModalEditStandardItem";
import ModalPostStandardItem from "./components/modals/main-menu/post--standard-item/ModalPostStandardItem";
import ModalEditStandardItemWithAdds from "./components/modals/main-menu/edit--standard-item-with-adds/ModalEditStandardItemWithAdds";
import ModalPostStandardItemWithAdds from "./components/modals/main-menu/post--standard-item-with-adds/ModalPostStandardItemWithAdds";
import ModalEditStandardItemNoDetails from "./components/modals/main-menu/edit--standard-item-no-details/ModalEditStandardItemNoDetails";
import ModalPostStandardItemNoDetails from "./components/modals/main-menu/post--standard-item-no-details/ModalPostStandardItemNoDetails";
import ModalEditStandardItemWithScoops from "./components/modals/main-menu/edit-standard-item-with-scoops/ModalEditStandardItemWithScoops";
import ModalPostStandardItemWithScoops from "./components/modals/main-menu/post--standard-item-with-scoops/ModalPostStandardItemWithScoops";
import ModalEditMakeAMealItem from "./components/modals/kids-menu/edit--make-a-meal-item/ModalEditMakeAMealItem";
import ModalPostMakeAMealItem from "./components/modals/kids-menu/post--standard-item/ModalPostStandardItem";
import ModalEditDraughtBeerAndCiderItem from "./components/modals/drinks-menu/edit--draught-beer-and-cider-item/ModalEditDraughtBeerAndCiderItem";
import ModalPostDraughtBeerAndCiderItem from "./components/modals/drinks-menu/post--draught-beer-and-cider-item/ModalPostDraughtBeerAndCiderItem";
import ModalEditNameAndPriceItem from "./components/modals/drinks-menu/edit--name-and-price-item/ModalEditNameAndPriceItem";
import ModalPostNameAndPriceItem from "./components/modals/drinks-menu/post--name-and-price-item/ModalPostNameAndPriceItem";
import ModalEditStandardDrinksItem from "./components/modals/drinks-menu/edit--standard-drinks-item/ModalEditStandardDrinksItem";
import ModalPostStandardDrinksItem from "./components/modals/drinks-menu/post--standard-drinks-item/ModalPostStandardDrinksItem";
import ModalEditStandardDrinksItemNoPercentage from "./components/modals/drinks-menu/edit--standard-drinks-item-no-percentage/ModalEditStandardDrinksItemNoPercentage";
import ModalPostStandardDrinksItemNoPercentage from "./components/modals/drinks-menu/post--standard-drinks-item-no-percentage/ModalPostStandardDrinksItemNoPercentage";

import BtnPageSelect from "./components/buttons/page-select/BtnPageSelect";

function App() {
  const [page, setPage] = useState(null);

  const ctx = useContext(modalContext);

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
    <React.Fragment>
      <div className={classes.background}>
        <div className={classes.page}>
          <h1 className={classes.h1}>View Menu Interface Form</h1>

          <div className={classes["u-row"]}>
            <BtnPageSelect label="Main Menu" function={goToMainMenu} />
            <BtnPageSelect label="Kids Menu" function={goToKidsMenu} />
            <BtnPageSelect label="Drinks Menu" function={goToDrinksMenu} />
          </div>

          {page === "main-menu" && <MainMenu />}

          {page === "kids-menu" && <KidsMenu />}

          {page === "drinks-menu" && <DrinksMenu />}
        </div>

        <div className={classes["modal-background"]} />
        <div className={classes["modal-form-window"]}></div>
        <div className={classes["modal-confirm-delete-window"]}></div>
      </div>

      {/***** Edit Modals ******/}
      {ctx.modalActive === true &&
        ReactDOM.createPortal(
          <ModalBackground />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "DeleteItem" &&
        ReactDOM.createPortal(
          <ModalDeleteItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditStandardItem" &&
        ReactDOM.createPortal(
          <ModalEditStandardItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditStandardItemWithAdds" &&
        ReactDOM.createPortal(
          <ModalEditStandardItemWithAdds />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditStandardItemNoDetails" &&
        ReactDOM.createPortal(
          <ModalEditStandardItemNoDetails />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditStandardItemWithScoops" &&
        ReactDOM.createPortal(
          <ModalEditStandardItemWithScoops />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditMakeAMealItem" &&
        ReactDOM.createPortal(
          <ModalEditMakeAMealItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditDraughtBeerAndCiderItem" &&
        ReactDOM.createPortal(
          <ModalEditDraughtBeerAndCiderItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditNameAndPriceItem" &&
        ReactDOM.createPortal(
          <ModalEditNameAndPriceItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditStandardDrinksItem" &&
        ReactDOM.createPortal(
          <ModalEditStandardDrinksItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "EditStandardDrinksItemNoPercentage" &&
        ReactDOM.createPortal(
          <ModalEditStandardDrinksItemNoPercentage />,
          document.getElementById("modal-root")
        )}

      {/***** Post Modals ******/}
      {ctx.modalActive === true &&
        ctx.modalType === "PostStandardItem" &&
        ReactDOM.createPortal(
          <ModalPostStandardItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "PostStandardItemWithAdds" &&
        ReactDOM.createPortal(
          <ModalPostStandardItemWithAdds />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "PostStandardItemNoDetails" &&
        ReactDOM.createPortal(
          <ModalPostStandardItemNoDetails />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "PostStandardItemWithScoops" &&
        ReactDOM.createPortal(
          <ModalPostStandardItemWithScoops />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "PostMakeAMealItem" &&
        ReactDOM.createPortal(
          <ModalPostMakeAMealItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "PostDraughtBeerAndCiderItem" &&
        ReactDOM.createPortal(
          <ModalPostDraughtBeerAndCiderItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "PostNameAndPriceItem" &&
        ReactDOM.createPortal(
          <ModalPostNameAndPriceItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "PostStandardDrinksItem" &&
        ReactDOM.createPortal(
          <ModalPostStandardDrinksItem />,
          document.getElementById("modal-root")
        )}
      {ctx.modalActive === true &&
        ctx.modalType === "PostStandardDrinksItemNoPercentage" &&
        ReactDOM.createPortal(
          <ModalPostStandardDrinksItemNoPercentage />,
          document.getElementById("modal-root")
        )}
    </React.Fragment>
  );
}

export default App;
