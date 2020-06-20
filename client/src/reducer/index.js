import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import todoReducer from "./todoReducer";
//import checkReducer from "./checkReducer";

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    todo: todoReducer,
    // check: checkReducer,
    error: errorReducer,
});
