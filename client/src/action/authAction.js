import axios from "axios";
import { returnErrors } from "./errorAction";
import history from "../history";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "./types";

// Check token & load user

export const loadUser = (token) => async (dispatch) => {
    // User loading
    console.log("loadUser");
    dispatch({ type: USER_LOADING });

    const response = await axios({
        method: "get",
        url: "/users/me",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    try {
        if (response.data) {
            dispatch({
                type: USER_LOADED,
                payload: response.data,
            });
        }
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

//POST
export const register = (formValue) => async (dispatch) => {
    try {
        const response = await axios({
            method: "post",
            url: "/users",
            data: formValue,
        });
        if (response.status === 201) {
            alert("Account successfully created");
        }
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
        history.push("/todos/list");
    } catch (e) {
        dispatch({
            type: REGISTER_FAIL,
        });
        console.log(e);
        alert("Invalid credential!");
    }
};
//
//LOGIN
export const login = (formValue) => async (dispatch) => {
    try {
        const response = await axios({
            method: "post",
            url: "/users/login",
            data: formValue,
        });
        if (response.status === 200) {
            dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        }
        history.push("/todos/list");
    } catch (e) {
        alert("Invalid credentials!");
        dispatch({ type: LOGIN_FAIL });
    }
};
//LOGOUT
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

// // axios.get("/users/me")
// //     .then((res) =>
// //         dispatch({
// //             headers: {
// //                 Authorization: `Bearer ${token}`,
// //             },
// //         })
// //     )
// //     .catch((err) => {
// //         dispatch(returnErrors(err.response.data, err.response.status));
// //         dispatch({
// //             type: AUTH_ERROR,
// //         });
// //     });

// // Register User
// // export const register = ({ name, email, password }) => (dispatch) => {
// //     // Headers
// //     const config = {
// //         headers: {
// //             "Content-Type": "application/json",
// //         },
// //     };

// // Request body
// export const register = (formValue) => async (dispatch) => {
//     const response = await axios({
//         method: "post",
//         url: "/users",
//         data: formValue,
//     });
//     try {
//         dispatch({
//             type: REGISTER_SUCCESS,
//             payload: response.data,
//         });
//         if (response.status === 201) {
//             alert("Account successfully created");
//         }
//         // dispatch({ type: SIGNUP_USER, payload: response.data });
//         history.push("/todos/list");
//     } catch (err) {
//         dispatch(
//             returnErrors(err.response.msg, err.response.status, "REGISTER_FAIL")
//         );
//         dispatch({
//             type: REGISTER_FAIL,
//         });
//         alert("invalid credentials");
//     }
// };

// // const body = JSON.stringify({ name, email, password });

// //     axios
// //         .post("/users", body, config)
// //         .then((res) =>
// //             dispatch({
// //                 type: REGISTER_SUCCESS,
// //                 payload: res.data,
// //             })
// //         )
// //         .catch((err) => {
// //             dispatch(
// //                 returnErrors(
// //                     err.response.data,
// //                     err.response.status,
// //                     "REGISTER_FAIL"
// //                 )
// //             );
// //             dispatch({
// //                 type: REGISTER_FAIL,
// //             });
// //         });
// // };

// // Login User
// export const login = (formValues) => async (dispatch) => {
//     // Headers

//     // Request body
//     //const body = JSON.stringify({ email, password })
//     try {
//         const response = await axios({
//             method: "post",
//             url: "/users/login",
//             data: formValues,
//         });
//     if(status   )
//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: response.data,
//         });
//         // console.log("this is response", response.data);
//     if(status!== 201){

//         //const newerr = JSON.stringify(err);
//         // console.log(newerr);
//         dispatch(returnErrors(err.msg, err.status, "LOGIN_FAIL"));
//         dispatch({
//             type: LOGIN_FAIL,
//         });
//     }
//     }
// };

// // Logout User

// // Setup config/headers and token
// export const tokenConfig = (getState) => {
//     // Get token from localstorage
//     const token = getState().auth.token;

//     // Headers
//     const config = {
//         headers: {
//             "Content-type": "application/json",
//         },
//     };

//     // If token, add to headers
//     if (token) {
//         config.headers["Bearer"] = token;
//     }

//     return config;
// };
