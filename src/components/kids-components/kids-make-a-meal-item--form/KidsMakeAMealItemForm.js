import React from "react";

import classes from "./KidsMakeAMealItemForm.module.scss";

const KidsMakeAMealItemForm = () => {
  return (
    <form className={classes["starters-form"]} id="starters-form">
      <label htmlFor="name" className={classes.label}>
        Name
      </label>

      <label htmlFor="dietary" className={classes.label}>
        Dietary
      </label>

      <input
        type="string"
        className={classes.input}
        name="name"
        id={classes["input-name"]}
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
        type="submit"
        className={classes["starters-add"]}
        value="Add Item"
      />
    </form>
  );
};

export default KidsMakeAMealItemForm;
