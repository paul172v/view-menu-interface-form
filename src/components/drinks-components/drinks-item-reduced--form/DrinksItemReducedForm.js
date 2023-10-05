import React from "react";

import classes from "./DrinksItemReducedForm.module.scss";

const DrinksItemReducedForm = () => {
  return (
    <form className={classes["starters-form"]} id="starters-form">
      <label className={classes.label} htmlFor={"name"}>
        Name
      </label>
      <label className={classes.label} htmlFor={"price"}>
        Price
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
        name="price"
        id={classes["input-price"]}
      />

      <input
        type="submit"
        className={classes["starters-add"]}
        value="Add Item"
      />
    </form>
  );
};

export default DrinksItemReducedForm;
