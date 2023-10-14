import React from "react";

import classes from "./standardItem--Headings.module.scss";

const StandardItemHeadings = () => {
  return (
    <div className={classes["component-wrapper"]}>
      <h3 className={classes.h3} id={classes.name}>
        Name
      </h3>
      <h3 className={classes.h3} id={classes.details}>
        Details
      </h3>
      <h3 className={classes.h3} id={classes.dietary}>
        Dietary
      </h3>
      <h3 className={classes.h3} id={classes.price}>
        Price
      </h3>
    </div>
  );
};

export default StandardItemHeadings;
