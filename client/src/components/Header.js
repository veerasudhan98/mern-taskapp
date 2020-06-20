import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    Button,
    NavbarText,
    Container,
} from "reactstrap";

//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AuthTodo from "./AuthTodo";

class Header extends React.Component {
    //const [isOpen, setIsOpen] = useState(false);

    //const toggle = () => setIsOpen(!isOpen);
    state = {
        isOpen: false,
    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
    render() {
        return (
            <div>
                <Navbar color="light" light expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            <div className="note-icon"></div>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/todos/list">Todo's</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/todos/profile">
                                        Profile
                                    </NavLink>
                                </NavItem>
                                {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                            </Nav>
                            <NavbarText style={{ paddingRight: "40px" }}>
                                <p>
                                    <i>
                                        {this.props.isAuthenticated
                                            ? window.localStorage.getItem(
                                                  "username"
                                              )
                                            : ""}
                                    </i>
                                </p>
                            </NavbarText>
                            <NavbarText>
                                <Button
                                    style={{ padding: "6px 20px 6px 20px" }}
                                    color="light"
                                    size="md"
                                    active
                                >
                                    <AuthTodo />
                                </Button>
                            </NavbarText>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

    // return (
    //     <div className="ui secondary pointing menu">

    //         <i className="big red pied piper icon"></i>
    //         <Link to="/todos/list" className="item">
    //             todo's
    //         </Link>
    //         <Link to="/todos/create" className="item">
    //             Create task
    //         </Link>
    //         <Link to="/todos/profile" className="item">
    //             Profile
    //         </Link>
    //         <div className="right menu">
    //             <AuthTodo />
    //         </div>
    //     </div>
    // );
}
// const mapStateToProps =(state) =>{
//     return {isSignedIn: state.auth.isSignedIn}
// }
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps)(Header);
