import React, { useContext, useEffect } from "react";
import { MoonLoader } from "react-spinners";

import classes from "./DrinksMenu.module.scss";

import drinksMenuContext from "../../context/drinks-menu-context";

import BtnOpenAddItem from "../../components/buttons/open-add-item/BtnOpenAddItem";
import DraughtBeerAndCiderHeadings from "../../components/drinks-menu/draught-beer-and-cider/draught-beer-and-cider-headings/DraughtBeerAndCiderHeadings";
import DraughtBeerAndCiderItem from "../../components/drinks-menu/draught-beer-and-cider/draught-beer-and-cider-item/DraughtBeerAndCiderItem";
import NameAndPriceItem from "../../components/drinks-menu/name-and-price-item/NameAndPriceItem";
import StandardDrinksItemHeadings from "../../components/drinks-menu/standard-drinks-item-headings/StandardDrinksItemHeadings";
import StandardDrinksItem from "../../components/drinks-menu/standard-drinks-item/StandardDrinksItem";
import StandardDrinksItemNoPercentage from "../../components/drinks-menu/standard-drinks-item-no-percentage/StandardDrinksItemNoPercentage";

const DrinksMenu = () => {
  const drinksMenuCtx = useContext(drinksMenuContext);

  //////////////////////////////////////  This needs to be changed to kids menu
  useEffect(() => {
    drinksMenuCtx.getMenusHandler();
  }, []);
  ///////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <div className={classes["page-wrapper"]}>
        <h2 className={classes.h2}>Drinks Menu</h2>
        {drinksMenuCtx.state.menusLoaded === true && (
          <React.Fragment>
            <section className={classes.section}>
              {/*--- Draught Beer And Cider ---*/}
              <h3 className={classes.h3}>Draught Beer And Cider</h3>
              <DraughtBeerAndCiderHeadings />
              {drinksMenuCtx.state.draughtBeerAndCiderArr.map((item) => {
                return (
                  <DraughtBeerAndCiderItem
                    name={item.name}
                    pint={item.pint}
                    halfPint={item.halfPint}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/draught-beer-and-cider"
                    key={item._id}
                    modalType="EditDraughtBeerAndCiderItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/draught-beer-and-cider"
                type="PostDraughtBeerAndCiderItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Bottled Beer And Cider ---*/}
              <h3 className={classes.h3}>Bottled Beer And Cider</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.bottledBeerAndCiderArr.map((item) => {
                return (
                  <NameAndPriceItem
                    name={item.name}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/bottled-beer-and-cider"
                    key={item._id}
                    modalType="EditNameAndPriceItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/bottled-beer-and-cider"
                type="PostNameAndPriceItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Scottish Fyne Ales ---*/}
              <h3 className={classes.h3}>Scottish Fyne Ales</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.scottishFyneAlesArr.map((item) => {
                return (
                  <StandardDrinksItem
                    name={item.name}
                    details={item.details}
                    percentage={item.percentage}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/scottish-fyne-ales"
                    key={item._id}
                    modalType="EditStandardDrinksItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/scottish-fyne-ales"
                type="PostStandardDrinksItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Gin ---*/}
              <h3 className={classes.h3}>Gin</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.ginArr.map((item) => {
                return (
                  <StandardDrinksItem
                    name={item.name}
                    details={item.details}
                    percentage={item.percentage}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/gins"
                    key={item._id}
                    modalType="EditStandardDrinksItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/gins"
                type="PostStandardDrinksItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Cocktails ---*/}
              <h3 className={classes.h3}>Cocktails</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.cocktailsArr.map((item) => {
                return (
                  <StandardDrinksItemNoPercentage
                    name={item.name}
                    details={item.details}
                    percentage={item.percentage}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/cocktails"
                    key={item._id}
                    modalType="EditStandardDrinksItemNoPercentage"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/cocktails"
                type="PostStandardDrinksItemNoPercentage"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Frozen Cocktails ---*/}
              <h3 className={classes.h3}>Frozen Cocktails</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.frozenCocktailsArr.map((item) => {
                return (
                  <StandardDrinksItemNoPercentage
                    name={item.name}
                    details={item.details}
                    percentage={item.percentage}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/frozen-cocktails"
                    key={item._id}
                    modalType="EditStandardDrinksItemNoPercentage"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/frozen-cocktails"
                type="PostStandardDrinksItemNoPercentage"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Vodka ---*/}
              <h3 className={classes.h3}>Vodka</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.vodkaArr.map((item) => {
                return (
                  <NameAndPriceItem
                    name={item.name}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/vodka"
                    key={item._id}
                    modalType="EditNameAndPriceItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/vodka"
                type="PostNameAndPriceItem"
                menuType="drinks-menu"
              />
            </section>
          </React.Fragment>
        )}

        {drinksMenuCtx.state.menusLoaded === false && (
          <div className={classes["spinner-wrapper"]}>
            <MoonLoader color="#e08220" />
          </div>
        )}

        {drinksMenuCtx.state.menusLoaded === "error" && (
          <div className={classes["spinner-wrapper"]}>
            <p className={classes["error-message"]}>
              Menus could not be loaded. Please try again later.
            </p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default DrinksMenu;
