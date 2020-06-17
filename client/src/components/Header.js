import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from './GoogleAuth'
import { connect } from "react-redux";
import AuthTodo from "./AuthTodo";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <i className="big red pied piper icon"></i>
            <Link to="/todos/list" className="item">
                todo's
            </Link>
            <Link to="/todos/create" className="item">
                Create task
            </Link>
            <Link to="/todos/profile" className="item">
                Profile
            </Link>
            <div className="right menu">
                <AuthTodo />
            </div>
        </div>
    );
};
// const mapStateToProps =(state) =>{
//     return {isSignedIn: state.auth.isSignedIn}
// }

export default connect(null)(Header);
