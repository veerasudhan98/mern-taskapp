import React from "react";
import { Router, Route, Switch } from "react-router-dom";

//import GetStarted from "./todo/GetStarted";
import UserSignUp from "./todo/UserSignUp";
import UserSignIn from "./todo/UserSignIn";
import Header from "./Header";
import ListTodo from "./todo/ListTodo";
import CreateTodo from "./todo/CreateTodo";
import EditTodo from "./todo/EditTodo";
import DeleteTodo from "./todo/DeleteTodo";
import ReadProfile from "./todo/ReadProfile";
import EditProfile from "./todo/EditProfile";
import DeleteUser from "./todo/DeleteUser";
import { loadUser } from "../action/authAction";
import history from "../history";

import store from "../store";

class App extends React.Component {
    componentDidMount() {
        const token = window.localStorage.getItem("token");
        console.log(token);
        store.dispatch(loadUser(token));
    }
    render() {
        return (
            <div>
                <div className="ui container">
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                {/* <Route path="/" exact component={GetStarted} /> */}
                                <Route path="/" exact component={UserSignIn} />
                                <Route
                                    path="/todos/signup"
                                    exact
                                    component={UserSignUp}
                                />
                                <Route
                                    path="/todos/list"
                                    exact
                                    component={ListTodo}
                                />
                                <Route
                                    path="/todos/create"
                                    exact
                                    component={CreateTodo}
                                />
                                <Route
                                    path="/todos/edit/:id"
                                    exact
                                    component={EditTodo}
                                />
                                <Route
                                    path="/todos/delete/:id"
                                    exact
                                    component={DeleteTodo}
                                />
                                <Route
                                    path="/todos/profile/"
                                    exact
                                    component={ReadProfile}
                                />
                                <Route
                                    path="/todos/Profile/edit/"
                                    exact
                                    component={EditProfile}
                                />
                                <Route
                                    path="/todos/profile/Delete/"
                                    exact
                                    component={DeleteUser}
                                />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
