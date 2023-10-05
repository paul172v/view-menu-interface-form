import React from "react";

import classes from "./StandardMenuItemForm.module.scss";

const StandardMenuItemForm = () => {
  return (
    <form className={classes["starters-form"]} id="starters-form">
      <label htmlFor="name" className={classes.label}>
        Name
      </label>
      <label htmlFor="details" className={classes.label}>
        Details
      </label>
      <label htmlFor="dietary" className={classes.label}>
        Dietary
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
      <select
        className={classes.input}
        name="dietary"
        id={classes["input-dietary"]}
        form="starters-form"
      >
        <option value="none" default={true}>
          No Dietary Requirements
        </option>
        <option value="gfo">Gluten Free</option>
        <option value="vgo">Vegan Option</option>
        <option value="v">Vegetarian</option>
        <option value="gfo,vgo">Gluten Free + Vegan Option</option>
        <option value="v,vgo">Vegetarian + Vegan Option</option>
        <option value="gfo,v">Gluten Free + Vegetarian</option>
        <option value="gfo,v,vgo">
          Gluten Free + Vegetarian + Vegan Option
        </option>
      </select>
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

export default StandardMenuItemForm;
