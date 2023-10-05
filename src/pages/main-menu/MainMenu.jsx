import React from "react";

import classes from "./MainMenu.module.scss";

import {
  startersArr,
  sharerArr,
  mainsArr,
  saladsArr,
  steaksArr,
  steaksSidesArr,
  burgersArr,
  sidesArr,
  loadedFriesArr,
  dessertsArr,
} from "../../dev/mainMenu";

import StandardMenuItem from "../../components/main-menu-components/standard-menu-item/StandardMenuItem";
import StandardMenuItemForm from "../../components/main-menu-components/standard-menu-item--form/StandardMenuItemForm";
import StandardMenuItemAdds from "../../components/main-menu-components/standard-menu-item-adds/StandardMenuItemAdds";
import StandardMenuItemFormAdds from "../../components/main-menu-components/standard-menu-item--form-adds/StandardMenuItemFormAdds";
import StandardMenuItemFormReduced from "../../components/main-menu-components/standard-menu-item--form-reduced/StandardMenuItemFormReduced";
import StandardMenuItemFormSteaks from "../../components/main-menu-components/standard-menu-item--form-steaks/StandardMenuItemFormSteaks";

const MainMenu = () => {
  return (
    <React.Fragment>
      <h2 className={classes.h2}>View Restaurant Main Menu</h2>
      {/* ---- Starters ---- */}
      <h3 className={classes.h3}>Starters</h3>
      {startersArr.map((el) => {
        return (
          <StandardMenuItem
            name={el.name}
            details={el.details}
            dietary={el.dietary}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <StandardMenuItemForm />
      {/* ---- Sharers ---- */}
      <h3 className={classes.h3}>Sharer</h3>
      {sharerArr.map((el) => {
        return (
          <StandardMenuItem
            name={el.name}
            details={el.details}
            dietary={el.dietary}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <StandardMenuItemForm />;{/* ---- Main Menu ---- */}
      <h3 className={classes.h3}>Main Menu</h3>
      {mainsArr.map((el) => {
        if (!el.add) {
          return (
            <StandardMenuItem
              name={el.name}
              details={el.details}
              dietary={el.dietary}
              price={el.price}
              key={el.name}
            />
          );
        } else {
          return (
            <StandardMenuItemAdds
              name={el.name}
              details={el.details}
              dietary={el.dietary}
              price={el.price}
              add={el.add || ""}
              key={el.name}
            />
          );
        }
      })}
      <StandardMenuItemFormAdds />;{/* ---- Salads ---- */}
      <h3 className={classes.h3}>Salads</h3>
      {saladsArr.map((el) => {
        return (
          <StandardMenuItem
            name={el.name}
            details={el.details}
            dietary={el.dietary}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <StandardMenuItemFormReduced />;{/* ---- Steaks ---- */}
      <h3 className={classes.h3}>Steaks</h3>
      {steaksArr.map((el) => {
        return (
          <React.Fragment>
            <StandardMenuItem
              name={el.name}
              details={el.details}
              dietary={el.dietary}
              price={el.price}
              key={el.name}
            />
            {steaksSidesArr && (
              <div className={classes["u-row"]}>
                <p className={classes.add}>Sides: </p>
                <div className={classes["u-col"]}>
                  {steaksSidesArr.map((el) => {
                    return (
                      <p
                        className={classes["steak-sides"]}
                      >{`${el[0]} - £${el[1]}`}</p>
                    );
                  })}
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
      <StandardMenuItemFormSteaks />
      {/* ---- Burgers ---- */}
      <h3 className={classes.h3}>Burgers</h3>
      {burgersArr.map((el) => {
        if (!el.add) {
          return (
            <StandardMenuItem
              name={el.name}
              details={el.details}
              dietary={el.dietary}
              price={el.price}
              key={el.name}
            />
          );
        } else {
          return (
            <StandardMenuItemAdds
              name={el.name}
              details={el.details}
              dietary={el.dietary}
              price={el.price}
              add={el.add || ""}
              key={el.name}
            />
          );
        }
      })}
      <StandardMenuItemFormAdds />;{/* ---- Sides ---- */}
      <h3 className={classes.h3}>Sides</h3>
      {sidesArr.map((el) => {
        return (
          <StandardMenuItem
            name={el.name}
            details={el.details}
            dietary={el.dietary}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <StandardMenuItemFormReduced />
      {/* ---- Loaded Fries ---- */}
      <h3 className={classes.h3}>Loaded Fries</h3>
      {loadedFriesArr.map((el) => {
        return (
          <StandardMenuItem
            name={el.name}
            details={el.details}
            dietary={el.dietary}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <StandardMenuItemFormReduced />
      {/* ---- Desserts ---- */}
      <h3 className={classes.h3}>Desserts</h3>
      {dessertsArr.map((el) => {
        if (!el.scoops) {
          return (
            <StandardMenuItem
              name={el.name}
              details={el.details}
              dietary={el.dietary}
              price={el.price}
              key={el.name}
            />
          );
        } else {
          return (
            <StandardMenuItemAdds
              name={el.name}
              details={el.details}
              dietary={el.dietary}
              price={el.price}
              scoops={el.scoops}
              key={el.name}
            />
          );
        }
      })}
      <StandardMenuItemFormAdds scoops={true} />
    </React.Fragment>
  );
};

export default MainMenu;
