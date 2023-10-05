import React from "react";

import classes from "./DrinksItemStandardForm.module.scss";

const DrinksItemStandardForm = () => {
  return (
    <form className={classes["starters-form"]} id="starters-form">
      <label htmlFor="name" className={classes.label}>
        Name
      </label>
      <label htmlFor="details" className={classes.label}>
        Details
      </label>
      <label htmlFor="percentage" className={classes.label}>
        Percentage
      </label>
      <label htmlFor="price" className={classes.label}>
        Price
      </label>
      <input
        type="string"
        className={classes.input}
        name="name"
        id={classes["input-name"]}
      />
      <input
        type="string"
        className={classes.input}
        name="details"
        id={classes["input-details"]}
      />
      <input
        type="number"
        className={classes.input}
        name="percentage"
        id={classes["input-percentage"]}
      />
      <input
        type="number"
        className={classes.input}
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

export default DrinksItemStandardForm;
