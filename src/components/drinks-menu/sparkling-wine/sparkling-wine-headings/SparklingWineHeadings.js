import React from "react";

import classes from "./SparklingWineHeadings.module.scss";

const SparklingWineHeadings = () => {
  return (
    <div className={classes["component-wrapper"]}>
      <h3 className={classes.h3} id={classes.name}>
        Name
      </h3>
      <h3 className={classes.h3} id={classes.details}>
        Details
      </h3>
      <h3 className={classes.h3} id={classes.centiliter}>
        CL
      </h3>
      <h3 className={classes.h3} id={classes.bottle}>
        Bottle
      </h3>
    </div>
  );
};

export default SparklingWineHeadings;
