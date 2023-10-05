import React, { useState } from "react";

import classes from "./DrinksWineItemReduced.module.scss";

const DrinksWineItemReduced = (props) => {
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

  if (!confirmEditActive) {
    return (
      <div className={classes["item-wrapper"]}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes["bottle-label"]}>Bottle</p>
        <p className={classes["bottle-price"]}>£{props.bottle}</p>
        <p className={classes["measure-label"]}>
          {props.measure ? "Measure" : ""}
        </p>
        <p className={classes["measure-amount"]}>
          {props.measure ? `${props.measure}cl` : ""}
        </p>
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
          <div className={classes["u-row"]}>
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
  }

  if (confirmEditActive) {
    return (
      <form className={classes["item-wrapper-edit"]}>
        <label
          htmlFor="input-name"
          className={classes.label}
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
          htmlFor="input-bottle"
          className={classes.label}
          id={classes["label-bottle"]}
        >
          Bottle
        </label>
        <label
          htmlFor="input-measure"
          className={classes.label}
          id={classes["label-measure"]}
        >
          Measure
        </label>
        <input
          type="number"
          name="input-bottle"
          id={classes["input-bottle"]}
          value={props.bottle}
        />
        <input
          type="number"
          name="input-measure"
          id={classes["input-measure"]}
          value={props.measure}
        />
        <label
          htmlFor="input-details"
          className={classes.label}
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
  }
};

export default DrinksWineItemReduced;
