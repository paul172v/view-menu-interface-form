import React, { useContext, useRef } from "react";

import classes from "./ModalPostStandardItemWithAdds.module.scss";

import modalContext from "../../../../context/modal-context";
import mainMenuContext from "../../../../context/main-menu-context";

import BtnConfirmCrudModal from "../../../buttons/confirm-crud-modal/BtnConfirmCrudModal";
import BtnCancelCrudModal from "../../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalPostStandardItemWithAdds = () => {
  const modalCtx = useContext(modalContext);
  const mainMenuCtx = useContext(mainMenuContext);

  const inputtedName = useRef();
  const inputtedDetails = useRef();
  const inputtedDietary = useRef();
  const inputtedPrice = useRef();
  const inputtedAdd1Name = useRef();
  const inputtedAdd1Price = useRef();
  const inputtedAdd2Name = useRef();
  const inputtedAdd2Price = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const nameValue = inputtedName.current.value;
    const detailsValue = inputtedDetails.current.value;
    const dietaryArr = inputtedDietary.current.value.split(",");
    const priceValue = inputtedPrice.current.value;
    const add1NameValue = inputtedAdd1Name.current.value;
    const add1PriceValue = inputtedAdd1Price.current.value;
    const add2NameValue = inputtedAdd2Name.current.value;
    const add2PriceValue = inputtedAdd2Price.current.value;

    const dataToSend = {
      name: nameValue,
      details: detailsValue,
      dietary: dietaryArr,
      price: priceValue,
      add: [
        { name: add1NameValue, price: add1PriceValue },
        { name: add2NameValue, price: add2PriceValue },
      ],
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
        mainMenuCtx.getMenusHandler();
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
        <label className={classes.label} htmlFor="input-add1-name">
          Add1: Name
        </label>
        <input
          className={classes.input}
          type="text"
          name="input-add1-name"
          ref={inputtedAdd1Name}
        />
        <label className={classes.label} htmlFor="input-add1-price">
          Add1: Price
        </label>
        <input
          className={classes.input}
          name="input-add1-price"
          type="number"
          step=".01"
          ref={inputtedAdd1Price}
        />
        <label className={classes.label} htmlFor="input-add2-name">
          Add2: Name
        </label>
        <input
          className={classes.input}
          type="text"
          name="input-add1-name"
          ref={inputtedAdd2Name}
        />
        <label className={classes.label} htmlFor="input-add2-price">
          Add2: Price
        </label>
        <input
          className={classes.input}
          name="input-add2-price"
          type="number"
          step=".01"
          ref={inputtedAdd2Price}
        />
        <BtnConfirmCrudModal />
      </form>
      <BtnCancelCrudModal />
    </div>
  );
};

export default ModalPostStandardItemWithAdds;
