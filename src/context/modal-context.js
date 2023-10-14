import React, { useState } from "react";

const ModalActiveContext = React.createContext({
  modalActive: false,
  turnOnModal: () => {},
  turnOffModal: () => {},
  modalType: null,
  selectModalTypeHandler: () => {},
});

export const ModalActiveContextProvider = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState(null);

  const turnOnModal = () => {
    setModalActive(true);
  };

  const turnOffModal = () => {
    setModalActive(false);
  };

  const selectModalTypeHandler = (type) => {
    setModalType(type);
  };
  return (
    <ModalActiveContext.Provider
      value={{
        modalActive,
        turnOnModal,
        turnOffModal,
        modalType,
        selectModalTypeHandler,
      }}
    >
      {props.children}
    </ModalActiveContext.Provider>
  );
};

export default ModalActiveContext;
