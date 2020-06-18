import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchTodo, editTodo } from "../../action";
import FormTodo from "./FormTodo";

class EditTodo extends React.Component {
    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    onSubmit = ({ title, description, completed }) => {
        this.props.editTodo(this.props.match.params.id, {
            title,
            description,
            completed,
        });
    };

    render() {
        // if (!this.props.todo) {
        //     return <div>Loding...</div>;
        // }
        return (
            <div>
                <FormTodo
                    heading={"Edit Task"}
                    initialValues={this.props.todo}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return { todo: state.todo[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, editTodo })(
    withRouter(EditTodo)
);
