import React, { useContext, useRef } from "react";

import classes from "./ModalEditStandardItemWithScoops.module.scss";

import modalContext from "../../../../context/modal-context";
import mainMenuContext from "../../../../context/main-menu-context";
import kidsMenuContext from "../../../../context/kids-menu-context";

import BtnConfirmCrudModal from "../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalEditStandardItemWithScoops = () => {
  const modalCtx = useContext(modalContext);
  const mainMenuCtx = useContext(mainMenuContext);
  const kidsMenuCtx = useContext(kidsMenuContext);

  const inputtedName = useRef();
  const inputtedDetails = useRef();
  const inputtedDietary = useRef();
  const inputtedPrice = useRef();
  const inputtedScoops1Amount = useRef();
  const inputtedScoops1Price = useRef();
  const inputtedScoops2Amount = useRef();
  const inputtedScoops2Price = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nameValue = inputtedName.current.value;
    const detailsValue = inputtedDetails.current.value;
    const dietaryArr = inputtedDietary.current.value.split(",");
    const priceValue = inputtedPrice.current.value;
    const scoops1AmountValue = inputtedScoops1Amount.current.value;
    const scoops1PriceValue = inputtedScoops1Price.current.value;
    const scoops2AmountValue = inputtedScoops2Amount.current.value;
    const scoops2PriceValue = inputtedScoops2Price.current.value;

    const dataToSend = {
      name: nameValue,
      details: detailsValue,
      dietary: dietaryArr,
      price: priceValue,
      scoops: [
        { amount: scoops1AmountValue, price: scoops1PriceValue },
        { amount: scoops2AmountValue, price: scoops2PriceValue },
      ],
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
        <label className={classes.label} htmlFor="input-dietary">
          Dietary
        </label>
        <select
          className={classes.input}
          name="dietary"
          id={classes["input-dietary"]}
          form="form"
          defaultValue={`${Array(modalCtx.itemDietary).toString()}`}
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
          defaultValue={modalCtx.itemPrice}
          ref={inputtedPrice}
        />
        <label className={classes.label} htmlFor="input-scoops1-amount">
          Scoops1: Amount
        </label>
        <input
          className={classes.input}
          type="number"
          name="input-scoops1-amount"
          defaultValue={modalCtx.itemScoops1Amount}
          ref={inputtedScoops1Amount}
        />
        <label className={classes.label} htmlFor="input-scoops1-price">
          Scoops1: Price
        </label>
        <input
          className={classes.input}
          name="input-scoops1-price"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemScoops1Price}
          ref={inputtedScoops1Price}
        />
        <label className={classes.label} htmlFor="input-scoops2-amount">
          Scoops2: Amount
        </label>
        <input
          className={classes.input}
          type="number"
          name="input-scoops2-amount"
          defaultValue={modalCtx.itemScoops2Amount}
          ref={inputtedScoops2Amount}
        />
        <label className={classes.label} htmlFor="input-scoops2-price">
          Scoops2: Price
        </label>
        <input
          className={classes.input}
          name="input-scoops2-price"
          type="number"
          step=".01"
          defaultValue={modalCtx.itemScoops2Price}
          ref={inputtedScoops2Price}
        />
        <BtnConfirmCrudModal />
      </form>
      <BtnCancelCrudModal />
    </div>
  );
};

export default ModalEditStandardItemWithScoops;
