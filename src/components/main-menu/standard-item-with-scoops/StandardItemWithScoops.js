import React from "react";

import classes from "./StandardItemWithScoops.module.scss";

import BtnOpenEditModal from "../../buttons/open-edit-modal/BtnOpenEditModal";
import BtnOpenDeleteItem from "../../buttons/open-delete-item/BtnOpenDeleteItem";

const StandardItemWithScoops = (props) => {
  let dietary = Array(props.dietary).toString().replaceAll(",", ", ");

  return (
    <div className={classes["component-wrapper"]}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.details}>{props.details}</p>
      <p className={classes.dietary}>{dietary ? `(${dietary})` : ""}</p>
      <p className={classes.price}>£{props.price.toFixed(2)}</p>
      <BtnOpenEditModal
        label="Edit"
        url={props.url}
        name={props.name}
        details={props.details}
        dietary={props.dietary}
        price={props.price}
        itemId={props.itemId}
        scoops1Amount={props.scoops1Amount}
        scoops1Price={props.scoops1Price}
        scoops2Amount={props.scoops2Amount}
        scoops2Price={props.scoops2Price}
        modalType={props.modalType}
      />
      <BtnOpenDeleteItem label="Delete" url={props.url} itemId={props.itemId} />
      <div className={classes["scoops-row"]}>
        <p className={classes.scoops}>
          {props.scoops1Amount !== null &&
            props.scoops1Amount !== "" &&
            `${props.scoops1Amount} Scoops - £${props.scoops1Price.toFixed(
              2
            )} / ${props.scoops2Amount} Scoops - £${props.scoops2Price.toFixed(
              2
            )}`}
        </p>
      </div>
    </div>
  );
};

export default StandardItemWithScoops;
