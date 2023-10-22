import React, { useContext } from "react";

import classes from "./BtnOpenDeleteItem.module.scss";

import modalContext from "../../../context/modal-context";

const BtnDeleteItem = (props) => {
  const modalCtx = useContext(modalContext);

  const openDeleteItemHandler = () => {
    modalCtx.setItemIdHandler(props.itemId);
    modalCtx.setFetchUrlHandler(props.url);
    modalCtx.setMenuTypeHandler(props.menuType);
    modalCtx.setModalTypeHandler("DeleteItem");
    modalCtx.turnOnModalHandler();
  };

  return (
    <button className={classes["button"]} onClick={openDeleteItemHandler}>
      {props.label}
    </button>
  );
};

export default BtnDeleteItem;
