import React from "react";

import classes from "./StandardMenuItemFormAdds.module.scss";

const StandardMenuItemFormAdds = (props) => {
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
      {!props.scoops && (
        <React.Fragment>
          <div className={classes["u-row"]}>
            <label htmlFor="adds1-name" className={classes["input-adds-label"]}>
              Adds 1: Name
            </label>
            <input
              type="string"
              className={classes["input-adds-name"]}
              name="adds1-name"
            />
            <label
              htmlFor="adds1-price"
              className={classes["input-adds-label"]}
            >
              Adds 1: Price
            </label>
            <input
              type="number"
              className={classes["input-adds-number"]}
              name="adds1-price"
            />
          </div>
          <div className={classes["u-row-2"]}>
            <label htmlFor="adds2-name" className={classes["input-adds-label"]}>
              Adds 2: Name
            </label>
            <input
              type="string"
              className={classes["input-adds-name"]}
              name="adds2-name"
            />
            <label
              htmlFor="adds2-price"
              className={classes["input-adds-label"]}
            >
              Adds 2: Price
            </label>
            <input
              type="number"
              className={classes["input-adds-number"]}
              name="adds2-price"
            />
          </div>
        </React.Fragment>
      )}

      {props.scoops && (
        <React.Fragment>
          <div className={classes["u-row"]}>
            <label
              htmlFor="scoops1-name"
              className={classes["input-scoops-label"]}
            >
              Scoops #1: Name
            </label>
            <input
              type="string"
              className={classes["input-scoops-name"]}
              name="scoops1-name"
            />
            <label
              htmlFor="scoops1-price"
              className={classes["input-scoops-label"]}
            >
              Scoops #1: Price
            </label>
            <input
              type="number"
              className={classes["input-scoops-number"]}
              name="scoops1-price"
            />
          </div>
          <div className={classes["u-row-2"]}>
            <label
              htmlFor="scoops2-name"
              className={classes["input-scoops-label"]}
            >
              Scoops #2: Name
            </label>
            <input
              type="string"
              className={classes["input-scoops-name"]}
              name="scoops2-name"
            />
            <label
              htmlFor="scoops2-price"
              className={classes["input-scoops-label"]}
            >
              Scoops #2: Price
            </label>
            <input
              type="number"
              className={classes["input-scoops-number"]}
              name="scoops2-price"
            />
          </div>
        </React.Fragment>
      )}

      <input
        type="submit"
        className={classes["starters-add"]}
        value="Add Item"
      />
    </form>
  );
};

export default StandardMenuItemFormAdds;
