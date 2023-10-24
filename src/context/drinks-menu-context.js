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
  spiritsArr: null,
  shootersArr: null,
  maltsArr: null,
  redWineArr: null,
  roseWineArr: null,
  whiteWineArr: null,
  sparklingWineArr: null,
  champagneArr: null,
  mixersArr: null,
  softDrinks10ozArr: null,
  softDrinks330mlArr: null,
  softDrinks275mlArr: null,
  softDrinks250mlArr: null,
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
    case "updateSpiritsArr":
      return { ...state, spiritsArr: value };
    case "updateShootersArr":
      return { ...state, shootersArr: value };
    case "updateMaltsArr":
      return { ...state, maltsArr: value };
    case "updateRedWineArr":
      return { ...state, redWineArr: value };
    case "updateRoseWineArr":
      return { ...state, roseWineArr: value };
    case "updateWhiteWineArr":
      return { ...state, whiteWineArr: value };
    case "updateSparklingWineArr":
      return { ...state, sparklingWineArr: value };
    case "updateChampagneArr":
      return { ...state, champagneArr: value };
    case "updateMixersArr":
      return { ...state, mixersArr: value };
    case "updateSoftDrinks10ozArr":
      return { ...state, softDrinks10ozArr: value };
    case "updateSoftDrinks330mlArr":
      return { ...state, softDrinks330mlArr: value };
    case "updateSoftDrinks275mlArr":
      return { ...state, softDrinks275mlArr: value };
    case "updateSoftDrinks250mlArr":
      return { ...state, softDrinks250mlArr: value };

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
        updateSpiritsArrHandler(dataObj.payload.data.spiritsArr);
        updateShootersArrHandler(dataObj.payload.data.shootersArr);
        updateMaltsArrHandler(dataObj.payload.data.maltsArr);
        updateRedWineArrHandler(dataObj.payload.data.redWineArr);
        updateRoseWineArrHandler(dataObj.payload.data.roseWineArr);
        updateWhiteWineArrHandler(dataObj.payload.data.whiteWineArr);
        updateSparklingWineArrHandler(dataObj.payload.data.sparklingWineArr);
        updateChampagneArrHandler(dataObj.payload.data.champagneArr);
        updateMixersArrHandler(dataObj.payload.data.mixersArr);
        updateSoftDrinks10ozArrHandler(dataObj.payload.data.softDrinks10ozArr);
        updateSoftDrinks330mlArrHandler(
          dataObj.payload.data.softDrinks330mlArr
        );
        updateSoftDrinks275mlArrHandler(
          dataObj.payload.data.softDrinks275mlArr
        );
        updateSoftDrinks250mlArrHandler(
          dataObj.payload.data.softDrinks250mlArr
        );

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

  const updateSpiritsArrHandler = (arr) =>
    dispatch({ type: "updateSpiritsArr", value: arr });

  const updateShootersArrHandler = (arr) =>
    dispatch({ type: "updateShootersArr", value: arr });

  const updateMaltsArrHandler = (arr) =>
    dispatch({ type: "updateMaltsArr", value: arr });

  const updateRedWineArrHandler = (arr) =>
    dispatch({ type: "updateRedWineArr", value: arr });

  const updateRoseWineArrHandler = (arr) =>
    dispatch({ type: "updateRoseWineArr", value: arr });

  const updateWhiteWineArrHandler = (arr) =>
    dispatch({ type: "updateWhiteWineArr", value: arr });

  const updateSparklingWineArrHandler = (arr) =>
    dispatch({ type: "updateSparklingWineArr", value: arr });

  const updateChampagneArrHandler = (arr) =>
    dispatch({ type: "updateChampagneArr", value: arr });

  const updateMixersArrHandler = (arr) =>
    dispatch({ type: "updateMixersArr", value: arr });

  const updateSoftDrinks10ozArrHandler = (arr) =>
    dispatch({ type: "updateSoftDrinks10ozArr", value: arr });

  const updateSoftDrinks330mlArrHandler = (arr) =>
    dispatch({ type: "updateSoftDrinks330mlArr", value: arr });

  const updateSoftDrinks275mlArrHandler = (arr) =>
    dispatch({ type: "updateSoftDrinks275mlArr", value: arr });

  const updateSoftDrinks250mlArrHandler = (arr) =>
    dispatch({ type: "updateSoftDrinks250mlArr", value: arr });

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
