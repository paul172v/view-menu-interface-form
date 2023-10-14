import React, { useContext } from "react";

import classes from "./BtnOpenAddItem.module.scss";

import modalContext from "../../../context/modal-context";

const BtnOpenAddItem = (props) => {
  const ctx = useContext(modalContext);

  const goToEditModal = () => {
    ctx.selectModalTypeHandler("PostStandardItem");
    ctx.turnOnModal();
  };

  return (
    <button className={classes["button"]} onClick={goToEditModal}>
      Add Item
    </button>
  );
};

export default BtnOpenAddItem;
