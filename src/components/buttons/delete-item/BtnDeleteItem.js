import React from "react";

import classes from "./BtnDeleteItem.module.scss";

const BtnDeleteItem = (props) => {
  return (
    <button className={classes["button"]} onClick={props.function}>
      {props.label}
    </button>
  );
};

export default BtnDeleteItem;
