// import { SIGN_IN, SIGN_OUT } from "../action/types";

// const INIT_STATE = {
//     isSignedIn: null,
//     userId: null,
// };
// export default (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case SIGN_IN:
//             return { ...state, isSignedIn: true, userId: action.payload };
//         case SIGN_OUT:
//             return { ...state, isSignedIn: false, userId: null };
//         default:
//             return state;
//     }
// };
// import history from "../history";
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../action/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            window.localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload.name,
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            };
        default:
            return state;
    }
}
