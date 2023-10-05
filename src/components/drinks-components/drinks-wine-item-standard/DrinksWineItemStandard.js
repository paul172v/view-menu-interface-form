import React, { useState } from "react";

import classes from "./DrinksWineItemStandard.module.scss";

const DrinksWineItemStandard = (props) => {
  const [confirmDeleteActive, setConfirmDeleteActive] = useState(false);
  const [confirmEditActive, setConfirmEditActive] = useState(false);

  const editItemHandler = () => {
    setConfirmEditActive(true);
    setTimeout(turnOffDeleteItemActiveHandler, 8000);
  };

  const turnOffEditActiveHandler = () => {
    setConfirmEditActive(false);
  };

  const deleteItemHandler = () => {
    setConfirmDeleteActive(true);
    setTimeout(turnOffDeleteItemActiveHandler, 8000);
  };

  const turnOffDeleteItemActiveHandler = () => {
    setConfirmDeleteActive(false);
  };

  if (!confirmEditActive)
    return (
      <div className={classes["item-wrapper"]}>
        <p className={classes.heading} id={classes["item-name"]}>
          {props.name}
        </p>
        <p className={classes.heading} id={classes["item-country"]}>
          {props.country}
        </p>
        <div className={classes["u-row"]}>
          <p className={classes.label}>Bottle</p>
          <p className={classes.info}>£{props.bottle.toFixed(2)}</p>
          <p className={classes.label}>250ml</p>
          <p className={classes.info}>£{props.ml250.toFixed(2)}</p>
          <p className={classes.label}>175ml</p>
          <p className={classes.info}>£{props.ml175.toFixed(2)}</p>
        </div>
        <p className={classes.details}>{props.details}</p>
        <button className={classes["btn-edit"]} onClick={editItemHandler}>
          Edit
        </button>
        {!confirmDeleteActive && (
          <button className={classes["btn-delete"]} onClick={deleteItemHandler}>
            Delete
          </button>
        )}
        {confirmDeleteActive && (
          <div className={classes["u-row-confirm-delete"]}>
            <button className={classes["btn-confirm-delete"]}>✓</button>
            <button
              className={classes["btn-cancel-delete"]}
              onClick={turnOffDeleteItemActiveHandler}
            >
              X
            </button>
          </div>
        )}
      </div>
    );

  if (confirmEditActive)
    return (
      <form className={classes["item-wrapper-edit"]}>
        <label
          className={classes.heading}
          htmlFor="input-name"
          id={classes["label-name"]}
        >
          Name
        </label>
        <input
          type="string"
          name="input-name"
          id={classes["input-name"]}
          value={props.name}
        />
        <label
          className={classes.heading}
          htmlFor="input-Country"
          id={classes["label-country"]}
        >
          Country
        </label>
        <input
          type="string"
          name="input-country"
          id={classes["input-country"]}
          value={props.country}
        />
        <label
          className={classes.heading}
          htmlFor="input-bottle"
          id={classes["label-bottle"]}
        >
          Bottle
        </label>
        <input
          type="number"
          name="input-bottle"
          id={classes["input-bottle"]}
          value={props.bottle}
        />
        <label
          className={classes.heading}
          htmlFor="input-ml250"
          id={classes["label-ml250"]}
        >
          250ml
        </label>
        <input
          type="number"
          name="input-ml250"
          id={classes["input-ml250"]}
          value={props.ml250}
        />
        <label
          className={classes.heading}
          htmlFor="input-ml175"
          id={classes["label-ml175"]}
        >
          175ml
        </label>
        <input
          type="number"
          name="input-ml175"
          id={classes["input-ml175"]}
          value={props.ml175}
        />
        <label
          className={classes.heading}
          htmlFor="input-details"
          id={classes["label-details"]}
        >
          Details
        </label>
        <input
          type="string"
          name="input-details"
          id={classes["input-details"]}
          value={props.details}
        />
        <div className={classes["u-row-edit"]}>
          <button className={classes["btn-confirm-edit"]}>✓</button>
          <button
            className={classes["btn-cancel-edit"]}
            onClick={turnOffEditActiveHandler}
          >
            X
          </button>
        </div>

        {!confirmDeleteActive && (
          <button className={classes["btn-delete-edit"]}>Delete</button>
        )}
      </form>
    );
};

export default DrinksWineItemStandard;
