import _ from "lodash";
import { CHECK } from "../action/types";

const checkReducer = (state = {}, action) => {
    switch (action.type) {
        case CHECK:
            return {
                ...state,
                ..._.mapKeys(action.payload, "title"),
            };
        default:
            return state;
    }
};
export default checkReducer;
