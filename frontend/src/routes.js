import Dashboard from "views/Dashboard.jsx";
import Calendar from "views/Calendar.jsx";
import TeacherList from "views/teachers/TeachersList";
import StudentList from "views/students/students-list";
import CourseList from "views/courses/CoursesList";

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
    icon: "nc-icon nc-calendar-60",
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/professors",
    name: "Professors",
    icon: "nc-icon nc-single-02",
    component: TeacherList,
    layout: "/admin"
  },
  {
    path: "/students",
    name: "Students",
    icon: "nc-icon nc-single-02",
    component: StudentList,
    layout: "/admin"
  },
  {
    path: "/courses",
    name: "Courses",
    icon: "nc-icon nc-book-bookmark",
    component: CourseList,
    layout: "/admin"
  }
];

export default routes;