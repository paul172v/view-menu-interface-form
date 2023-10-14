import React, { useContext } from "react";

import classes from "./BtnOpenEditModal.module.scss";

import modalContext from "../../../context/modal-context";

const BtnOpenEditModal = (props) => {
  const ctx = useContext(modalContext);

  const goToEditModal = () => {
    ctx.selectModalTypeHandler("EditStandardItem");
    ctx.turnOnModal();
  };

  return (
    <button className={classes["button"]} onClick={goToEditModal}>
      {props.label}
    </button>
  );
};

export default BtnOpenEditModal;
