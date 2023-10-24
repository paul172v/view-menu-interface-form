import React from "react";

import classes from "./ChampagneItem.module.scss";

import BtnOpenEditModal from "../../buttons/open-edit-modal/BtnOpenEditModal";
import BtnOpenDeleteItem from "../../buttons/open-delete-item/BtnOpenDeleteItem";

const ChampagneItem = (props) => {
  return (
    <div className={classes["component-wrapper"]}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.details}>{props.details}</p>
      <p className={classes.centiliter}>N/A</p>
      <p className={classes.bottle}>£{props.bottle.toFixed(2)}</p>
      <BtnOpenEditModal
        label="Edit"
        url={props.url}
        name={props.name}
        details={props.details}
        bottle={props.bottle}
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

export default ChampagneItem;
