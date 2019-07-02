import Dashboard from "views/Dashboard.jsx";
import Calendar from "views/Calendar.jsx";
import Teacher from "views/teachers-folder/teacher";
import Student from "views/students-folder/student";
import Course from "views/courses-folder/AddCourse";
import TeacherList from "views/teachers-folder/teachers-list";
import StudentList from "views/students-folder/students-list";
import CourseList from "views/courses-folder/CoursesList";
import StudentProfile from "views/students-folder/students-profile.jsx";
import TeacherProfile from "views/teachers-folder/teachers-profile.jsx";
import CourseInfo from "views/courses-folder/CoursesInfo.jsx";

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
    path: "/professors/profile/:id",
    name: "Professors profile",
    component: TeacherProfile,
    layout: "/admin"
  },
  {
    path: "/professors/add",
    name: "Add Professor",
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
    path: "/students/profile/:id",
    name: "Students profile",
    component: StudentProfile,
    layout: "/admin"
  },
  {
    path: "/students/add",
    name: "Add Student",
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
    path: "/courses/profile/:id",
    name: "course informations",
    icon: "",
    component: CourseInfo,
    layout: "/admin"
  },
  {
    path: "/courses/add",
    name: "Add Courses",
    icon: "",
    component: Course,
    layout: "/admin"
  }
];
export default routes;