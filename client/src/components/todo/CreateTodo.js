import React from "react";
import { connect } from "react-redux";
import { createTodo } from "../../action";
import FormTodo from "./FormTodo";

class CreateTodo extends React.Component {
    onSubmit = (formValues) => {
        this.props.createTodo(formValues);
    };

    render() {
        return (
            <div>
                <FormTodo heading={"Create Task"} onSubmit={this.onSubmit} />
            </div>
        );
    }
}
const mapStateToProps = () => {
    return { local: { isSignedIn: window.localStorage.getItem("isSignedIn") } };
};

export default connect(mapStateToProps, { createTodo })(CreateTodo);
