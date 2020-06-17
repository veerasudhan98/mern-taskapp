import React from 'react'
import {Router, Route} from 'react-router-dom'

import GetStarted from './todo/GetStarted'
import UserSignUp from './todo/UserSignUp'
import UserSignIn from './todo/UserSignIn'
import Header from './Header'
import ListTodo from './todo/ListTodo'
import CreateTodo from './todo/CreateTodo'
import EditTodo from './todo/EditTodo'
import DeleteTodo from './todo/DeleteTodo'
import ReadProfile from './todo/ReadProfile'
import EditProfile from './todo/EditProfile'    
import DeleteUser from './todo/DeleteUser'

import history from '../history'


const App = () =>{
        return (
        <div className="ui container">
        <Router history={history}>
        <div>
            <Header/>
            <Route path ="/" exact component={GetStarted}/>
            <Route path ="/todos/login" exact component={UserSignIn}/>
            <Route path ="/todos/signup" exact component={UserSignUp}/>
            <Route path="/todos/list" exact component={ListTodo}/>
            <Route path="/todos/create" exact component={CreateTodo}/>
            <Route path="/todos/edit/:id" exact component={EditTodo}/>
            <Route path="/todos/delete/:id" exact component={DeleteTodo}/>
            <Route path="/todos/profile/" exact component={ReadProfile}/>
            <Route path="/todos/Profile/edit/" exact component={EditProfile}/>
            <Route path="/todos/profile/Delete/" exact component={DeleteUser}/>
        </div>
        </Router>
    </div>
    )
}

export default App