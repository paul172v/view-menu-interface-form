import React from "react";

import classes from "./KidsMenu.module.scss";

import {
  startersArr as kidsStartersArr,
  mainsArr as kidsMainsArr,
  makeAMealArr as kidsMakeAMealArr,
  dessertsArr as kidsDessertsArr,
} from "../../dev/kidsMenu";

import StandardMenuItem from "../../components/main-menu-components/standard-menu-item/StandardMenuItem";
import StandardMenuItemForm from "../../components/main-menu-components/standard-menu-item--form/StandardMenuItemForm";
import KidsMakeAMealItem from "../../components/kids-components/kids-make-a-meal-item/KidsMakeAMealItem";
import KidsMakeAMealItemForm from "../../components/kids-components/kids-make-a-meal-item--form/KidsMakeAMealItemForm";

const KidsMenu = () => {
  return (
    <React.Fragment>
      <h2 className={classes.h2}>View Restaurant Kids Menu</h2>
      {/* ---- Starters ---- */}
      <h3 className={classes.h3}>Starters</h3>
      {kidsStartersArr.map((el) => {
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

      {/* ---- Mains ---- */}
      <h3 className={classes.h3}>Mains</h3>
      {kidsMainsArr.map((el) => {
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

      {/* ---- Make A Meal ---- */}
      <h3 className={classes.h3}>Make A Meal</h3>
      <h4 className={classes.h4}>Main</h4>
      {kidsMakeAMealArr[0].map((el) => {
        return (
          <KidsMakeAMealItem
            name={el.name}
            dietary={el.dietary}
            key={el.name}
          />
        );
      })}
      <KidsMakeAMealItemForm />
      <h4 className={classes.h4}>Side</h4>
      {kidsMakeAMealArr[1].map((el) => {
        return (
          <KidsMakeAMealItem
            name={el.name}
            dietary={el.dietary}
            key={el.name}
          />
        );
      })}
      <KidsMakeAMealItemForm />
      <h4 className={classes.h4}>Extra</h4>
      {kidsMakeAMealArr[2].map((el) => {
        return (
          <KidsMakeAMealItem
            name={el.name}
            dietary={el.dietary}
            key={el.name}
          />
        );
      })}
      <KidsMakeAMealItemForm />
      <div className={classes["u-underline"]} />

      {/* ---- Desserts ---- */}
      <h3 className={classes.h3}>Desserts</h3>
      {kidsDessertsArr.map((el) => {
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
    </React.Fragment>
  );
};

export default KidsMenu;
