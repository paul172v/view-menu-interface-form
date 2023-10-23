import React, { useContext, useRef } from "react";

import classes from "./ModalPostStandardDrinksItemNoPercentage.module.scss";

import modalContext from "../../../../context/modal-context";
import drinksMenuContext from "../../../../context/drinks-menu-context";

import BtnConfirmCrudModal from "../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalPostStandardDrinksItemNoPercentage = (props) => {
  const modalCtx = useContext(modalContext);
  const drinksMenuCtx = useContext(drinksMenuContext);

  const inputtedName = useRef();
  const inputtedDetails = useRef();
  const inputtedPrice = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nameValue = inputtedName.current.value;
    const detailsValue = inputtedDetails.current.value;
    const priceValue = inputtedPrice.current.value;

    const dataToSend = {
      name: nameValue,
      details: detailsValue,
      price: priceValue,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(dataToSend), // Convert the data to JSON format
    };

    const url = `${modalCtx.fetchUrl}`;

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
          ref={inputtedName}
        />
        <label className={classes.label} htmlFor="input-details">
          Details
        </label>
        <input
          className={classes.input}
          type="text"
          name="input-details"
          ref={inputtedDetails}
        />
        <label className={classes.label} htmlFor="input-price">
          Price
        </label>
        <input
          className={classes.input}
          name="input-price"
          type="number"
          step=".01"
          ref={inputtedPrice}
        />
        <BtnConfirmCrudModal />
      </form>
      <BtnCancelCrudModal />
    </div>
  );
};

export default ModalPostStandardDrinksItemNoPercentage;
