import React, { useContext, useEffect } from "react";
import { MoonLoader } from "react-spinners";

import classes from "./KidsMenu.module.scss";

import kidsMenuContext from "../../context/kids-menu-context";

import BtnOpenAddItem from "../../components/buttons/open-add-item/BtnOpenAddItem";
import ItemHeadings from "../../components/main-menu/item-headings/ItemHeadings";
import StandardItem from "../../components/main-menu/standard-item/StandardItem";
import MakeAMealItem from "../../components/kids-menu/make-a-meal/MakeAMealItem";

const KidsMenu = () => {
  const kidsMenuCtx = useContext(kidsMenuContext);

  //////////////////////////////////////  This needs to be changed to kids menu
  useEffect(() => {
    kidsMenuCtx.getMenusHandler();
  }, []);
  ///////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <div className={classes["page-wrapper"]}>
        <h2 className={classes.h2}>Kids Menu</h2>
        {kidsMenuCtx.state.menusLoaded === true && (
          <React.Fragment>
            <section className={classes.section}>
              {/*--- Starters ---*/}
              <h3 className={classes.h3}>Starters</h3>
              <ItemHeadings />
              {kidsMenuCtx.state.startersArr.map((item) => {
                return (
                  <StandardItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/starters"
                    key={item._id}
                    modalType="EditStandardItem"
                    menuType="kids-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/starters"
                type="PostStandardItem"
                menuType="kids-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Mains ---*/}
              <h3 className={classes.h3}>Main Meals</h3>
              <ItemHeadings />
              {kidsMenuCtx.state.mainsArr.map((item) => {
                return (
                  <StandardItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/mains"
                    key={item._id}
                    modalType="EditStandardItem"
                    menuType="kids-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/mains"
                type="PostStandardItem"
                menuType="kids-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Make A Meal Main ---*/}
              <h3 className={classes.h3}>Make A Meal: Mains</h3>
              <ItemHeadings />
              {kidsMenuCtx.state.makeAMealMainsArr.map((item) => {
                return (
                  <MakeAMealItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/make-a-meal-mains"
                    key={item._id}
                    modalType="EditMakeAMealItem"
                    menuType="kids-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/make-a-meal-mains"
                type="PostMakeAMealItem"
                menuType="kids-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Make A Meal Side ---*/}
              <h3 className={classes.h3}>Make A Meal: Sides</h3>
              <ItemHeadings />
              {kidsMenuCtx.state.makeAMealSidesArr.map((item) => {
                return (
                  <MakeAMealItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/make-a-meal-sides"
                    key={item._id}
                    modalType="EditMakeAMealItem"
                    menuType="kids-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/make-a-meal-sides"
                type="PostMakeAMealItem"
                menuType="kids-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Make A Meal Extras ---*/}
              <h3 className={classes.h3}>Make A Meal: Extras</h3>
              <ItemHeadings />
              {kidsMenuCtx.state.makeAMealExtrasArr.map((item) => {
                return (
                  <MakeAMealItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/make-a-meal-extras"
                    key={item._id}
                    modalType="EditMakeAMealItem"
                    menuType="kids-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/make-a-meal-extras"
                type="PostMakeAMealItem"
                menuType="kids-menu"
              />
            </section>
            <section className={classes.section}>
              {/*--- Desserts ---*/}
              <h3 className={classes.h3}>Desserts</h3>
              <ItemHeadings />
              {kidsMenuCtx.state.dessertsArr.map((item) => {
                return (
                  <StandardItem
                    name={item.name}
                    details={item.details}
                    dietary={item.dietary}
                    price={item.price}
                    itemId={item._id}
                    url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/desserts"
                    key={item._id}
                    modalType="EditStandardItem"
                    menuType="kids-menu"
                  />
                );
              })}
              <BtnOpenAddItem
                url="https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/desserts"
                type="PostStandardItem"
                menuType="kids-menu"
              />
            </section>
          </React.Fragment>
        )}

        {kidsMenuCtx.state.menusLoaded === false && (
          <div className={classes["spinner-wrapper"]}>
            <MoonLoader color="#e08220" />
          </div>
        )}

        {kidsMenuCtx.state.menusLoaded === "error" && (
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

export default KidsMenu;
