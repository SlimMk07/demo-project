import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import Teacher from "views/teachers/teacher";
import Student from "views/students/Student";
import Course from "views/courses/AddCourse"
import TeacherProfile from "views/teachers/teachers-profile.jsx";
import CourseInfo from "views/courses/CourseInfo.jsx";



import routes from "routes.js";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      activeColor: "warning"
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  exact path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Route exact path="/admin/professors/add" component={Teacher} />
            <Route exact path="/admin/students/add" component={Student} />
            <Route exact path="/admin/courses/add" component={Course} />
            <Route exact path="/admin/professors/profile/:id" component={TeacherProfile} />
            <Route exact path="/admin/students/profile/:id" component={Teacher} />
            <Route exact path="/admin/course/profile/:id" component={CourseInfo} />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;