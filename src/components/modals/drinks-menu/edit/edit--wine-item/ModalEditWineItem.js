import React, { useContext, useRef } from "react";

import classes from "./ModalEditWineItem.module.scss";

import modalContext from "../../../../../context/modal-context";
import drinksMenuContext from "../../../../../context/drinks-menu-context";

import BtnConfirmCrudModal from "../../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalEditWineItem = () => {
  const modalCtx = useContext(modalContext);
  const drinksMenuCtx = useContext(drinksMenuContext);

  const inputtedName = useRef();
  const inputtedDetails = useRef();
  const inputtedCountry = useRef();
  const inputtedBottle = useRef();
  const inputtedMl250 = useRef();
  const inputtedMl175 = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nameValue = inputtedName.current.value;
    const detailsValue = inputtedDetails.current.value;
    const countryValue = inputtedCountry.current.value;
    const bottleValue = inputtedBottle.current.value;
    const ml250Value = inputtedMl250.current.value;
    const ml175Value = inputtedMl175.current.value;

    const dataToSend = {
      name: nameValue,
      details: detailsValue,
      country: countryValue,
      bottle: bottleValue,
      ml250: ml250Value,
      ml175: ml175Value,
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
        <label className={classes.label} htmlFor="input-country">
          Country
        </label>
        <input
          className={classes.input}
          type="string"
          name="input-country"
          defaultValue={modalCtx.itemCountry}
          ref={inputtedCountry}
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
        <label className={classes.label} htmlFor="input-ml250">
          250ml
        </label>
        <input
          className={classes.input}
          name="input-ml250"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemMl250}
          ref={inputtedMl250}
        />
        <label className={classes.label} htmlFor="input-ml175">
          175ml
        </label>
        <input
          className={classes.input}
          name="input-ml175"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemMl175}
          ref={inputtedMl175}
        />
        <BtnConfirmCrudModal />
      </form>
      <BtnCancelCrudModal />
    </div>
  );
};

export default ModalEditWineItem;
