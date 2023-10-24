import React, { useContext, useRef } from "react";

import classes from "./ModalEditChampagneItem.module.scss";

import modalContext from "../../../../../context/modal-context";
import drinksMenuContext from "../../../../../context/drinks-menu-context";

import BtnConfirmCrudModal from "../../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalEditChampagneItem = (props) => {
  const modalCtx = useContext(modalContext);
  const drinksMenuCtx = useContext(drinksMenuContext);

  const inputtedName = useRef();
  const inputtedDetails = useRef();
  const inputtedBottle = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nameValue = inputtedName.current.value;
    const detailsValue = inputtedDetails.current.value;
    const bottleValue = inputtedBottle.current.value;

    const dataToSend = {
      name: nameValue,
      details: detailsValue,
      bottle: bottleValue,
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
        <label className={classes.label} htmlFor="input-details">
          Details
        </label>
        <input
          className={classes.input}
          type="text"
          name="input-details"
          defaultValue={modalCtx.itemDetails}
          ref={inputtedDetails}
        />
        <label className={classes.label} htmlFor="input-bottle">
          Bottle
        </label>
        <input
          className={classes.input}
          name="input-bottle"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemBottle}
          ref={inputtedBottle}
        />
        <BtnConfirmCrudModal />
      </form>
      <BtnCancelCrudModal />
    </div>
  );
};

export default ModalEditChampagneItem;
