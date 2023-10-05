import React, { useState } from "react";

import classes from "./DrinksTwoPriceItem.module.scss";

const DrinksTwoPriceItem = (props) => {
  const price1Value = Number(props.price1Value).toFixed(2);
  const price2Value = Number(props.price2Value).toFixed(2);

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
        <p className={classes.heading}>{props.name}</p>
        <p className={classes.heading}>£{price1Value}</p>
        <p className={classes.heading}>£{price2Value}</p>
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
        <label className={classes.heading} htmlFor={"name"}>
          Name
        </label>
        <label className={classes.heading} htmlFor={"price1"}>
          {props.price1Label}
        </label>
        <label className={classes.heading} htmlFor={"price2"}>
          {props.price2Label}
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
          <button className={classes["btn-delete-edit"]}>Delete</button>
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
        <input
          type="string"
          name="name"
          id={classes["input-name"]}
          defaultValue={props.name}
        />
        <input
          type="number"
          name="price1"
          id={classes["input-price1"]}
          defaultValue={props.price1Value}
        />
        <input
          type="number"
          name="price2"
          id={classes["input-price2"]}
          defaultValue={props.price2Value}
        />
      </form>
    );
  }
};

export default DrinksTwoPriceItem;
