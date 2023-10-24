import React, { useContext, useRef } from "react";

import classes from "./ModalEditSoftDrinks10ozItem.module.scss";

import modalContext from "../../../../../context/modal-context";
import drinksMenuContext from "../../../../../context/drinks-menu-context";

import BtnConfirmCrudModal from "../../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalEditSoftDrinks10ozItem = (props) => {
  const modalCtx = useContext(modalContext);
  const drinksMenuCtx = useContext(drinksMenuContext);

  const inputtedName = useRef();
  const inputtedOz10 = useRef();
  const inputtedOz16 = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nameValue = inputtedName.current.value;
    const oz10Value = inputtedOz10.current.value;
    const oz16Value = inputtedOz16.current.value;

    const dataToSend = {
      name: nameValue,
      oz10: oz10Value,
      oz16: oz16Value,
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

        <label className={classes.label} htmlFor="input-oz10">
          10oz
        </label>
        <input
          className={classes.input}
          name="input-oz10"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemOz10}
          ref={inputtedOz10}
        />

        <label className={classes.label} htmlFor="input-oz16">
          16oz
        </label>
        <input
          className={classes.input}
          name="input-oz16"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemOz16}
          ref={inputtedOz16}
        />
        <BtnConfirmCrudModal />
      </form>
      <BtnCancelCrudModal />
    </div>
  );
};

export default ModalEditSoftDrinks10ozItem;
