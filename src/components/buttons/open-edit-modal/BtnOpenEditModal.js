import React, { useContext } from "react";

import classes from "./BtnOpenEditModal.module.scss";

import modalContext from "../../../context/modal-context";

const BtnOpenEditModal = (props) => {
  const modalCtx = useContext(modalContext);

  const goToEditModal = () => {
    modalCtx.setItemIdHandler(props.itemId);
    modalCtx.setFetchUrlHandler(props.url);
    props.modalType === "EditStandardItem" &&
      modalCtx.setModalTypeHandler("EditStandardItem");
    props.modalType === "EditStandardItemWithAdds" &&
      modalCtx.setModalTypeHandler("EditStandardItemWithAdds");
    props.modalType === "EditStandardItemNoDetails" &&
      modalCtx.setModalTypeHandler("EditStandardItemNoDetails");
    props.modalType === "EditStandardItemWithScoops" &&
      modalCtx.setModalTypeHandler("EditStandardItemWithScoops");
    modalCtx.turnOnModalHandler();

    props.name && modalCtx.setItemNameHandler(props.name);
    props.details && modalCtx.setItemDetailsHandler(props.details);
    props.dietary && modalCtx.setItemDietaryHandler(props.dietary);
    props.price && modalCtx.setItemPriceHandler(props.price);
    props.add1Name && modalCtx.setItemAdd1NameHandler(props.add1Name);
    props.add1Price && modalCtx.setItemAdd1PriceHandler(props.add1Price);
    props.add2Name && modalCtx.setItemAdd2NameHandler(props.add2Name);
    props.add2Price && modalCtx.setItemAdd2PriceHandler(props.add2Price);
    props.add1Name === "" && modalCtx.setItemAdd1NameHandler("");
    props.add1Price === "" && modalCtx.setItemAdd1PriceHandler("");
    props.add2Name === "" && modalCtx.setItemAdd2NameHandler("");
    props.add2Price === "" && modalCtx.setItemAdd2PriceHandler("");
    props.scoops1Amount &&
      modalCtx.setItemScoops1AmountHandler(props.scoops1Amount);
    props.scoops1Price &&
      modalCtx.setItemScoops1PriceHandler(props.scoops1Price);
    props.scoops2Amount &&
      modalCtx.setItemScoops2AmountHandler(props.scoops2Amount);
    props.scoops2Price &&
      modalCtx.setItemScoops2PriceHandler(props.scoops2Price);
    props.scoops1Amount === "" && modalCtx.setItemScoops1AmountHandler("");
    props.scoops1Price === "" && modalCtx.setItemScoops1PriceHandler("");
    props.scoops2Amount === "" && modalCtx.setItemScoops2AmountHandler("");
    props.scoops2Price === "" && modalCtx.setItemScoops2PriceHandler("");
  };

  return (
    <button className={classes["button"]} onClick={goToEditModal}>
      {props.label}
    </button>
  );
};

export default BtnOpenEditModal;
