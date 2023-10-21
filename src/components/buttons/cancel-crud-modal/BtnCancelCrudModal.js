import React, { useContext } from "react";

import classes from "./BtnCancelCrudModal.module.scss";

import modalContext from "../../../context/modal-context";

const BtnCancelCrudModal = () => {
  const ctx = useContext(modalContext);

  return (
    <button className={classes.button} onClick={ctx.turnOffModalHandler}>
      Cancel
    </button>
  );
};

export default BtnCancelCrudModal;
