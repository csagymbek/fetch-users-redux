import { ActionTypes } from "./constants";

const initialState = { users: [] };

export const homepageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};
