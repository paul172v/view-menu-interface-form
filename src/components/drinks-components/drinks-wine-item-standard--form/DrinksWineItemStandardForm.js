import React from "react";

import classes from "./DrinksWineItemStandardForm.module.scss";

const DrinksWineItemStandardForm = () => {
  return (
    <form className={classes["item-wrapper-edit"]}>
      <label
        className={classes.heading}
        htmlFor="input-name"
        id={classes["label-name"]}
      >
        Name
      </label>
      <input type="string" name="input-name" id={classes["input-name"]} />
      <label
        className={classes.heading}
        htmlFor="input-Country"
        id={classes["label-country"]}
      >
        Country
      </label>
      <input type="string" name="input-country" id={classes["input-country"]} />
      <label
        className={classes.heading}
        htmlFor="input-bottle"
        id={classes["label-bottle"]}
      >
        Bottle
      </label>
      <input type="number" name="input-bottle" id={classes["input-bottle"]} />
      <label
        className={classes.heading}
        htmlFor="input-ml250"
        id={classes["label-ml250"]}
      >
        250ml
      </label>
      <input type="number" name="input-ml250" id={classes["input-ml250"]} />
      <label
        className={classes.heading}
        htmlFor="input-ml175"
        id={classes["label-ml175"]}
      >
        175ml
      </label>
      <input type="number" name="input-ml175" id={classes["input-ml175"]} />
      <label
        className={classes.heading}
        htmlFor="input-details"
        id={classes["label-details"]}
      >
        Details
      </label>
      <input type="string" name="input-details" id={classes["input-details"]} />

      <input
        type="submit"
        className={classes["starters-add"]}
        value="Add Item"
      />
    </form>
  );
};

export default DrinksWineItemStandardForm;
