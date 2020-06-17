// import React from "react";
// import { connect } from "react-redux";
// import { editTodo, check } from "../../action";

// class CheckBox extends React.Component {
//     // constructor(props){
//     //     super(props)
//     //     this.checkbox = React.createRef()
//     // }
//     componentDidMount() {
//         if (window.localStorage.getItem("isSignedIn") === "true") {
//             this.props.check();
//         }
//     }

//     handleChangeChk = (checker) => {
//         console.log(checker._id);
//         this.props.editTodo(checker._id, { completed: !checker.completed });
//         // (() => {
//         //     if (window.localStorage.getItem("isSignedIn") === "true") {
//         //         if (!window.location.hash) {
//         //             window.location = window.location + "#loaded";
//         //             window.location.reload();
//         //         }
//         //     }
//         // })();
//     };

//     getLabel = (checker) => {
//         if (checker.completed === true) {
//             return (
//                 <div
//                     className="state p-secondary"
//                     style={{ paddingLeft: "20px" }}
//                 >
//                     <label>
//                         <del>{this.props.label}</del>
//                     </label>
//                 </div>
//             );
//         } else {
//             return (
//                 <div
//                     className="state p-secondary"
//                     style={{ paddingLeft: "20px" }}
//                 >
//                     <label>{this.props.label}</label>
//                 </div>
//             );
//         }
//     };

//     render() {
//         if (!this.props.checkbox) {
//             return "loading..";
//         } else {
//             const checker = this.props.checkbox;
//             return (
//                 <div>
//                     <div className="left floated content">
//                         <div className="pretty p-default p-curved p-smooth">
//                             <input
//                                 type="checkbox"
//                                 id="checkbox"
//                                 checked="false"
//                                 onChange={(checker) =>
//                                     this.handleChangeChk(checker)
//                                 }
//                             />
//                             {this.getLabel(checker)}
//                         </div>
//                     </div>
//                 </div>
//             );
//         }
//     }
// }
// const mapStateToProps = (state, ownProps) => {
//     return {
//         todos: state.todos,
//         checkbox: state.check[ownProps.label],
//     };
// };
// export default connect(mapStateToProps, { editTodo, check })(CheckBox);
