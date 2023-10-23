import React from "react";

import classes from "./DraughtBeerAndCiderItem.module.scss";

import BtnOpenEditModal from "../../../buttons/open-edit-modal/BtnOpenEditModal";
import BtnOpenDeleteItem from "../../../buttons/open-delete-item/BtnOpenDeleteItem";

const DraughtBeerAndCiderItem = (props) => {
  return (
    <div className={classes["component-wrapper"]}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.details}>N/A</p>
      <p className={classes.pint}>£{props.pint.toFixed(2)}</p>
      <p className={classes.halfPint}>£{props.halfPint.toFixed(2)}</p>
      <BtnOpenEditModal
        label="Edit"
        url={props.url}
        name={props.name}
        pint={props.pint}
        halfPint={props.halfPint}
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

export default DraughtBeerAndCiderItem;
