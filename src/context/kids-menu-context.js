import React, { useReducer } from "react";

const KidsMenuContext = React.createContext({
  state: null,
  setMenusLoadedHandler: () => {},
  getMenusHandler: () => {},
});

const initState = {
  menusLoaded: false,
  startersArr: null,
  mainsArr: null,
  makeAMealMainsArr: null,
  makeAMealSidesArr: null,
  makeAMealExtrasArr: null,
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
    case "updateMainsArr":
      return { ...state, mainsArr: value };
    case "updateMakeAMealMainsArr":
      return { ...state, makeAMealMainsArr: value };
    case "updateMakeAMealSidesArr":
      return { ...state, makeAMealSidesArr: value };
    case "updateMakeAMealExtrasArr":
      return { ...state, makeAMealExtrasArr: value };
    case "updateDessertsArr":
      return { ...state, dessertsArr: value };

    default:
      throw new Error();
  }
};

export const KidsMenuContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  ////// Fetch request to get menus
  const getMenusHandler = async () =>
    await fetch(
      "https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/get-every-array",
      {
        method: "GET", // Corrected here
        headers: {
          // Corrected here
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((dataObj) => {
        //handle data

        updateStartersArrHandler(dataObj.payload.data.startersArr);
        updateMainsArrHandler(dataObj.payload.data.mainsArr);
        updateMakeAMealMainsArrHandler(dataObj.payload.data.makeAMealMainsArr);
        updateMakeAMealSidesArrHandler(dataObj.payload.data.makeAMealSidesArr);
        updateMakeAMealExtrasArrHandler(
          dataObj.payload.data.makeAMealExtrasArr
        );
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

  const updateMainsArrHandler = (arr) =>
    dispatch({ type: "updateMainsArr", value: arr });

  const updateMakeAMealMainsArrHandler = (arr) =>
    dispatch({ type: "updateMakeAMealMainsArr", value: arr });

  const updateMakeAMealSidesArrHandler = (arr) =>
    dispatch({ type: "updateMakeAMealSidesArr", value: arr });

  const updateMakeAMealExtrasArrHandler = (arr) =>
    dispatch({ type: "updateMakeAMealExtrasArr", value: arr });

  const updateDessertsArrHandler = (arr) =>
    dispatch({ type: "updateDessertsArr", value: arr });

  return (
    <KidsMenuContext.Provider
      value={{
        state: state,
        setMenusLoadedHandler,
        getMenusHandler,
      }}
    >
      {props.children}
    </KidsMenuContext.Provider>
  );
};

export default KidsMenuContext;
