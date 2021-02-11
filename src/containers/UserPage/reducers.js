import { ActionTypes } from "./constants";

const initialState = { user: null };

export const userPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
