import React, { useEffect, useContext } from "react";
import { MoonLoader } from "react-spinners";

import classes from "./MainMenu.module.scss";

import mainMenuContext from "../../context/main-menu-context";

import BtnOpenAddItem from "../../components/buttons/open-add-item/BtnOpenAddItem";
import ItemHeadings from "../../components/main-menu/item-headings/ItemHeadings";
import StandardItem from "../../components/main-menu/standard-item/StandardItem";
import StandardItemWithAdds from "../../components/main-menu/standard-item-with-adds/StandardItemWithAdds";
import StandardItemNoDetails from "../../components/main-menu/standard-item-no-details/StandardItemNoDetails";
import StandardItemWithScoops from "../../components/main-menu/standard-item-with-scoops/StandardItemWithScoops";

const MainMenu = () => {
  const mainMenuCtx = useContext(mainMenuContext);

  //////////////////////////////////////
  useEffect(() => {
    mainMenuCtx.getMenusHandler();
  }, []);
  ///////////////////////////////////////////////////////
  return (
    <React.Fragment>
      <div className={classes["page-wrapper"]}>
        <h2 className={classes.h2}>Main Menu</h2>
        {mainMenuCtx.state.menusLoaded === true && (
          <React.Fragment>
            <section className={classes.section}>
              {/*--- Starters ---*/}
              <h3 className={classes.h3}>Starters</h3>
              <ItemHeadings />
              {mainMenuCtx.state.startersArr.map((item) => {
                return (
                  <StandardItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/starters"
                    key={item._id}
                    modalType="EditStandardItem"
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/starters"
                type="PostStandardItem"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Sharers ---*/}
              <h3 className={classes.h3}>Sharers</h3>
              <ItemHeadings />
              {mainMenuCtx.state.sharersArr.map((item) => {
                return (
                  <StandardItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/sharers"
                    key={item._id}
                    modalType="EditStandardItem"
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/sharers"
                type="PostStandardItem"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Mains ---*/}
              <h3 className={classes.h3}>Main Menu</h3>
              <ItemHeadings />
              {mainMenuCtx.state.mainsArr.map((item) => {
                return (
                  <StandardItemWithAdds
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/mains"
                    key={item._id}
                    modalType="EditStandardItemWithAdds"
                    add1Name={item.add[0] ? item.add[0].name : ""}
                    add1Price={item.add[0] ? item.add[0].price : ""}
                    add2Name={item.add[1] ? item.add[1].name : ""}
                    add2Price={item.add[1] ? item.add[1].price : ""}
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/mains"
                type="PostStandardItemWithAdds"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Salads ---*/}
              <h3 className={classes.h3}>Salads</h3>
              <ItemHeadings />
              {mainMenuCtx.state.saladsArr.map((item) => {
                return (
                  <StandardItemNoDetails
                    name={item.name}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/salads"
                    key={item._id}
                    modalType="EditStandardItemNoDetails"
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/salads"
                type="PostStandardItemNoDetails"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Steaks ---*/}
              <h3 className={classes.h3}>Steaks</h3>
              <ItemHeadings />
              {mainMenuCtx.state.steaksArr.map((item) => {
                return (
                  <StandardItemNoDetails
                    name={item.name}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/steaks"
                    key={item._id}
                    modalType="EditStandardItemNoDetails"
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/steaks"
                type="PostStandardItemNoDetails"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Steak Sides ---*/}
              <h3 className={classes.h3}>Steak Sides</h3>
              <ItemHeadings />
              {mainMenuCtx.state.steakSidesArr.map((item) => {
                return (
                  <StandardItemNoDetails
                    name={item.name}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/steak-sides"
                    key={item._id}
                    modalType="EditStandardItemNoDetails"
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/steak-sides"
                type="PostStandardItemNoDetails"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Burgers ---*/}
              <h3 className={classes.h3}>Burgers</h3>
              <ItemHeadings />
              {mainMenuCtx.state.burgersArr.map((item) => {
                return (
                  <StandardItemWithAdds
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/burgers"
                    key={item._id}
                    modalType="EditStandardItemWithAdds"
                    add1Name={item.add[0] ? item.add[0].name : ""}
                    add1Price={item.add[0] ? item.add[0].price : ""}
                    add2Name={item.add[1] ? item.add[1].name : ""}
                    add2Price={item.add[1] ? item.add[1].price : ""}
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/burgers"
                type="PostStandardItemWithAdds"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Sides ---*/}
              <h3 className={classes.h3}>Sides</h3>
              <ItemHeadings />
              {mainMenuCtx.state.sidesArr.map((item) => {
                return (
                  <StandardItemNoDetails
                    name={item.name}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/sides"
                    key={item._id}
                    modalType="EditStandardItemNoDetails"
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/sides"
                type="PostStandardItemNoDetails"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Loaded Fries ---*/}
              <h3 className={classes.h3}>Loaded Fries</h3>
              <ItemHeadings />
              {mainMenuCtx.state.loadedFriesArr.map((item) => {
                return (
                  <StandardItemNoDetails
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/loaded-fries"
                    key={item._id}
                    modalType="EditStandardItemNoDetails"
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/loaded-fries"
                type="PostStandardItemNoDetails"
                menuType="main-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Desserts ---*/}
              <h3 className={classes.h3}>Desserts</h3>
              <ItemHeadings />
              {mainMenuCtx.state.dessertsArr.map((item) => {
                return (
                  <StandardItemWithScoops
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/desserts"
                    key={item._id}
                    modalType="EditStandardItemWithScoops"
                    scoops1Amount={item.scoops[0] ? item.scoops[0].amount : ""}
                    scoops1Price={item.scoops[0] ? item.scoops[0].price : ""}
                    scoops2Amount={item.scoops[1] ? item.scoops[1].amount : ""}
                    scoops2Price={item.scoops[1] ? item.scoops[1].price : ""}
                    menuType="main-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/desserts"
                type="PostStandardItemWithScoops"
                menuType="main-menu"
              />
            </section>
          </React.Fragment>
        )}

        {mainMenuCtx.state.menusLoaded === false && (
          <div className={classes["spinner-wrapper"]}>
            <MoonLoader color="#e08220" />
          </div>
        )}

        {mainMenuCtx.state.menusLoaded === "error" && (
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
