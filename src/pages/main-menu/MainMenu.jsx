import React, { useReducer, useEffect } from "react";
import { MoonLoader } from "react-spinners";

import classes from "./MainMenu.module.scss";

import BtnOpenAddItem from "../../components/buttons/open-add-item/BtnOpenAddItem";
import StandardItemHeadings from "../../components/main-menu/standard-item/headings/standardItem--Headings";
import StandardItemItem from "../../components/main-menu/standard-item/item/StandardItem--Item";

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

const MainMenu = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  //////////////////////////////////////
  useEffect(() => {
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

        dispatch({
          type: "updateStartersArr",
          value: dataObj.payload.data.startersArr,
        });
        dispatch({
          type: "updateSharersArr",
          value: dataObj.payload.data.sharersArr,
        });
        dispatch({
          type: "updateMainsArr",
          value: dataObj.payload.data.mainsArr,
        });
        dispatch({
          type: "updateSaladsArr",
          value: dataObj.payload.data.saladsArr,
        });
        dispatch({
          type: "updateSteaksArr",
          value: dataObj.payload.data.steaksArr,
        });
        dispatch({
          type: "updateBurgersArr",
          value: dataObj.payload.data.burgersArr,
        });
        dispatch({
          type: "updateSteakSidesArr",
          value: dataObj.payload.data.steakSidesArr,
        });
        dispatch({
          type: "updateSidesArr",
          value: dataObj.payload.data.sidesArr,
        });
        dispatch({
          type: "updateLoadedFriesArr",
          value: dataObj.payload.data.loadedFriesArr,
        });
        dispatch({
          type: "updateDessertsArr",
          value: dataObj.payload.data.dessertsArr,
        });

        dispatch({ type: "setMenusLoaded", value: true });
      })
      .catch((error) => {
        dispatch({ type: "setMenusLoaded", value: "error" });
      });
  }, []);
  ///////////////////////////////////////////////////////
  return (
    <React.Fragment>
      <div className={classes["page-wrapper"]}>
        <h2 className={classes.h2}>Main Menu</h2>
        {state.menusLoaded === true && (
          <React.Fragment>
            <section className={classes.section}>
              {/*--- Starters ---*/}
              <h3 className={classes.h3}>Starters</h3>
              <StandardItemHeadings />
              {state.startersArr.map((item) => {
                return (
                  <StandardItemItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    key={item.name}
                    modalType=""
                  />
                );
              })}
              <BtnOpenAddItem />
            </section>

            <section className={classes.section}>
              {/*--- Sharers---*/}
              <h3 className={classes.h3}>Sharers</h3>
              <StandardItemHeadings />
              {state.sharersArr.map((item) => {
                return (
                  <StandardItemItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    key={item.name}
                    modalType=""
                  />
                );
              })}
              <BtnOpenAddItem />
            </section>
          </React.Fragment>
        )}

        {state.menusLoaded === false && (
          <div className={classes["spinner-wrapper"]}>
            <MoonLoader color="#e08220" />
          </div>
        )}

        {state.menusLoaded === "error" && (
          <div className={classes["spinner-wrapper"]}>
            <p className={classes["error-message"]}>
              Menus could not be loaded. Please try again later.
            </p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MainMenu;
