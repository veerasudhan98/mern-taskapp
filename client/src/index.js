import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App.js";
import Reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    Reducer,
    composeEnhancer(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
