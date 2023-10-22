import React from "react";

import classes from "./MakeAMealItem.module.scss";

import BtnOpenEditModal from "../../buttons/open-edit-modal/BtnOpenEditModal";
import BtnOpenDeleteItem from "../../buttons/open-delete-item/BtnOpenDeleteItem";

const MakeAMealItem = (props) => {
  let dietary = Array(props.dietary).toString().replaceAll(",", ", ");

  return (
    <div className={classes["component-wrapper"]}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.details}>N/A</p>
      <p className={classes.dietary}>{dietary ? `(${dietary})` : ""}</p>
      <p className={classes.price}>N/A</p>
      <BtnOpenEditModal
        label="Edit"
        url={props.url}
        name={props.name}
        dietary={props.dietary}
        itemId={props.itemId}
        modalType={props.modalType}
        menuType={props.menuType}
      />
      <BtnOpenDeleteItem
        label="Delete"
        url={props.url}
        itemId={props.itemId}
        menuType={props.menuType}
      />
    </div>
  );
};

export default MakeAMealItem;
