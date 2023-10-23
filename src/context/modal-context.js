import React, { useState } from "react";

const ModalContext = React.createContext({
  triggerMenuReload: () => {},
  modalActive: false,
  turnOnModalHandler: () => {},
  turnOffModalHandler: () => {},
  modalType: null,
  setModalTypeHandler: () => {},
  menuType: null,
  setMenuTypeHandler: () => {},
  fetchUrl: null,
  setFetchUrlHandler: () => {},
  itemName: null,
  itemDetails: null,
  itemDietary: null,
  itemPrice: null,
  itemId: null,
  itemAdd1Name: null,
  itemAdd1Price: null,
  itemAdd2Name: null,
  itemAdd2Price: null,
  itemScoops1Amount: null,
  itemScoops1Price: null,
  itemScoops2Amount: null,
  itemScoops2Price: null,
  itemPint: null,
  itemHalfPint: null,
  itemPercentage: null,

  setItemNameHandler: () => {},
  setItemDetailsHandler: () => {},
  setItemDietaryHandler: () => {},
  setItemPriceHandler: () => {},
  setItemIdHandler: () => {},
  setItemAdd1NameHandler: () => {},
  setItemAdd1PriceHandler: () => {},
  setItemAdd2NameHandler: () => {},
  setItemAdd2PriceHandler: () => {},
  setItemScoops1AmountHandler: () => {},
  setItemScoops1PriceHandler: () => {},
  setItemScoops2AmountHandler: () => {},
  setItemScoops2PriceHandler: () => {},
  setItemPintHandler: () => {},
  setItemHalfPintHandler: () => {},
  setItemPercentageHandler: () => {},
});

export const ModalContextProvider = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [menuType, setMenuType] = useState(null);
  const [fetchUrl, setFetchUrl] = useState(null);
  const [itemName, setItemName] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [itemDietary, setItemDietary] = useState(null);
  const [itemPrice, setItemPrice] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [itemAdd1Name, setItemAdd1Name] = useState(null);
  const [itemAdd1Price, setItemAdd1Price] = useState(null);
  const [itemAdd2Name, setItemAdd2Name] = useState(null);
  const [itemAdd2Price, setItemAdd2Price] = useState(null);
  const [itemScoops1Amount, setItemScoops1Amount] = useState(null);
  const [itemScoops1Price, setItemScoops1Price] = useState(null);
  const [itemScoops2Amount, setItemScoops2Amount] = useState(null);
  const [itemScoops2Price, setItemScoops2Price] = useState(null);
  const [itemPint, setItemPint] = useState(null);
  const [itemHalfPint, setItemHalfPint] = useState(null);
  const [itemPercentage, setItemPercentage] = useState(null);

  const turnOnModalHandler = () => {
    setModalActive(true);
  };

  const turnOffModalHandler = () => {
    setModalActive(false);
  };

  const setModalTypeHandler = (type) => {
    setModalType(type);
  };

  const setMenuTypeHandler = (type) => {
    setMenuType(type);
  };

  const setFetchUrlHandler = (url) => {
    setFetchUrl(url);
  };

  const setItemNameHandler = (name) => {
    setItemName(name);
  };

  const setItemDetailsHandler = (details) => {
    setItemDetails(details);
  };

  const setItemDietaryHandler = (dietaryArr) => {
    setItemDietary(dietaryArr);
  };

  const setItemPriceHandler = (price) => {
    setItemPrice(price);
  };

  const setItemIdHandler = (id) => {
    setItemId(id);
  };

  const setItemAdd1NameHandler = (name) => {
    setItemAdd1Name(name);
  };

  const setItemAdd1PriceHandler = (price) => {
    setItemAdd1Price(price);
  };

  const setItemAdd2NameHandler = (name) => {
    setItemAdd2Name(name);
  };

  const setItemAdd2PriceHandler = (price) => {
    setItemAdd2Price(price);
  };

  const setItemScoops1AmountHandler = (amount) => {
    setItemScoops1Amount(amount);
  };

  const setItemScoops1PriceHandler = (price) => {
    setItemScoops1Price(price);
  };

  const setItemScoops2AmountHandler = (amount) => {
    setItemScoops2Amount(amount);
  };

  const setItemScoops2PriceHandler = (price) => {
    setItemScoops2Price(price);
  };

  const setItemPintHandler = (price) => {
    setItemPint(price);
  };

  const setItemHalfPintHandler = (price) => {
    setItemHalfPint(price);
  };

  const setItemPercentageHandler = (percentage) => {
    setItemPercentage(percentage);
  };

  return (
    <ModalContext.Provider
      value={{
        modalActive,
        turnOnModalHandler,
        turnOffModalHandler,
        modalType,
        setModalTypeHandler,
        menuType,
        setMenuTypeHandler,
        fetchUrl,
        setFetchUrlHandler,
        itemName,
        itemDetails,
        itemDietary,
        itemPrice,
        itemId,
        itemAdd1Name,
        itemAdd1Price,
        itemAdd2Name,
        itemAdd2Price,
        itemScoops1Amount,
        itemScoops1Price,
        itemScoops2Amount,
        itemScoops2Price,
        itemPint,
        itemHalfPint,
        itemPercentage,
        setItemNameHandler,
        setItemDetailsHandler,
        setItemDietaryHandler,
        setItemPriceHandler,
        setItemIdHandler,
        setItemAdd1NameHandler,
        setItemAdd1PriceHandler,
        setItemAdd2NameHandler,
        setItemAdd2PriceHandler,
        setItemScoops1AmountHandler,
        setItemScoops1PriceHandler,
        setItemScoops2AmountHandler,
        setItemScoops2PriceHandler,
        setItemPintHandler,
        setItemHalfPintHandler,
        setItemPercentageHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
