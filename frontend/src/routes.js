import Dashboard from "views/Dashboard.jsx";
import Calendar from "views/Calendar.jsx";
import TableList from "views/Tables.jsx";
import UserPage from "views/User.jsx";
import Teacher from "views/teacher"
import User from 'views/User.jsx'

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "nc-icon nc-diamond",
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/professors",
    name: "Professors",
    icon: "nc-icon nc-single-02",
    component: User,
    layout: "/admin"
  },
  {
    path: "/addprofs",
    name: "Add Professor",
    component: Teacher,
    layout: "/admin"
  },
  {
    path: "/students",
    name: "Students",
    icon: "nc-icon nc-single-02",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/addstud",
    name: "Add Student",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/courses",
    name: "Courses",
    icon: "nc-icon nc-bulb-63",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/addcourses",
    name: "Add Courses",
    component: TableList,
    layout: "/admin"
  }
];
export default routes;
