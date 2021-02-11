import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { homepageReducer } from "./containers/HomePage/reducers";
import { userPageReducer } from "./containers/UserPage/reducers";

const reducers = combineReducers({ homepageReducer, userPageReducer });

export const store = createStore(reducers, composeWithDevTools());
