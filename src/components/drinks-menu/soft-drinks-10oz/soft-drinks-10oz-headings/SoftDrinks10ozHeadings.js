import React from "react";

import classes from "./SoftDrinks10ozHeadings.module.scss";

const SoftDrinks10ozHeadings = () => {
  return (
    <div className={classes["component-wrapper"]}>
      <h3 className={classes.h3} id={classes.name}>
        Name
      </h3>
      <h3 className={classes.h3} id={classes.details}>
        Details
      </h3>
      <h3 className={classes.h3} id={classes.oz10}>
        10oz
      </h3>
      <h3 className={classes.h3} id={classes.oz16}>
        16oz
      </h3>
    </div>
  );
};

export default SoftDrinks10ozHeadings;
