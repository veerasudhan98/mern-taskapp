import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../action/authAction";
import { clearErrors } from "../../action/errorAction";
import history from "../../history";
import { Alert } from "reactstrap";

class UserSignIn extends React.Component {
    state = {
        home: false,
        email: "",
        password: "",
        msg: null,
    };
    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === "LOGIN_FAIL") {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        if (this.state.home) {
            if (this.props.isAuthenticated) {
                history.push("/todos/list");
            }
        }
    }

    toggle = () => {
        this.props.clearErrors();
        this.setState({
            home: !this.state.home,
        });
    };

    // renderError = ({ touched, error }) => {
    //     if (error && touched) {
    //         return (
    //             <div className="ui error message" style={{ padding: "2px" }}>
    //                 <div>{error}</div>
    //             </div>
    //         );
    //     }
    // };

    renderInput = ({ input, label, type, name, placeholder, id }) => {
        return (
            // <div>
            //     {this.state.msg ? (
            //         <Alert color="danger">{this.state.msg}</Alert>
            //     ) : null}
            <div>
                <div
                    className={
                        { type } === "username"
                            ? "username-neo"
                            : "password-neo"
                    }
                >
                    <input
                        id={id}
                        className={
                            { type } === "username"
                                ? "user-input-neo"
                                : "pass-input-neo"
                        }
                        name={name}
                        placeholder={placeholder}
                        type={type}
                        {...input}
                        autoComplete="off"
                    />
                </div>
            </div>
        );
    };

    onOnceSubmit = (formValues) => {
        console.log(formValues);
        this.props.login(formValues);
    };

    render() {
        return (
            <div className="form-align-neo">
                {this.props.msg ? (
                    <Alert color="danger">{this.props.msg}</Alert>
                ) : null}
                <form
                    className="form-neo"
                    // className="ui form"
                    // style={{ padding: "50px 250px 50px 20px" }}
                    onSubmit={this.props.handleSubmit(this.onOnceSubmit)}
                >
                    <div className="login-div-neo">
                        {/* <div className="logo-neo"></div> */}
                        <div className="title-neo">Login</div>
                        {/* <div className="sub-title-neo">Login</div> */}
                        <div className="fields-neo">
                            <Field
                                name="email"
                                component={this.renderInput}
                                label="Email-Id"
                                type="email"
                                id="exampleEmail"
                                placeholder="something@idk.cool"
                            />

                            <Field
                                name="password"
                                component={this.renderInput}
                                label="Password"
                                type="password"
                                id="examplePassword"
                                placeholder="don't tell!"
                            />
                            <button className="signin-button-neo">Login</button>
                            <div className="link-neo">
                                <Link to="/todos/signup">Sign up</Link>
                            </div>
                            {/* <Button
                        color="primary"
                        //                        className="ui butt  on primary"
                        //                      style={{ margin: "20px" }}
                    >
                        Submit
                    </Button> */}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

// const validate = (formValues) => {
//     const error = {};

//     if (!formValues.email) {
//         error.email = "You must enter a title";
//     }
//     if (!formValues.password) {
//         error.password = "You must enter a description";
//     }
//     return error;
// };

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error,
    };
};

const wrapper = reduxForm({
    form: "login",
    // validate,
})(UserSignIn);

export default connect(mapStateToProps, { login, clearErrors })(wrapper);

// import React from "react";

// class UserSignIn extends React.Component {
//     render() {
//         return (
//             <div className="login-div-neo">
//                 <div className="logo-neo"></div>
//                 <div className="title-neo">Red Stapler</div>
//                 <div className="sub-title-neo">BETA</div>
//                 <div className="fields-neo">
//                     <div className="username-neo">
//                         <input
//                             type="username"
//                             className="user-input-neo"
//                             placeholder="username"
//                         />
//                     </div>
//                     <div className="password-neo">
//                         <input
//                             type="password"
//                             className="pass-input-neo"
//                             placeholder="password"
//                         />
//                     </div>
//                 </div>
//                 <button className="signin-button-neo">Login</button>
//                 <div className="link-neo">
//                     <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
//                 </div>
//             </div>
//         );
//     }
// }
// export default UserSignIn;
