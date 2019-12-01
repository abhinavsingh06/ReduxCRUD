import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducers/reducers";

const rootReducer = combineReducers({ Reducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
