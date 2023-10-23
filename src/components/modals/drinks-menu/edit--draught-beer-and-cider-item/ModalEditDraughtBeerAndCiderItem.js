import React, { useContext, useRef } from "react";

import classes from "./ModalEditDraughtBeerAndCiderItem.module.scss";

import modalContext from "../../../../context/modal-context";
import drinksMenuContext from "../../../../context/drinks-menu-context";

import BtnConfirmCrudModal from "../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalEditDraughtBeerAndCiderItem = (props) => {
  const modalCtx = useContext(modalContext);
  const drinksMenuCtx = useContext(drinksMenuContext);

  const inputtedName = useRef();
  const inputtedPint = useRef();
  const inputtedHalfPint = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nameValue = inputtedName.current.value;
    const pintValue = inputtedPint.current.value;
    const halfPintValue = inputtedHalfPint.current.value;

    const dataToSend = {
      name: nameValue,
      pint: pintValue,
      halfPint: halfPintValue,
    };

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(dataToSend), // Convert the data to JSON format
    };

    const url = `${modalCtx.fetchUrl}/${modalCtx.itemId}`;

    await fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((responseData) => {
        console.log("Response from server:", responseData);
        drinksMenuCtx.getMenusHandler();
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    modalCtx.turnOffModalHandler();
  };

  return (
    <div className={classes.page}>
      <form className={classes.form} id="form" onSubmit={onSubmitHandler}>
        <label className={classes.label} htmlFor="input-name">
          Name
        </label>
        <input
          className={classes.input}
          type="text"
          name="input-name"
          defaultValue={modalCtx.itemName}
          ref={inputtedName}
        />

        <label className={classes.label} htmlFor="input-pint">
          Pint
        </label>
        <input
          className={classes.input}
          name="input-pint"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemPint}
          ref={inputtedPint}
        />

        <label className={classes.label} htmlFor="input-half-pint">
          ½ Pint
        </label>
        <input
          className={classes.input}
          name="input-half-pint"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemHalfPint}
          ref={inputtedHalfPint}
        />
        <BtnConfirmCrudModal />
      </form>
      <BtnCancelCrudModal />
    </div>
  );
};

export default ModalEditDraughtBeerAndCiderItem;
