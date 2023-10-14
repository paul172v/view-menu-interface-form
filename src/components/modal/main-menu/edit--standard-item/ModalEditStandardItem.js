import React from "react";

import classes from "./ModalEditStandardItem.module.scss";

import BtnConfirmCrudModal from "../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalEditStandardItem = () => {
  return (
    <div className={classes.page}>
      <form className={classes.form} id="form">
        <label className={classes.label} htmlFor="input-name">
          Name
        </label>
        <input className={classes.input} type="text" name="input-name" />
        <label className={classes.label} htmlFor="input-details">
          Details
        </label>
        <input className={classes.input} type="text" name="input-details" />
        <label className={classes.label} htmlFor="input-dietary">
          Dietary
        </label>
        <select
          className={classes.input}
          name="dietary"
          id={classes["input-dietary"]}
          form="form"
        >
          <option value="none" default={true}>
            No Dietary Requirements
          </option>
          <option value="gfo">Gluten Free</option>
          <option value="vgo">Vegan Option</option>
          <option value="v">Vegetarian</option>
          <option value="gfo,vgo">Gluten Free + Vegan Option</option>
          <option value="v,vgo">Vegetarian + Vegan Option</option>
          <option value="gfo,v">Gluten Free + Vegetarian</option>
          <option value="gfo,v,vgo">
            Gluten Free + Vegetarian + Vegan Option
          </option>
        </select>
        <label className={classes.label} htmlFor="input-price">
          Price
        </label>
        <input className={classes.input} name="input-price" type="number" />
        <BtnConfirmCrudModal />
      </form>
      <BtnCancelCrudModal />
    </div>
  );
};

export default ModalEditStandardItem;
