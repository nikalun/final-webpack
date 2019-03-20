import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { cityReducer, weatherReducer } from "./reducers";

const reducer = combineReducers({
    cityReducer: cityReducer,
    weatherReducer: weatherReducer
});

export const store = createStore(reducer, applyMiddleware(logger, thunk));
