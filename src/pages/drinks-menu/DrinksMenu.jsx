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
import WineItemHeadings from "../../components/drinks-menu/wine-item/wine-item-headings/WineItemHeadings";
import WineItem from "../../components/drinks-menu/wine-item/wine-item-item/WineItem";
import SparklingWineHeadings from "../../components/drinks-menu/sparkling-wine/sparkling-wine-headings/SparklingWineHeadings";
import SparklingWineItem from "../../components/drinks-menu/sparkling-wine/sparkling-wine-item/SparklingWineItem";
import ChampagneItem from "../../components/drinks-menu/champagne-item/ChampagneItem";
import SoftDrinks10ozHeadings from "../../components/drinks-menu/soft-drinks-10oz/soft-drinks-10oz-headings/SoftDrinks10ozHeadings";
import SoftDrinks10ozItem from "../../components/drinks-menu/soft-drinks-10oz/soft-drinks-10oz-item/SoftDrinks10ozItem";

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
            <section className={classes.section}>
              {/*--- Spirits ---*/}
              <h3 className={classes.h3}>Spirits</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.spiritsArr.map((item) => {
                return (
                  <NameAndPriceItem
                    name={item.name}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/spirits"
                    key={item._id}
                    modalType="EditNameAndPriceItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/spirits"
                type="PostNameAndPriceItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Shooters ---*/}
              <h3 className={classes.h3}>Shooters</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.shootersArr.map((item) => {
                return (
                  <NameAndPriceItem
                    name={item.name}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/shooters"
                    key={item._id}
                    modalType="EditNameAndPriceItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/shooters"
                type="PostNameAndPriceItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Malts ---*/}
              <h3 className={classes.h3}>Malts</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.maltsArr.map((item) => {
                return (
                  <StandardDrinksItem
                    name={item.name}
                    details={item.details}
                    percentage={item.percentage}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/malts"
                    key={item._id}
                    modalType="EditStandardDrinksItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/malts"
                type="PostStandardDrinksItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Red Wine ---*/}
              <h3 className={classes.h3}>Red Wine</h3>
              <WineItemHeadings />
              {drinksMenuCtx.state.redWineArr.map((item) => {
                return (
                  <WineItem
                    name={item.name}
                    details={item.details}
                    country={item.country}
                    bottle={item.bottle}
                    ml250={item.ml250}
                    ml175={item.ml175}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/red-wine"
                    key={item._id}
                    modalType="EditWineItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/red-wine"
                type="PostWineItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Rose Wine ---*/}
              <h3 className={classes.h3}>Rosé Wine</h3>
              <WineItemHeadings />
              {drinksMenuCtx.state.roseWineArr.map((item) => {
                return (
                  <WineItem
                    name={item.name}
                    details={item.details}
                    country={item.country}
                    bottle={item.bottle}
                    ml250={item.ml250}
                    ml175={item.ml175}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/rose-wine"
                    key={item._id}
                    modalType="EditWineItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/rose-wine"
                type="PostWineItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- White Wine ---*/}
              <h3 className={classes.h3}>White Wine</h3>
              <WineItemHeadings />
              {drinksMenuCtx.state.whiteWineArr.map((item) => {
                return (
                  <WineItem
                    name={item.name}
                    details={item.details}
                    country={item.country}
                    bottle={item.bottle}
                    ml250={item.ml250}
                    ml175={item.ml175}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/white-wine"
                    key={item._id}
                    modalType="EditWineItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/white-wine"
                type="PostWineItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Sparkling Wine ---*/}
              <h3 className={classes.h3}>Sparkling Wine</h3>
              <SparklingWineHeadings />
              {drinksMenuCtx.state.sparklingWineArr.map((item) => {
                return (
                  <SparklingWineItem
                    name={item.name}
                    details={item.details}
                    centiliter={item.centiliter}
                    bottle={item.bottle}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/sparkling-wine"
                    key={item._id}
                    modalType="EditSparklingWineItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/sparkling-wine"
                type="PostSparklingWineItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Champagne ---*/}
              <h3 className={classes.h3}>Champagne</h3>
              <SparklingWineHeadings />
              {drinksMenuCtx.state.champagneArr.map((item) => {
                return (
                  <ChampagneItem
                    name={item.name}
                    details={item.details}
                    bottle={item.bottle}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/champagne"
                    key={item._id}
                    modalType="EditChampagneItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/champagne"
                type="PostChampagneItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Mixers ---*/}
              <h3 className={classes.h3}>Mixers</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.mixersArr.map((item) => {
                return (
                  <NameAndPriceItem
                    name={item.name}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/mixers"
                    key={item._id}
                    modalType="EditNameAndPriceItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/mixers"
                type="PostNameAndPriceItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Soft Drinks: 10oz & 16oz ---*/}
              <h3 className={classes.h3}>Soft Drinks: 10oz & 16oz</h3>
              <SoftDrinks10ozHeadings />
              {drinksMenuCtx.state.softDrinks10ozArr.map((item) => {
                return (
                  <SoftDrinks10ozItem
                    name={item.name}
                    oz10={item.oz10}
                    oz16={item.oz16}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/soft-drinks-10oz"
                    key={item._id}
                    modalType="EditSoftDrinks10ozItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/soft-drinks-10oz"
                type="PostSoftDrinks10ozItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Soft Drinks: 330ml ---*/}
              <h3 className={classes.h3}>Soft Drinks: 330ml</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.softDrinks330mlArr.map((item) => {
                return (
                  <NameAndPriceItem
                    name={item.name}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/soft-drinks-330ml"
                    key={item._id}
                    modalType="EditNameAndPriceItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/soft-drinks-330ml"
                type="PostNameAndPriceItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Soft Drinks: 275ml ---*/}
              <h3 className={classes.h3}>Soft Drinks: 275ml</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.softDrinks275mlArr.map((item) => {
                return (
                  <NameAndPriceItem
                    name={item.name}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/soft-drinks-275ml"
                    key={item._id}
                    modalType="EditNameAndPriceItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/soft-drinks-275ml"
                type="PostNameAndPriceItem"
                menuType="drinks-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Soft Drinks: 250ml ---*/}
              <h3 className={classes.h3}>Soft Drinks: 250ml</h3>
              <StandardDrinksItemHeadings />
              {drinksMenuCtx.state.softDrinks250mlArr.map((item) => {
                return (
                  <NameAndPriceItem
                    name={item.name}
                    price={item.price}
                    itemId={item._id}
                    url="http://127.0.0.1:5000/api/v1/drinks-menu/soft-drinks-250ml"
                    key={item._id}
                    modalType="EditNameAndPriceItem"
                    menuType="drinks-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="http://127.0.0.1:5000/api/v1/drinks-menu/soft-drinks-250ml"
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
