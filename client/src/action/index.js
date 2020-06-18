import axios from "axios";
import {
    SIGN_IN,
    SIGN_OUT,
    SIGNUP_USER,
    CREATE_TODO,
    DELETE_TODO,
    EDIT_TODO,
    EDIT_USER,
    FETCH_TODO,
    FETCH_TODOS,
    FETCH_PROFILE,
    DELETE_USER,
    CHECK,
} from "./types";
import history from "../history";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWUzMWM3ZjNmMWY1ZTE1MDg5ZTdmMjgiLCJpYXQiOjE1OTE5ODc1MDR9.29YKdnin6muXKMci4G0bFWoGd1Fi8ilPr1kAv7iXXlM"

// export const currentToken = () =>{
//     const token = window.localStorage.getItem("token");
//     return {
//         type:'CURRENT_TOKEN',
//         payload: token
//     }
// }

// POST
export const signUp = (formValue) => async (dispatch) => {
    try {
        const response = await axios({
            method: "post",
            url: "/users",
            data: formValue,
        });
        if (response.status === 201) {
            alert("Account successfully created, Login to continue");
        }
        dispatch({ type: SIGNUP_USER, payload: response.data });
        history.push("/todos/login");
    } catch (e) {
        alert("Invalid credential!");
    }
};

export const signIn = (formValue) => async (dispatch) => {
    try {
        const response = await axios({
            method: "post",
            url: "/users/login",
            data: formValue,
        });
        const { user, token } = response.data;
        window.localStorage.clear();
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("_id", user._id);
        window.localStorage.setItem("isSignedIn", true);
        window.localStorage.setItem("reload", true);
        dispatch({ type: SIGN_IN, payload: response.data.user });
        //history.push("/task/create");
        history.push("/todos/list");
    } catch (e) {
        alert("Invalid credentials!");
    }
};

export const signOut = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios({
        method: "post",
        url: "/users/logout",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 401) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("_id");
        window.localStorage.setItem("isSignedIn", false);
    } else {
        alert(response.status);
    }
    if (response.status === 200) {
        alert("LoggedOut sucessfully");
    }
    dispatch({ type: SIGN_OUT, payload: response.data });
    history.push("/todos/login");
};

export const createTodo = (formValue) => async (dispatch) => {
    try {
        const token = window.localStorage.getItem("token");
        if (!token) {
            alert("unauthorized, login to continue!");
        }
        const response = await axios({
            method: "post",
            url: "/tasks",
            data: formValue,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch({ type: CREATE_TODO, payload: response.data });
        history.push("/todos/list");
    } catch (e) {
        history.push("/todos/login");
    }
};

// GET
export const fetchTodos = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    try {
        const response = await axios({
            method: "get",
            url: "/tasks",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch({ type: FETCH_TODOS, payload: response.data });
    } catch (e) {
        alert("login to instantly keep track of your task!");
        history.push("/todos/login");
    }
};

export const fetchTodo = (id) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    try {
        const response = await axios({
            method: "get",
            url: `/tasks/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch({ type: FETCH_TODO, payload: response.data });
    } catch (e) {
        console.log(e);
    }
};

export const fetchProfile = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios({
        method: "get",
        url: "/users/me",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    dispatch({ type: FETCH_PROFILE, payload: response.data });
};

// PATCH
export const editTodo = (id, formValue) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios({
        method: "patch",
        url: `/tasks/${id}`,
        data: formValue,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    dispatch({ type: EDIT_TODO, payload: response.data });
    // history.push("/todos/list");
    history.push("/todos/list");
};

export const editUser = (formValues) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios({
        method: "patch",
        url: "/users/me",
        data: formValues,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    dispatch({ type: EDIT_USER, payload: response.data });
    history.push("/todos/profile");
};

// DELETE
export const deleteTodo = (id) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios({
        method: "delete",
        url: `/tasks/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.error) {
        alert(response.error);
    }
    dispatch({ type: DELETE_TODO, payload: id });
    history.push("/todos/list");
};

export const deleteUser = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios({
        method: "delete",
        url: "/users/me",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    alert(response.error);
    dispatch({ type: DELETE_USER, payload: response.data });
    history.push("/todos/login");
};

export const check = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios({
        method: "get",
        url: "/tasks",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status === 401) {
        alert(response.status);
    }
    dispatch({ type: CHECK, payload: response.data });
};
