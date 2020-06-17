import React from "react";
import { connect } from "react-redux";
import { fetchProfile, signOut } from "../../action";
import { Link } from "react-router-dom";

class ReadProfile extends React.Component {
    componentDidMount() {
        this.props.fetchProfile();
    }

    render() {
        if (!this.props.profile) {
            return (
                <div
                    className="ui container error"
                    style={{ textAlign: "center" }}
                >
                    <h3>Login to access</h3>
                </div>
            );
        }
        const { _id, name, email, createdAt, updatedAt } = this.props.profile;
        return (
            <div>
                <div className="ui two column grid">
                    <div className="column">
                        <div className="ui raised segment">
                            <div className="ui red ribbon label">Profile</div>
                            <h4>UserId: </h4>
                            <p>{_id}</p>
                            <h4>Username: </h4>
                            <p>{name}</p>
                            <h4>Email: </h4>
                            <p>{email}</p>
                            <h4>CreatedAt:</h4>
                            <p>{createdAt}</p>
                            <h4>UpdatedAt: </h4>
                            <p>{updatedAt}</p>
                            <div style={{ padding: "20px" }}>
                                <Link
                                    to="/todos/profile/edit"
                                    className="ui primary button"
                                >
                                    edit
                                </Link>
                                <div
                                    onClick={() => this.props.signOut()}
                                    className="ui right red button"
                                >
                                    logout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { profile: state.todo["profile"] }; //or state.todo.profile
};

export default connect(mapStateToProps, { fetchProfile, signOut })(ReadProfile);
