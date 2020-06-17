import React from "react";
import { Field, reduxForm } from "redux-form"; //Field -> component,
//reduxForm->function(same as connect)

class FormTodo extends React.Component {
    renderError = ({ touched, error }) => {
        if (error && touched) {
            return (
                <div className="ui error message" style={{ padding: "2px" }}>
                    <div>{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, label, meta }) => {
        return (
            <div style={{ padding: "20px" }}>
                <label>
                    <h4>{label}</h4>
                </label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };
    onOnceSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div>
                {/* handleSubmit(use with onSubmit) is also a prop of redux-form just like onChange,value and etc. */}
                {/* field part */}
                {/* if involves error in semantic ui use "error" className of form */}
                {/* className="ui form error" 
            style={{padding:"50px 250px 50px 20px"
            }} */}

                <h3>{this.props.heading}</h3>
                <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(this.onOnceSubmit)}
                >
                    <Field
                        name="title"
                        component={this.renderInput}
                        label="Task title"
                        style={{ fontSize: "10pt" }}
                    />
                    <Field
                        name="description"
                        component={this.renderInput}
                        label="Task description"
                        style={{ fontSize: "10pt" }}
                    />
                    <Field
                        name="completed"
                        component={this.renderInput}
                        label="completed"
                        style={{ fontSize: "10pt" }}
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
    }
}

// validation part - (remember:- the connection between the Field and validate is "name")

const validate = (formValues) => {
    const error = {};

    if (!formValues.title) {
        error.title = "You must enter a title";
    }
    if (!formValues.description) {
        error.description = "You must enter a description";
    }
    return error;
};
// const mapStateToProps = (state) =>{
//     return {

//     }
// }
export default reduxForm({
    form: "todoForm",
    validate, // we are wiring up the validate part
})(FormTodo);
