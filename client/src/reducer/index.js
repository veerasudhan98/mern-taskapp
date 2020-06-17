import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AuthReducer from "./authReducer";
import todoReducer from "./todoReducer";
import checkReducer from "./checkReducer";

export default combineReducers({
    form: formReducer,
    auth: AuthReducer,
    todo: todoReducer,
    check: checkReducer,
});
