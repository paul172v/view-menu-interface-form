import React from "react";

import classes from "./StandardItemWithAdds.module.scss";

import BtnOpenEditModal from "../../buttons/open-edit-modal/BtnOpenEditModal";
import BtnOpenDeleteItem from "../../buttons/open-delete-item/BtnOpenDeleteItem";

const StandardItemWithAdds = (props) => {
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
        add1Name={props.add1Name}
        add1Price={props.add1Price}
        add2Name={props.add2Name}
        add2Price={props.add2Price}
        modalType={props.modalType}
      />
      <BtnOpenDeleteItem label="Delete" url={props.url} itemId={props.itemId} />
      <div className={classes["adds-row"]}>
        <p className={classes.subHeading}>{props.add1Name !== "" && "Add: "}</p>
        <p className={classes.add}>
          {props.add1Name !== "" &&
            `${props.add1Name} - £${props.add1Price.toFixed(2)} / ${
              props.add2Name
            } - £${props.add2Price.toFixed(2)}`}
        </p>
      </div>
    </div>
  );
};

export default StandardItemWithAdds;
