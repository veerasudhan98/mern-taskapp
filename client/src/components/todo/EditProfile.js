import React from "react";
import { connect } from "react-redux";
import { editUser } from "../../action";
import FormProfile from "./FormProfile";

class EditProfile extends React.Component {
    onSubmit = ({ name, email, password }) => {
        this.props.editUser({ name, email, password });
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
const mapStateToProps = (state) => {
    return { profile: state.auth.user };
};

export default connect(mapStateToProps, { editUser })(EditProfile);
