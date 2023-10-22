import React, { useContext } from "react";

import classes from "./BtnOpenAddItem.module.scss";

import modalContext from "../../../context/modal-context";

const BtnOpenAddItem = (props) => {
  const modalCtx = useContext(modalContext);

  const goToPostModal = () => {
    modalCtx.setModalTypeHandler(props.type);
    modalCtx.setFetchUrlHandler(props.url);
    modalCtx.setMenuTypeHandler(props.menuType);
    modalCtx.turnOnModalHandler();
  };

  return (
    <button className={classes["button"]} onClick={goToPostModal}>
      Add Item
    </button>
  );
};

export default BtnOpenAddItem;
