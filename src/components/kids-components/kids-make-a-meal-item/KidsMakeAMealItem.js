import React, { useState } from "react";

import classes from "./KidsMakeAMealItem.module.scss";

const KidsMakeAMealItem = (props) => {
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

  let dietary;

  if (props.dietary === undefined) {
    dietary = "";
  } else {
    if (props.dietary.length === 1) dietary = `(${props.dietary[0]})`;
    if (props.dietary.length === 2)
      dietary = `(${props.dietary[0]}, ${props.dietary[1]})`;
    if (props.dietary.length === 3)
      dietary = `(${props.dietary[0]}, ${props.dietary[1]}, ${props.dietary[2]})`;
  }
  if (!confirmEditActive) {
    return (
      <div className={classes["starters-wrapper"]}>
        <h4 className={classes["starters-name"]}>{props.name}</h4>
        <p className={classes["starters-dietary"]}>{dietary}</p>
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
      <form className={classes["starters-wrapper-edit"]}>
        <label htmlFor="name" className={classes.label}>
          Name
        </label>
        <label htmlFor="dietary" className={classes.label}>
          Dietary
        </label>
        <div />
        <div />
        <div />
        <div />
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
        <input
          type="string"
          className={classes.input}
          name="name"
          id={classes["input-name"]}
          value={props.name}
        />
        <select
          className={classes.input}
          name="dietary"
          id={classes["input-dietary"]}
          form="starters-form"
          value={props.dietary}
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
      </form>
    );
  }
};

export default KidsMakeAMealItem;
