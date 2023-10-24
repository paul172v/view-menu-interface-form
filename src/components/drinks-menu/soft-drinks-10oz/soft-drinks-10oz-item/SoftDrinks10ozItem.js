import React from "react";

import classes from "./SoftDrinks10ozItem.module.scss";

import BtnOpenEditModal from "../../../buttons/open-edit-modal/BtnOpenEditModal";
import BtnOpenDeleteItem from "../../../buttons/open-delete-item/BtnOpenDeleteItem";

const SoftDrinks10ozItem = (props) => {
  return (
    <div className={classes["component-wrapper"]}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.details}>N/A</p>
      <p className={classes.oz10}>£{props.oz10.toFixed(2)}</p>
      <p className={classes.oz16}>£{props.oz16.toFixed(2)}</p>
      <BtnOpenEditModal
        label="Edit"
        url={props.url}
        name={props.name}
        oz10={props.oz10}
        oz16={props.oz16}
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

export default SoftDrinks10ozItem;
