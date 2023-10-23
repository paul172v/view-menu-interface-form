import React, { useReducer } from "react";

const DrinksMenuContext = React.createContext({
  state: null,
  setMenusLoadedHandler: () => {},
  getMenusHandler: () => {},
});

const initState = {
  menusLoaded: false,
  draughtBeerAndCiderArr: null,
  bottledBeerAndCiderArr: null,
  scottishFyneAlesArr: null,
  ginArr: null,
  cocktailsArr: null,
  frozenCocktailsArr: null,
  vodkaArr: null,
};

const reducer = (state, { type, value }) => {
  switch (type) {
    ///// Set the menuLoaded state
    case "setMenusLoaded":
      return { ...state, menusLoaded: value };

    ///// Assign values to the main state
    case "updateDraughtBeerAndCiderArr":
      return { ...state, draughtBeerAndCiderArr: value };
    case "updateBottledBeerAndCiderArr":
      return { ...state, bottledBeerAndCiderArr: value };
    case "updateScottishFyneAlesArr":
      return { ...state, scottishFyneAlesArr: value };
    case "updateGinArr":
      return { ...state, ginArr: value };
    case "updateCocktailsArr":
      return { ...state, cocktailsArr: value };
    case "updateFrozenCocktailsArr":
      return { ...state, frozenCocktailsArr: value };
    case "updateVodkaArr":
      return { ...state, vodkaArr: value };

    default:
      throw new Error();
  }
};

export const DrinksMenuContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  ////// Fetch request to get menus
  const getMenusHandler = async () =>
    await fetch("http://127.0.0.1:5000/api/v1/drinks-menu/get-every-array", {
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

        updateDraughtBeerAndCiderArrHandler(
          dataObj.payload.data.draughtBeerAndCiderArr
        );
        updateBottledBeerAndCiderArrHandler(
          dataObj.payload.data.bottledBeerAndCiderArr
        );
        updateScottishFyneAlesArrHandler(
          dataObj.payload.data.scottishFyneAlesArr
        );
        updateGinArrHandler(dataObj.payload.data.ginArr);
        updateCocktailsArrHandler(dataObj.payload.data.cocktailsArr);
        updateFrozenCocktailsArrHandler(
          dataObj.payload.data.frozenCocktailsArr
        );
        updateVodkaArrHandler(dataObj.payload.data.vodkaArr);

        setMenusLoadedHandler(true);
      })
      .catch((error) => {
        setMenusLoadedHandler("error");
      });
  //////

  const setMenusLoadedHandler = (value) =>
    dispatch({ type: "setMenusLoaded", value: value });

  const updateDraughtBeerAndCiderArrHandler = (arr) =>
    dispatch({ type: "updateDraughtBeerAndCiderArr", value: arr });

  const updateBottledBeerAndCiderArrHandler = (arr) =>
    dispatch({ type: "updateBottledBeerAndCiderArr", value: arr });

  const updateScottishFyneAlesArrHandler = (arr) =>
    dispatch({ type: "updateScottishFyneAlesArr", value: arr });

  const updateGinArrHandler = (arr) =>
    dispatch({ type: "updateGinArr", value: arr });

  const updateCocktailsArrHandler = (arr) =>
    dispatch({ type: "updateCocktailsArr", value: arr });

  const updateFrozenCocktailsArrHandler = (arr) =>
    dispatch({ type: "updateFrozenCocktailsArr", value: arr });

  const updateVodkaArrHandler = (arr) =>
    dispatch({ type: "updateVodkaArr", value: arr });

  return (
    <DrinksMenuContext.Provider
      value={{
        state: state,
        setMenusLoadedHandler,
        getMenusHandler,
      }}
    >
      {props.children}
    </DrinksMenuContext.Provider>
  );
};

export default DrinksMenuContext;
