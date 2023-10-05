import React from "react";

import classes from "./DrinksMenu.module.scss";

import {
  draughtBeerAndCiderArr,
  bottledBeerAndCiderArr,
  scottishFyneAlesArr,
  ginArr,
  cocktailsArr,
  frozenCocktailsArr,
  vodkaArr,
  spiritsArr,
  shootersArr,
  maltsArr,
  redWineArr,
  roseWineArr,
  whiteWineArr,
  champagneArr,
  sparklingArr,
  mixersArr,
  softDrinks10ozArr,
  softDrinks330mlArr,
  softDrinks275mlArr,
  softDrinks250mlArr,
} from "../../dev/drinksMenu";

import DrinksItemReduced from "../../components/drinks-components/drinks-item-reduced/DrinksItemReduced";
import DrinksItemReducedForm from "../../components/drinks-components/drinks-item-reduced--form/DrinksItemReducedForm";
import DrinksItemStandard from "../../components/drinks-components/drinks-item-standard/DrinksItemStandard";
import DrinksItemStandardForm from "../../components/drinks-components/drinks-item-standard--form/DrinksItemStandardForm";
import DrinksItemStandardNoPercentage from "../../components/drinks-components/drinks-item-standard-no-percentage/DrinksItemStandardNoPercentage";
import DrinksItemStandardNoPercentageForm from "../../components/drinks-components/drinks-item-standard-no-percentage--form/DrinksItemStandardNoPercentageForm";
import DrinksWineItemStandard from "../../components/drinks-components/drinks-wine-item-standard/DrinksWineItemStandard";
import DrinksWineItemStandardForm from "../../components/drinks-components/drinks-wine-item-standard--form/DrinksWineItemStandardForm";
import DrinksWineItemReduced from "../../components/drinks-components/drinks-wine-item-reduced/DrinksWineItemReduced";
import DrinksWineItemReducedForm from "../../components/drinks-components/drinks-wine-item-reduced--form/DrinksWineItemReducedForm";
import DrinksTwoPriceItem from "../../components/drinks-components/drinks-two-price-item/DrinksTwoPriceItem";
import DrinksTwoPriceItemForm from "../../components/drinks-components/drinks-two-price-item--form/DrinksTwoPriceItemForm";

const DrinksMenu = () => {
  return (
    <React.Fragment>
      <h2 className={classes.h2}>View Restaurant Drinks Menu</h2>
      {/* ---- Draught Beer And Cider ---- */}
      <h3 className={classes.h3}>Draught Beer & Cider</h3>
      {draughtBeerAndCiderArr.map((el) => {
        return (
          <DrinksTwoPriceItem
            name={el.name}
            price1Label="Pint"
            price1Value={el.pint}
            price2Label="½ Pint"
            price2Value={el.halfPint}
            key={el.name}
          />
        );
      })}
      <DrinksTwoPriceItemForm price1Label="Pint" price2Label="½ Pint" />
      {/* ---- Bottled Beer And Cider ---- */}
      <h3 className={classes.h3}>Bottled Beer & Cider</h3>
      {bottledBeerAndCiderArr.map((el) => {
        return (
          <DrinksItemReduced name={el.name} price={el.price} key={el.name} />
        );
      })}
      <DrinksItemReducedForm />
      {/* ---- Scottish Fyne Ales ---- */}
      <h3 className={classes.h3}>Scottish Fyne Ales</h3>
      {scottishFyneAlesArr.map((el) => {
        return (
          <DrinksItemStandard
            name={el.name}
            details={el.details}
            percentage={el.percentage}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <DrinksItemStandardForm />
      {/* ---- Gin ---- */}
      <h3 className={classes.h3}>Gin</h3>
      {ginArr.map((el) => {
        return (
          <DrinksItemStandard
            name={el.name}
            details={el.details}
            percentage={el.percentage}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <DrinksItemStandardForm />
      {/* ---- Cocktails ---- */}
      <h3 className={classes.h3}>Cocktails</h3>
      {cocktailsArr.map((el) => {
        return (
          <DrinksItemStandardNoPercentage
            name={el.name}
            details={el.details}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <DrinksItemStandardNoPercentageForm />
      {/* ---- Frozen Cocktails ---- */}
      <h3 className={classes.h3}>Frozen Cocktails</h3>
      {frozenCocktailsArr.map((el) => {
        return (
          <DrinksItemStandardNoPercentage
            name={el.name}
            details={el.details}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <DrinksItemStandardNoPercentageForm />
      {/* ---- Vodka ---- */}
      <h3 className={classes.h3}>Vodka</h3>
      {vodkaArr.map((el) => {
        return (
          <DrinksItemReduced name={el.name} price={el.price} key={el.name} />
        );
      })}
      <DrinksItemReducedForm />
      {/* ---- Spirits ---- */}
      <h3 className={classes.h3}>Spirits</h3>
      {spiritsArr.map((el) => {
        return (
          <DrinksItemReduced name={el.name} price={el.price} key={el.name} />
        );
      })}
      <DrinksItemReducedForm />
      {/* ---- Shooters ---- */}
      <h3 className={classes.h3}>Shooters</h3>
      {shootersArr.map((el) => {
        return (
          <DrinksItemReduced name={el.name} price={el.price} key={el.name} />
        );
      })}
      <DrinksItemReducedForm />
      {/* ---- Malts ---- */}
      <h3 className={classes.h3}>Malts</h3>
      {maltsArr.map((el) => {
        return (
          <DrinksItemStandard
            name={el.name}
            details={el.details}
            percentage={el.percentage}
            price={el.price}
            key={el.name}
          />
        );
      })}
      <DrinksItemStandardForm />
      {/* ---- Red Wine ---- */}
      <h3 className={classes.h3}>Red Wine</h3>
      {redWineArr.map((el) => {
        return (
          <DrinksWineItemStandard
            name={el.name}
            country={el.country}
            bottle={el.bottle}
            ml250={el.ml250}
            ml175={el.ml175}
            details={el.details}
            key={el.name}
          />
        );
      })}
      <DrinksWineItemStandardForm />
      {/* ---- Rosé Wine ---- */}
      <h3 className={classes["h3-margin-top"]}>Rosé Wine</h3>
      {roseWineArr.map((el) => {
        return (
          <DrinksWineItemStandard
            name={el.name}
            country={el.country}
            bottle={el.bottle}
            ml250={el.ml250}
            ml175={el.ml175}
            details={el.details}
            key={el.name}
          />
        );
      })}
      <DrinksWineItemStandardForm />
      {/* ---- White Wine ---- */}
      <h3 className={classes["h3-margin-top"]}>White Wine</h3>
      {whiteWineArr.map((el) => {
        return (
          <DrinksWineItemStandard
            name={el.name}
            country={el.country}
            bottle={el.bottle}
            ml250={el.ml250}
            ml175={el.ml175}
            details={el.details}
            key={el.name}
          />
        );
      })}
      <DrinksWineItemStandardForm />
      {/* ---- Sparkling ---- */}
      <h3 className={classes["h3-margin-top"]}>Sparkling</h3>
      {sparklingArr.map((el) => {
        return (
          <DrinksWineItemReduced
            name={el.name}
            bottle={el.bottle}
            measure={el.measure}
            details={el.details}
            key={el.name}
          />
        );
      })}
      <DrinksWineItemReducedForm />
      {/* ---- Champagne ---- */}
      <h3 className={classes["h3-margin-top"]}>Champagne</h3>
      {champagneArr.map((el) => {
        return (
          <DrinksWineItemReduced
            name={el.name}
            bottle={el.bottle}
            measure={el.measure}
            details={el.details}
            key={el.name}
          />
        );
      })}
      <DrinksWineItemReducedForm />;{/* ---- Mixers ---- */}
      <h3 className={classes["h3-margin-top"]}>Mixers</h3>
      {mixersArr.map((el) => {
        return (
          <DrinksItemReduced name={el.name} price={el.price} key={el.name} />
        );
      })}
      <DrinksItemReducedForm />;{/* ---- Soft Drinks 10oz & 16oz ---- */}
      <h3 className={classes["h3-margin-top"]}>Soft Drinks 10oz & 16oz</h3>
      {softDrinks10ozArr.map((el) => {
        return (
          <DrinksTwoPriceItem
            name={el.name}
            price1Label="10oz"
            price1Value={el.oz10}
            price2Label="16oz"
            price2Value={el.oz16}
            key={el.name}
          />
        );
      })}
      <DrinksTwoPriceItemForm price1Label="10oz" price2Label="160z" />
      {/* ---- Soft Drinks 330ml ---- */}
      <h3 className={classes["h3-margin-top"]}>Soft Drinks 330ml</h3>
      {softDrinks330mlArr.map((el) => {
        return (
          <DrinksItemReduced name={el.name} price={el.price} key={el.name} />
        );
      })}
      <DrinksItemReducedForm />
      {/* ---- Soft Drinks 275ml ---- */}
      <h3 className={classes["h3-margin-top"]}>Soft Drinks 275ml</h3>
      {softDrinks275mlArr.map((el) => {
        return (
          <DrinksItemReduced name={el.name} price={el.price} key={el.name} />
        );
      })}
      <DrinksItemReducedForm />
      {/* ---- Soft Drinks 250ml ---- */}
      <h3 className={classes["h3-margin-top"]}>Soft Drinks 250ml</h3>
      {softDrinks250mlArr.map((el) => {
        return (
          <DrinksItemReduced name={el.name} price={el.price} key={el.name} />
        );
      })}
      <DrinksItemReducedForm />
    </React.Fragment>
  );
};

export default DrinksMenu;
