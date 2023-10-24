import React, { useContext } from "react";

import classes from "./BtnOpenEditModal.module.scss";

import modalContext from "../../../context/modal-context";

const BtnOpenEditModal = (props) => {
  const modalCtx = useContext(modalContext);

  const goToEditModal = () => {
    modalCtx.setItemIdHandler(props.itemId);
    modalCtx.setFetchUrlHandler(props.url);
    modalCtx.setMenuTypeHandler(props.menuType);
    modalCtx.setModalTypeHandler(props.modalType);
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
    props.pint && modalCtx.setItemPintHandler(props.pint);
    props.halfPint && modalCtx.setItemHalfPintHandler(props.halfPint);
    props.percentage && modalCtx.setItemPercentageHandler(props.percentage);
    props.country && modalCtx.setItemCountryHandler(props.country);
    props.bottle && modalCtx.setItemBottleHandler(props.bottle);
    props.ml250 && modalCtx.setItemMl250Handler(props.ml250);
    props.ml175 && modalCtx.setItemMl175Handler(props.ml175);
    props.centiliter && modalCtx.setItemCentiliterHandler(props.centiliter);
    props.oz10 && modalCtx.setItemOz10Handler(props.oz10);
    props.oz16 && modalCtx.setItemOz16Handler(props.oz16);
  };

  return (
    <button className={classes["button"]} onClick={goToEditModal}>
      {props.label}
    </button>
  );
};

export default BtnOpenEditModal;
