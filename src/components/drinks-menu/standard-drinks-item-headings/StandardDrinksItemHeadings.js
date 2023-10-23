import React from "react";

import classes from "./StandardDrinksItemHeadings.module.scss";

const StandardDrinksItemHeadings = () => {
  return (
    <div className={classes["component-wrapper"]}>
      <h3 className={classes.h3} id={classes.name}>
        Name
      </h3>
      <h3 className={classes.h3} id={classes.details}>
        Details
      </h3>
      <h3 className={classes.h3} id={classes.percentage}>
        Percent
      </h3>
      <h3 className={classes.h3} id={classes.price}>
        Price
      </h3>
    </div>
  );
};

export default StandardDrinksItemHeadings;
