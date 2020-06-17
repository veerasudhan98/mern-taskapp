import React from "react";
import { Link } from "react-router-dom";
const GetStarted = () => {
    window.localStorage.setItem("isSignedIn", false);
    return (
        <div style={{ textAlign: "center", padding: "100px" }}>
            <div style={{ padding: "50px" }}>
                <h3 className="field">
                    WELCOME TO THE TASK MANAGER APPLICATION
                </h3>
            </div>
            <Link to="/todos/login" className="ui button">
                GET STARTED
            </Link>
        </div>
    );
};

export default GetStarted;
