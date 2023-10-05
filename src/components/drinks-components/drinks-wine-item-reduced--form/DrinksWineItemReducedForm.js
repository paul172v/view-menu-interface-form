import React from "react";

import classes from "./DrinksWineItemReducedForm.module.scss";

const DrinksWineItemReducedForm = () => {
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
        htmlFor="input-bottle"
        id={classes["label-bottle"]}
      >
        Bottle
      </label>
      <input type="number" name="input-bottle" id={classes["input-bottle"]} />
      <label
        className={classes.heading}
        htmlFor="input-measure"
        id={classes["label-measure"]}
      >
        Measure
      </label>
      <input type="number" name="input-measure" id={classes["input-measure"]} />

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

export default DrinksWineItemReducedForm;
