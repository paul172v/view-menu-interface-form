import React from "react";

import classes from "./WineItem.module.scss";

import BtnOpenEditModal from "../../../buttons/open-edit-modal/BtnOpenEditModal";
import BtnOpenDeleteItem from "../../../buttons/open-delete-item/BtnOpenDeleteItem";

const WineItem = (props) => {
  return (
    <div className={classes["component-wrapper"]}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.details}>{props.details}</p>
      <p className={classes.country}>{props.country}</p>
      <div className={classes["prices-row"]}>
        <p className={classes.label}>Bottle:</p>
        <p className={classes.price}>£{props.bottle.toFixed(2)}</p>
        <p className={classes.label}>250ml:</p>
        <p className={classes.price}>£{props.ml250.toFixed(2)}</p>
        <p className={classes.label}>175ml:</p>
        <p className={classes.price}>£{props.ml175.toFixed(2)}</p>
      </div>
      <BtnOpenEditModal
        label="Edit"
        url={props.url}
        name={props.name}
        details={props.details}
        country={props.country}
        bottle={props.bottle}
        ml250={props.ml250}
        ml175={props.ml175}
        itemId={props.itemId}
        modalType={props.modalType}
        menuType={props.menuType}
        id={classes["btn-edit"]}
      />
      <BtnOpenDeleteItem
        label="Delete"
        url={props.url}
        itemId={props.itemId}
        menuType={props.menuType}
        id={classes["btn-delete"]}
      />
    </div>
  );
};

export default WineItem;
