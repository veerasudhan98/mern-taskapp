import _ from "lodash";
import {
    // SIGNUP_USER,
    CREATE_TODO,
    DELETE_TODO,
    EDIT_TODO,
    EDIT_USER,
    FETCH_TODO,
    FETCH_TODOS,
    FETCH_PROFILE,
    DELETE_USER,
} from "../action/types";

const todoReducer = (state = {}, action) => {
    switch (action.type) {
        // case SIGNUP_USER:
        //     return { ...state, [action.payload.id]: action.payload };
        // case SIGNIN_USER:
        //     return {...state, [action.payload.id]: action.payload}
        case FETCH_TODOS:
            //convert:array->obj
            return { ...state, ..._.mapKeys(action.payload, "_id") };
        case FETCH_TODO:
            return { ...state, [action.payload._id]: action.payload };
        case CREATE_TODO:
            return { ...state, [action.payload._id]: action.payload };
        case EDIT_TODO:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_TODO:
            return _.omit(state, action.payload);
        case FETCH_PROFILE:
            return { ...state, profile: action.payload };
        case EDIT_USER:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_USER:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export default todoReducer;
