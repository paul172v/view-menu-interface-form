import React from "react";

import classes from "./StandardMenuItemFormSteaks.module.scss";

const StandardMenuItemFormSteaks = () => {
  return (
    <React.Fragment>
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

      <form className={classes["steaks-sides-form"]} id="steaks-sides-form">
        <div className={classes["u-row-steak-sides-1"]}>
          <label
            htmlFor="steak-sides-1-name"
            className={classes["input-steak-sides-label"]}
            id={classes["steak-sides-label-name-1"]}
          >
            Steak Sides 1: Name
          </label>
          <input
            type="string"
            className={classes["input-steak-sides-name"]}
            name="steak-sides-1-name"
            id={classes["steak-sides-input-name-1"]}
          />
          <label
            htmlFor="steak-sides-1-price"
            className={classes["input-steak-sides-label"]}
            id={classes["steak-sides-label-price-2"]}
          >
            Steak Sides 1: Price
          </label>
          <input
            type="number"
            className={classes["input-steak-sides-number"]}
            name="steak-sides-1-price"
            id={classes["steak-sides-input-price-2"]}
          />
        </div>

        <div className={classes["u-row-steak-sides-2"]}>
          <label
            htmlFor="steak-sides-1-name"
            className={classes["input-steak-sides-label"]}
            id={classes["steak-sides-label-name-2"]}
          >
            Steak Sides 2: Name
          </label>
          <input
            type="string"
            className={classes["input-steak-sides-name"]}
            name="steak-sides-1-name"
            id={classes["steak-sides-input-name-2"]}
          />
          <label
            htmlFor="steak-sides-1-price"
            className={classes["input-steak-sides-label"]}
            id={classes["steak-sides-label-price-2"]}
          >
            Steak Sides 2: Price
          </label>
          <input
            type="number"
            className={classes["input-steak-sides-number"]}
            name="steak-sides-1-price"
            id={classes["steak-sides-input-price-1"]}
          />
        </div>
        <input
          type="submit"
          className={classes["steak-sides-add"]}
          value="Add Item"
        />
      </form>
    </React.Fragment>
  );
};

export default StandardMenuItemFormSteaks;
