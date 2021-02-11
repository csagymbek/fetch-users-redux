import { createSelector } from "reselect";

export const UserPageState = (state) => {
  return state.userPageReducer;
};

export const makeSelectUser = createSelector(
  UserPageState,
  (userPage) => userPage?.user
);
