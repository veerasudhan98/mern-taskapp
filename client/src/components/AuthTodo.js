import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../action";
import { fetchTodo } from "../action";

class AuthTodo extends React.Component {
    // componentDidMount() {
    //     const isSignedIn = window.localStorage.getItem("isSignedIn");
    // }
    // reload = () => {
    //     if (!window.location.hash) {
    //         window.location = window.location + "#loaded";
    //         window.location.reload();
    //     }
    // };
    showButton = (button) => {
        if (button === "login") {
            return (
                <Link to="/todos/login" className="ui primary button">
                    {button}
                </Link>
            );
        } else {
            return (
                <Link to="/todos/profile" className="ui primary button">
                    {button}
                </Link>
            );
        }
    };

    render() {
        // this.reload();
        console.log(window.localStorage.getItem("isSignedIn"));
        const button =
            window.localStorage.getItem("isSignedIn") === "true"
                ? "logout"
                : "login";
        return <div>{this.showButton(button)}</div>;
    }
}

export default connect(null, { signOut, fetchTodo })(AuthTodo);
