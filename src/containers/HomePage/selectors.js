import { createSelector } from "reselect";

export const homePageState = (state) => {
  return state.homepageReducer;
};

export const makeSelectUsers = createSelector(
  homePageState,
  (homePage) => homePage?.users
);
