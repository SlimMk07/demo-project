import Dashboard from "views/Dashboard.jsx";
import Calendar from "views/Calendar.jsx";
import TableList from "views/Tables.jsx";
import UserPage from "views/User.jsx";
import Notification from "views/Notifications.jsx"

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
    component: Notification,
    layout: "/admin"
  },
  {
    path: "/addprofs",
    name: "Add Professor",
    component: UserPage,
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
