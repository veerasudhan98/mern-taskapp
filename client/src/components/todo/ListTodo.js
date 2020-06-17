import React from "react";
// import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos, editTodo, fetchTodo } from "../../action";
//import CheckBox from "./CheckBox";

class ListTodo extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    renderButton = (todo) => {
        // if (this.props.local.isSignedIn === null) {
        //     return "Loding..";
        // } else {
        return (
            <div>
                <div
                    className="right floated content"
                    style={{ textAlign: "right" }}
                >
                    <p
                        style={{
                            paddingRight: "200px",
                            margin: "0px",
                            textAlign: "center",
                            width: "100px",
                        }}
                    >
                        {todo.completed === true ? "completed" : "ongoing"}
                    </p>
                    <Link
                        style={{ paddingRight: "30px" }}
                        to={`/todos/edit/${todo._id}`}
                    >
                        <i className="ui large gray edit outline icon"></i>
                    </Link>
                    <Link to={`/todos/delete/${todo._id}`}>
                        <i className="ui large red trash alternate icon"></i>
                    </Link>
                </div>
            </div>
        );
    };
    renderCreateTaskButton = () => {
        return (
            // <Container>
            //     <Button color="dark" style={{ marginBottom: "2rem" }}>
            //         Add task{/* <Link to="/todos/create">Add task</Link> */}
            //     </Button>
            // </Container>
            <div style={{ textAlign: "center" }}>
                <Link to="/todos/create" className="item">
                    <button className="ui button">
                        <i className=" ui plus square outline icon"></i>New
                    </button>
                </Link>
            </div>
        );
    };
    showTitle = (title, completed) => {
        if (completed === true) {
            return (
                <del>
                    <h4>title</h4>
                </del>
            );
        } else return <h4>title</h4>;
    };
    renderList = () => {
        return this.props.todos.map((todo) => {
            console.log(todo.completed);
            return (
                <div
                    className="item"
                    style={{ padding: "10px" }}
                    key={todo._id}
                >
                    {this.renderButton(todo)}
                    <div style={{ paddingRight: "100px" }}>
                        {this.showTitle(todo.title, todo.completed)}
                    </div>

                    {/* <div>
                        <CheckBox
                            completed={todo.completed}
                            label={todo.title}
                        />
                    </div> */}
                </div>
            );
        });
    };
    reload = () => {
        if (window.localStorage.getItem("isSignedIn") === "false") {
            if (!window.location.hash) {
                window.location = window.location + "#loaded";
                window.location.reload();
            }
        }
    };
    render() {
        // this.props.fetchTodos();

        this.reload();

        // const className = this.props.isSignedIn? "ui celled list":'';
        return (
            <div className="ui segment">
                {this.renderCreateTaskButton()}
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: Object.values(state.todo),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        local: { isSignedIn: window.localStorage.getItem("isSignedIn") },
    };
};

export default connect(mapStateToProps, { fetchTodos, editTodo })(ListTodo);
