import React, { useContext, useRef } from "react";

import classes from "./ModalPostStandardItemNoDetails.module.scss";

import modalContext from "../../../../../context/modal-context";
import mainMenuContext from "../../../../../context/main-menu-context";
import kidsMenuContext from "../../../../../context/kids-menu-context";

import BtnConfirmCrudModal from "../../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalPostStandardItemNoDetails = (props) => {
  const modalCtx = useContext(modalContext);
  const mainMenuCtx = useContext(mainMenuContext);
  const kidsMenuCtx = useContext(kidsMenuContext);

  const inputtedName = useRef();
  const inputtedDietary = useRef();
  const inputtedPrice = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nameValue = inputtedName.current.value;
    const dietaryArr = inputtedDietary.current.value.split(",");
    const priceValue = inputtedPrice.current.value;

    const dataToSend = {
      name: nameValue,

      dietary: dietaryArr,
      price: priceValue,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(dataToSend), // Convert the data to JSON format
    };

    await fetch(modalCtx.fetchUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((responseData) => {
        console.log("Response from server:", responseData);
        modalCtx.menuType === "main-menu" && mainMenuCtx.getMenusHandler();
        modalCtx.menuType === "kids-menu" && kidsMenuCtx.getMenusHandler();
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
        <label className={classes.label} htmlFor="input-dietary">
          Dietary
        </label>
        <select
          className={classes.input}
          name="dietary"
          id={classes["input-dietary"]}
          form="form"
          ref={inputtedDietary}
        >
          <option value="" default={true}>
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

export default ModalPostStandardItemNoDetails;
