import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../modal";
import { fetchTodo, deleteTodo } from "../../action";

class DeleteTodo extends React.Component {
    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    renderContent = () => {
        if (!this.props.todo) {
            return "Are you sure you want to delete the task?";
        }
        return `Are you sure you want to delete ${this.props.todo.title}`;
    };
    renderAction = () => {
        const id = this.props.match.params.id;
        console.log(id);
        return (
            <React.Fragment>
                <Link
                    to="/todos/list"
                    onClick={() => this.props.deleteTodo(id)}
                    className="ui button negative"
                >
                    Delete
                </Link>
                <Link to="/todos/list" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    };

    render() {
        return (
            <div>
                <Modal
                    content={this.renderContent()}
                    actions={this.renderAction()}
                />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return { todo: state.todo[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, deleteTodo })(DeleteTodo);
