import React from "react";
import { connect } from "react-redux";
import { fetchProfile, editUser } from "../../action";
import FormProfile from "./FormProfile";

class EditProfile extends React.Component {
    componentDidMount() {
        this.props.fetchProfile();
    }

    onSubmit = ({ name, email, age, password }) => {
        this.props.editUser({ name, email, age, password });
        // this.props.editUser(this.props.profile,
        //     {name, email, age, password})
    };

    render() {
        console.log(this.props.profile);
        if (!this.props.profile) {
            return <div>Loding...</div>;
        }
        return (
            <div>
                <FormProfile
                    initialValues={this.props.profile}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return { profile: state.todo["profile"] };
};

export default connect(mapStateToProps, { fetchProfile, editUser })(
    EditProfile
);
