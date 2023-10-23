import React from "react";

import classes from "./WineItemHeadings.module.scss";

const WineItemHeadings = () => {
  return (
    <div className={classes["component-wrapper"]}>
      <h3 className={classes.h3} id={classes.name}>
        Name
      </h3>
      <h3 className={classes.h3} id={classes.details}>
        Details
      </h3>
      <h3 className={classes.h3} id={classes.country}>
        Country
      </h3>
    </div>
  );
};

export default WineItemHeadings;
