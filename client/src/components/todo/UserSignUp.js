import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { register } from "../../action/authAction";
import { clearErrors } from "../../action/errorAction";
import history from "../../history";

class UserSignUp extends React.Component {
    renderError = ({ touched, error }) => {
        if (error && touched) {
            return (
                <div className="ui error message" style={{ padding: "2px" }}>
                    <div>{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, placeholder, type, name, id }) => {
        return (
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
                            { type } === "password"
                                ? "pass-input-neo"
                                : "user-input-neo"
                        }
                        name={name}
                        placeholder={placeholder}
                        type={type}
                        {...input}
                        autoComplete="off"
                    />
                </div>
            </div>
            // <div style={{ padding: "20px" }}>
            //     <label>
            //         <h4>{label}</h4>
            //     </label>
            //     <input type={type} {...input} autoComplete="off" />
            //     {this.renderError(meta)}
            // </div>
        );
    };
    toggle = () => {
        this.props.clearErrors();
        this.props.history.push("/todos/login");
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === "REGISTER_FAIL") {
                alert(error.msg.error);
            }
            this.toggle();
        }
    }

    onOnceSubmit = (formValues) => {
        this.props.register(formValues);
    };

    renderForm = () => {
        return (
            <div className="form-align-neo">
                <form
                    className="form-neo"
                    onSubmit={this.props.handleSubmit(this.onOnceSubmit)}
                >
                    <div className="register-div-neo">
                        {/* <div className="logo-neo"></div> */}
                        <div className="title-neo">Register</div>
                        {/* <div className="sub-title-neo">Login</div> */}
                        <div className="fields-neo">
                            <Field
                                name="name"
                                component={this.renderInput}
                                label="Username"
                                type="text"
                                placeholder="Username here"
                            />
                            <Field
                                name="email"
                                component={this.renderInput}
                                label="EmailId"
                                type="email"
                                placeholder="something@idk.cool"
                            />
                            {/* <Field
                                name="age"
                                component={this.renderInput}
                                label="Age"
                                type="number"
                                placeholder="age"
                            /> */}
                            <Field
                                name="password"
                                component={this.renderInput}
                                label="Password"
                                type="password"
                                placeholder="password"
                            />
                            <button className="signin-button-neo">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };

    render() {
        return <div>{this.renderForm()}</div>;
    }
}

const validate = (formValues) => {
    const error = {};

    if (!formValues.name) {
        error.name = "Username required";
    }
    if (!formValues.email) {
        error.email = "email id required";
    }
    if (!formValues.password) {
        error.password = "password required";
    }
    return error;
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error,
    };
};

const wrapper = reduxForm({
    form: "register",
    validate,
})(UserSignUp);

export default connect(mapStateToProps, { register, clearErrors, history })(
    wrapper
);
