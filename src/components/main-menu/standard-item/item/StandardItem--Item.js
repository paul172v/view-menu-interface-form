import React from "react";

import classes from "./StandardItem--Item.module.scss";

import BtnOpenEditModal from "../../../buttons/open-edit-modal/BtnOpenEditModal";
import BtnDeleteItem from "../../../buttons/delete-item/BtnDeleteItem";

const StandardItemItem = (props) => {
  let dietary = Array(props.dietary).toString().replaceAll(",", ", ");

  return (
    <div className={classes["component-wrapper"]}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.details}>{props.details}</p>
      <p className={classes.dietary}>{dietary ? `(${dietary})` : ""}</p>
      <p className={classes.price}>£{props.price.toFixed(2)}</p>
      <BtnOpenEditModal label="Edit" id={classes["btn-edit"]} />
      <BtnDeleteItem label="Delete" id={classes["btn-delete"]} />
    </div>
  );
};

export default StandardItemItem;
