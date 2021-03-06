import React from "react";
// import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos, editTodo } from "../../action";
//import CheckBox from "./CheckBox";

class ListTodo extends React.Component {
    // reload = () => {
    //     if (!window.location.hash) {
    //         window.location = window.location + "#loaded";
    //         window.location.reload();
    //     }
    // };
    componentDidMount() {
        // if (window.localStorage.getItem("reload") === "true") {
        //     console.log(window.localStorage.getItem("reload"));
        //     //this.reload();
        //     window.localStorage.setItem("reload", false);
        // }
        this.props.fetchTodos(this.props.token);
    }

    renderButton = (todo) => {
        console.log(todo.title);
        // if (!todo.title) {
        //     const name =
        //         this.props.isSignedIn === true
        //             ? this.props.currentUser.userId.name
        //             : "";
        //     return (
        //         <div style={{ textAlign: "center" }}>
        //             <p>welcome {name}, push new to create task</p>
        //         </div>
        //     );
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
                        <i>
                            {todo.completed === true ? "completed" : "ongoing"}
                        </i>
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
        // }
    };
    renderCreateTaskButton = () => {
        return (
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
                <del style={{ color: "#D3D3D3" }}>
                    <h4>{title}</h4>
                </del>
            );
        } else return <h4>{title}</h4>;
    };

    renderList = (value) => {
        return value.map((todo) => {
            return (
                <div
                    key={todo._id}
                    className="item"
                    style={{ padding: "10px" }}
                >
                    {this.renderButton(todo)}
                    <div style={{ paddingRight: "100px" }}>
                        {this.showTitle(todo.title, todo.completed)}
                    </div>
                </div>
            );
        });
    };

    render() {
        const value = this.props.todos.filter((todo) => todo.title);
        if (!this.props.todos) {
            return <div>"Loading.."</div>;
        }
        return (
            <div>
                {this.renderCreateTaskButton()}
                <div className="ui segment">
                    <div className="ui celled list">
                        {this.renderList(value)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: Object.values(state.todo),
        currentUser: state.auth.user,
        token: state.auth.token,
        isSignedIn: state.auth.isAuthenticated,
        // local: { isSignedIn: window.localStorage.getItem("isSignedIn") },
    };
};

export default connect(mapStateToProps, { fetchTodos, editTodo })(ListTodo);
