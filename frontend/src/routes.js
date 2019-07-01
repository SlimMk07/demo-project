import Dashboard from "views/Dashboard.jsx";
import Calendar from "views/Calendar.jsx";
import TableList from "views/Tables.jsx";
import Teacher from "views/teachers-folder/teacher";
import Student from "views/students-folder/student";
import Course from "views/courses-folder/course";
import TeacherList from "views/teachers-folder/teachers-list";
import StudentList from "views/students-folder/students-list";
import CourseList from "views/courses-folder/courses-list";
import StudentProfile from "views/students-folder/students-profile.jsx";
import TeacherProfile from "views/teachers-folder/teachers-profile.jsx";
import CourseInfo from "views/courses-folder/courses-info.jsx";

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
    path: "/profprofile",
    name: "Professors profile",
    icon: "",
    component: TeacherProfile,
    layout: "/admin"
  },
  {
    path: "/addprofs",
    name: "Add Professor",
    icon: "",
    component: Teacher,
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
    path: "/studprofile",
    name: "Students profile",
    icon: "",
    component: StudentProfile,
    layout: "/admin"
  },
  {
    path: "/addstud",
    name: "Add Student",
    icon: "",
    component: Student,
    layout: "/admin"
  },
  {
    path: "/courses",
    name: "Courses",
    icon: "nc-icon nc-book-bookmark",
    component: CourseList,
    layout: "/admin"
  },
  {
    path: "/courseinfo",
    name: "course informations",
    icon: "",
    component: CourseInfo,
    layout: "/admin"
  },
  {
    path: "/addcourses",
    name: "Add Courses",
    icon: "",
    component: Course,
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
