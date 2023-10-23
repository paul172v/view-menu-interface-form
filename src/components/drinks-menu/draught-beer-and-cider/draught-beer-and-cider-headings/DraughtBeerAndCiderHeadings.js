import React from "react";

import classes from "./DraughtBeerAndCiderHeadings.module.scss";

const DraughtBeerAndCiderHeadings = () => {
  return (
    <div className={classes["component-wrapper"]}>
      <h3 className={classes.h3} id={classes.name}>
        Name
      </h3>
      <h3 className={classes.h3} id={classes.details}>
        Details
      </h3>
      <h3 className={classes.h3} id={classes.pint}>
        Pint
      </h3>
      <h3 className={classes.h3} id={classes["half-pint"]}>
        ½ Pint
      </h3>
    </div>
  );
};

export default DraughtBeerAndCiderHeadings;
