import React, { useState } from "react";

import classes from "./StandardMenuItemAdds.module.scss";

const StandardMenuItemAdds = (props) => {
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
    setTimeout(turnOffDeleteItemActive, 8000);
  };

  const turnOffDeleteItemActive = () => {
    setConfirmDeleteActive(false);
  };

  const turnOffDeleteItemActiveHandler = () => {
    setConfirmDeleteActive(false);
  };

  const deleteItemConfirmHandler = () => {};

  if (confirmDeleteActive === true);

  const price = Number(props.price).toFixed(2);
  let dietary = props.dietary;

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
        <p className={classes["starters-details"]}>{props.details}</p>
        <p className={classes["starters-dietary"]}>{dietary}</p>
        {props.price ? (
          <p className={classes["starters-price"]}>{`£${price}`}</p>
        ) : (
          <p className={classes["starters-price"]}></p>
        )}
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
              onClick={turnOffDeleteItemActive}
            >
              X
            </button>
          </div>
        )}
        <div className={classes["adds-wrapper"]}>
          {props.add && props.add[0][1] && (
            <React.Fragment>
              <p className={classes["add"]}>
                <span className={classes["u-orange"]}>Add: </span>
                {props.add[0][0]} - £{props.add[0][1].toFixed(2)}
              </p>
              <p className={classes["add"]}>
                / {props.add[1][0]} - £{props.add[1][1].toFixed(2)}
              </p>
            </React.Fragment>
          )}
          {props.steaksAdd &&
            props.steaksAdd.map((el) => {
              console.log(el);
              return (
                <React.Fragment>
                  <p className={classes["add"]}>
                    <span className={classes["u-orange"]}>Add: </span>
                    {el[0]}
                  </p>
                  <p className={classes["add"]}>£{el[1].toFixed(2)}</p>
                </React.Fragment>
              );
            })}
          {props.scoops && (
            <React.Fragment>
              <p className={classes["add"]}>
                {props.scoops[0][0]} - £{props.scoops[0][1].toFixed(2)}
              </p>
              <p className={classes["add"]}>
                / {props.scoops[1][0]} - £{props.scoops[1][1].toFixed(2)}
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }

  if (confirmEditActive) {
    return (
      <form className={classes["starters-wrapper-edit"]}>
        <label htmlFor="name" className={classes.label}>
          Name
        </label>
        <label htmlFor="details" className={classes.label}>
          Details
        </label>
        <label htmlFor="dietary" className={classes.label}>
          Dietary
        </label>
        <label htmlFor="price" className={classes.label}>
          Price
        </label>
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
        <input
          type="string"
          className={classes.input}
          name="details"
          id={classes["input-details"]}
          value={props.details}
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
        <input
          type="number"
          className={classes.input}
          name="price"
          id={classes["input-price"]}
          value={props.price}
        />

        {props.add && (
          <React.Fragment>
            <div className={classes["u-row-adds-1"]}>
              <label
                htmlFor="adds1-name"
                className={classes["input-adds-label"]}
              >
                Adds 1: Name
              </label>
              <input
                type="string"
                className={classes["input-adds-name"]}
                name="adds1-name"
                value={props.add[0][0]}
              />
              <label
                htmlFor="adds1-price"
                className={classes["input-adds-label"]}
              >
                Adds 1: Price
              </label>
              <input
                type="number"
                className={classes["input-adds-number"]}
                name="adds1-price"
                value={props.add[0][1]}
              />
            </div>

            <div className={classes["u-row-adds-2"]}>
              <label
                htmlFor="adds2-name"
                className={classes["input-adds-label"]}
              >
                Adds 2: Name
              </label>
              <input
                type="string"
                className={classes["input-adds-name"]}
                name="adds2-name"
                value={props.add[1][0]}
              />
              <label
                htmlFor="adds2-price"
                className={classes["input-adds-label"]}
              >
                Adds 2: Price
              </label>
              <input
                type="number"
                className={classes["input-adds-number"]}
                name="adds2-price"
                value={props.add[1][1]}
              />
            </div>
          </React.Fragment>
        )}

        {props.scoops && (
          <React.Fragment>
            <div className={classes["u-row-scoops-1"]}>
              <label
                htmlFor="scoops1-name"
                className={classes["input-scoops-label"]}
              >
                Scoops #1: Name
              </label>
              <input
                type="string"
                className={classes["input-scoops-name"]}
                name="scoops1-name"
                value={props.scoops[0][0]}
              />
              <label
                htmlFor="scoops1-price"
                className={classes["input-scoops-label"]}
              >
                Scoops #1: Price
              </label>
              <input
                type="number"
                className={classes["input-scoops-number"]}
                name="scoops1-price"
                value={props.scoops[0][1]}
              />
            </div>
            <div className={classes["u-row-scoops-2"]}>
              <label
                htmlFor="scoops2-name"
                className={classes["input-scoops-label"]}
              >
                Scoops #2: Name
              </label>
              <input
                type="string"
                className={classes["input-scoops-name"]}
                name="scoops2-name"
                value={props.scoops[1][0]}
              />
              <label
                htmlFor="scoops2-price"
                className={classes["input-scoops-label"]}
              >
                Scoops #2: Price
              </label>
              <input
                type="number"
                className={classes["input-scoops-number"]}
                name="scoops2-price"
                value={props.scoops[1][1]}
              />
            </div>
          </React.Fragment>
        )}
      </form>
    );
  }
};

export default StandardMenuItemAdds;
