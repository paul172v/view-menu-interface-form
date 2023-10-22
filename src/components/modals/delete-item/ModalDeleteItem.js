import React, { useContext } from "react";

import classes from "./ModalDeleteItem.module.scss";

import modalContext from "../../../context/modal-context";
import mainMenuContext from "../../../context/main-menu-context";
import kidsMenuContext from "../../../context/kids-menu-context";

import BtnCancelCrudModal from "../../buttons/cancel-crud-modal/BtnCancelCrudModal";

const ModalDeleteItem = (props) => {
  const modalCtx = useContext(modalContext);
  const mainMenuCtx = useContext(mainMenuContext);
  const kidsMenuCtx = useContext(kidsMenuContext);

  const url = `${modalCtx.fetchUrl}/${modalCtx.itemId}`;

  const deleteItemHandler = async () => {
    await fetch(url, {
      method: "DELETE", // Set the request method to DELETE
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // If the response is successful, parse the JSON
        } else {
          throw new Error("Failed to delete the resource"); // If there's an error, throw an exception
        }
      })
      .then((data) => {
        console.log("Resource successfully deleted:", data); // Handle the response data (if any)
        modalCtx.menuType === "main-menu" && mainMenuCtx.getMenusHandler();
        modalCtx.menuType === "kids-menu" && kidsMenuCtx.getMenusHandler();
        modalCtx.turnOffModalHandler();
      })
      .catch((error) => {
        console.error("Error:", error); // Handle any exceptions or errors
      });
  };

  return (
    <div className={classes.page}>
      <p className={classes.message}>Confirm Delete Item</p>
      <div>
        <button className={classes.button} onClick={deleteItemHandler}>
          Confirm
        </button>
        <BtnCancelCrudModal />
      </div>
    </div>
  );
};

export default ModalDeleteItem;
