import React, { useReducer, useEffect } from "react";

const MainMenuContext = React.createContext({
  state: null,
  setMenusLoadedHandler: () => {},
  getMenusHandler: () => {},
});

const initState = {
  menusLoaded: false,
  startersArr: null,
  sharersArr: null,
  mainsArr: null,
  saladsArr: null,
  steaksArr: null,
  steakSidesArr: null,
  burgersArr: null,
  sidesArr: null,
  loadedFriesArr: null,
  dessertsArr: null,
};

const reducer = (state, { type, value }) => {
  switch (type) {
    ///// Set the menuLoaded state
    case "setMenusLoaded":
      return { ...state, menusLoaded: value };

    ///// Assign values to the main state
    case "updateStartersArr":
      return { ...state, startersArr: value };
    case "updateSharersArr":
      return { ...state, sharersArr: value };
    case "updateMainsArr":
      return { ...state, mainsArr: value };
    case "updateSaladsArr":
      return { ...state, saladsArr: value };
    case "updateSteaksArr":
      return { ...state, steaksArr: value };
    case "updateSteakSidesArr":
      return { ...state, steakSidesArr: value };
    case "updateBurgersArr":
      return { ...state, burgersArr: value };
    case "updateSidesArr":
      return { ...state, sidesArr: value };
    case "updateLoadedFriesArr":
      return { ...state, loadedFriesArr: value };
    case "updateDessertsArr":
      return { ...state, dessertsArr: value };

    default:
      throw new Error();
  }
};

export const MainMenuContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  ////// Fetch request to get menus
  const getMenusHandler = () =>
    fetch("http://127.0.0.1:5000/api/v1/main-menu/get-every-array", {
      method: "GET", // Corrected here
      headers: {
        // Corrected here
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dataObj) => {
        //handle data

        updateStartersArrHandler(dataObj.payload.data.startersArr);
        updateSharersArrHandler(dataObj.payload.data.sharersArr);
        updateMainsArrHandler(dataObj.payload.data.mainsArr);
        updateSaladsArrHandler(dataObj.payload.data.saladsArr);
        updateSteaksArrHandler(dataObj.payload.data.steaksArr);
        updateSteakSidesArrHandler(dataObj.payload.data.steakSidesArr);
        updateBurgersArrHandler(dataObj.payload.data.burgersArr);
        updateSidesArrHandler(dataObj.payload.data.sidesArr);
        updateLoadedFriesArrHandler(dataObj.payload.data.loadedFriesArr);
        updateDessertsArrHandler(dataObj.payload.data.dessertsArr);
        setMenusLoadedHandler(true);
      })
      .catch((error) => {
        setMenusLoadedHandler("error");
      });
  //////

  const setMenusLoadedHandler = (value) =>
    dispatch({ type: "setMenusLoaded", value: value });

  const updateStartersArrHandler = (arr) =>
    dispatch({ type: "updateStartersArr", value: arr });

  const updateSharersArrHandler = (arr) =>
    dispatch({ type: "updateSharersArr", value: arr });

  const updateMainsArrHandler = (arr) =>
    dispatch({ type: "updateMainsArr", value: arr });

  const updateSaladsArrHandler = (arr) =>
    dispatch({ type: "updateSaladsArr", value: arr });

  const updateSteaksArrHandler = (arr) =>
    dispatch({ type: "updateSteaksArr", value: arr });

  const updateSteakSidesArrHandler = (arr) =>
    dispatch({ type: "updateSteakSidesArr", value: arr });

  const updateBurgersArrHandler = (arr) =>
    dispatch({ type: "updateBurgersArr", value: arr });

  const updateSidesArrHandler = (arr) =>
    dispatch({ type: "updateSidesArr", value: arr });

  const updateLoadedFriesArrHandler = (arr) =>
    dispatch({ type: "updateLoadedFriesArr", value: arr });

  const updateDessertsArrHandler = (arr) =>
    dispatch({ type: "updateDessertsArr", value: arr });

  return (
    <MainMenuContext.Provider
      value={{
        state: state,
        setMenusLoadedHandler,
        getMenusHandler,
      }}
    >
      {props.children}
    </MainMenuContext.Provider>
  );
};

export default MainMenuContext;
