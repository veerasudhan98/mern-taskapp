import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../action/authAction";
import { fetchTodo } from "../action";

//import propTypes from "prop-types";

class AuthTodo extends Component {
    // static propTypes = {
    //     authentication: PropTypes.object.isRequired,
    // };

    // showButton = (button) => {
    //     if (button === "login") {
    //         return (
    //             <Link to="/todos/login" className="ui primary button">
    //                 {button}
    //             </Link>
    //         );
    //     } else {
    //         return (
    //             <Link to="/todos/profile" className="ui primary button">
    //                 {button}
    //             </Link>
    //         );
    //     }
    // };

    render() {
        const isAuthenticated = this.props.isAuthenticated;
        const authLink = (
            <Fragment>
                <div>
                    <Link to="/todos/profile">Logout</Link>
                </div>
            </Fragment>
        );
        const guestLink = (
            <Fragment>
                <div>
                    <Link to="/todos/login">Login</Link>
                </div>
            </Fragment>
        );
        // const guestList = (
        //     <Fragment>
        //         <div>

        //         </div>
        //     </Fragment>
        // )
        // this.reload();
        // console.log(window.localStorage.getItem("isSignedIn"));
        // const button =
        //     window.localStorage.getItem("isSignedIn") === "true"
        //         ? "logout"
        //         : "login";
        return (
            <div>
                <div>{isAuthenticated ? authLink : guestLink}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps, { logout, fetchTodo })(AuthTodo);
