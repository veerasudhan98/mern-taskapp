import React from "react";
import { Field, reduxForm } from "redux-form";

class FormProfile extends React.Component {
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
        this.props.onSubmit(formValues);
    };

    renderForm = () => {
        return (
            <div>
                <form
                    className="ui form error"
                    // style={{ padding: "50px 250px 50px 20px" }}
                    onSubmit={this.props.handleSubmit(this.onOnceSubmit)}
                >
                    <h3>Edit Account</h3>
                    <Field
                        name="name"
                        component={this.renderInput}
                        label="Username"
                        type="text"
                    />
                    <Field
                        name="email"
                        component={this.renderInput}
                        label="EmailId"
                        type="email"
                    />
                    {/* <Field
                        name="age"
                        component={this.renderInput}
                        label="Age"
                        type="number"
                    /> */}
                    <Field
                        name="oldpassword"
                        placeholder="enter old password"
                        component={this.renderInput}
                        label="Password"
                        type="password"
                    />
                    <Field
                        name="password"
                        placeholder="enter new password"
                        component={this.renderInput}
                        label="Password"
                        type="password"
                    />
                    <button
                        className="ui button primary"
                        style={{ margin: "20px" }}
                    >
                        Submit
                    </button>
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

export default reduxForm({
    form: "editForm",
    validate, // we are wiring up the validate part
})(FormProfile);
