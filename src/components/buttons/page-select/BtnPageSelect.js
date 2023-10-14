import React from "react";

import classes from "./BtnPageSelect.module.scss";

const BtnPageSelect = (props) => {
  return (
    <button className={classes["button"]} onClick={props.function}>
      {props.label}
    </button>
  );
};

export default BtnPageSelect;
