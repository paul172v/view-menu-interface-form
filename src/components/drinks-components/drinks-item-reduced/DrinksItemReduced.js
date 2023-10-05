import React, { useState } from "react";

import classes from "./DrinksItemReduced.module.scss";

const DrinksItemReduced = (props) => {
  const price = Number(props.price).toFixed(2);

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

  const turnOffDeleteItemActiveHandler = (props) => {
    setConfirmDeleteActive(false);
  };

  if (!confirmEditActive) {
    return (
      <div className={classes["item-wrapper"]}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.price}>£{price}</p>
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
        <label className={classes.name} htmlFor="input-name" id={classes.name}>
          Name
        </label>
        <label
          className={classes.price}
          htmlFor="input-price"
          id={classes.price}
        >
          Price
        </label>
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
          <button
            className={classes["btn-delete-edit"]}
            onClick={deleteItemHandler}
          >
            Delete
          </button>
        )}
        {confirmDeleteActive && (
          <div className={classes["u-row-edit"]}>
            <button className={classes["btn-confirm-delete"]}>✓</button>
            <button
              className={classes["btn-cancel-delete"]}
              onClick={turnOffDeleteItemActiveHandler}
            >
              X
            </button>
          </div>
        )}
        <input
          className={classes.input}
          type="string"
          name="input-name"
          id={classes["input-name"]}
          value={props.name}
        />
        <input
          className={classes.input}
          type="number"
          name="input-name"
          id={classes["input-price"]}
          value={price}
        />
      </form>
    );
  }
};

export default DrinksItemReduced;
