import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import TableList from "views/Tables.jsx";
import UserPage from "views/User.jsx";
import Notification from "views/Notifications.jsx"
import Teacher from "views/teacher"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Events",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/professors",
    name: "Professors",
    icon: "nc-icon nc-single-02",
    component: Notification,
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
    path: "/help",
    name: "Help",
    icon: "nc-icon nc-alert-circle-i",
    component: TableList,
    layout: "/admin"
  }

];
export default routes;
