import React from "react";

import classes from "./DrinksTwoPriceItemForm.module.scss";

const DrinksTwoPriceItemForm = (props) => {
  return (
    <form className={classes["starters-form"]} id="starters-form">
      <label className={classes.label} htmlFor={"name"}>
        Name
      </label>
      <label className={classes.label} htmlFor={"price1"}>
        {props.price1Label}
      </label>
      <label className={classes.label} htmlFor={"price2"}>
        {props.price2Label}
      </label>
      <input
        className={classes.input}
        type="string"
        name="name"
        id={classes["input-name"]}
      />
      <input
        className={classes.input}
        type="number"
        name="price1"
        id={classes["input-price1"]}
      />
      <input
        className={classes.input}
        type="number"
        name="price2"
        id={classes["input-price2"]}
      />

      <input
        type="submit"
        className={classes["starters-add"]}
        value="Add Item"
      />
    </form>
  );
};

export default DrinksTwoPriceItemForm;
