import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn, signOut } from "../../action";

class UserSignIn extends React.Component {
    renderError = ({ touched, error }) => {
        if (error && touched) {
            return (
                <div className="ui error message" style={{ padding: "2px" }}>
                    <div>{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, label, meta, type }) => {
        return (
            <div style={{ padding: "20px" }}>
                <label>
                    <h4>{label}</h4>
                </label>
                <input type={type} {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onOnceSubmit = (formValues) => {
        this.props.signIn(formValues);
    };

    render() {
        return (
            <div>
                <form
                    className="ui form error"
                    // style={{ padding: "50px 250px 50px 20px" }}
                    onSubmit={this.props.handleSubmit(this.onOnceSubmit)}
                >
                    <h3>Login</h3>
                    <Field
                        name="email"
                        component={this.renderInput}
                        label="Email-Id"
                        type="email"
                    />

                    <Field
                        name="password"
                        component={this.renderInput}
                        label="Password"
                        type="password"
                    />
                    <button
                        className="ui butt  on primary"
                        style={{ margin: "20px" }}
                    >
                        Submit
                    </button>
                </form>
                <div style={{ textAlign: "center" }}>
                    <Link to="/todos/signup">
                        New user? Create a new account
                    </Link>
                </div>
            </div>
        );
    }
}

const validate = (formValues) => {
    const error = {};

    if (!formValues.email) {
        error.email = "You must enter a title";
    }
    if (!formValues.password) {
        error.password = "You must enter a description";
    }
    return error;
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

const wrapper = reduxForm({
    form: "SignIn",
    validate,
})(UserSignIn);

export default connect(mapStateToProps, { signIn, signOut })(wrapper);
