import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './views/Login.jsx'

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.jsx";
import {Provider} from 'react-redux';
import {createStore } from 'redux'

import CourseInfo from './views/courses/CourseInfo'

import './index.css';
import reducer from './reducers' 


const hist = createBrowserHistory();
const store=createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Route exact path='/admin/courses/profile' render={(props) => <CourseInfo />} />  
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path='/admin/courses/profile/:id' render={(props) => <CourseInfo _id={props.match.params.id} />} />   */}
        <Route path="/admin" render={props => <AdminLayout {...props} />} />  
        <Redirect to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);