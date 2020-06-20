import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    Reducer,
    composeEnhancer(applyMiddleware(reduxThunk))
);

export default store;
