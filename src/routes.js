
import History from "views/History.js";
import Home from "views/Home.js";


var dashRoutes = [
  
  {
    path: "/home",
    name: "Home",
    icon: "design_app",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/history",
    name: "History",
    icon: "files_paper",
    component: History,
    layout: "/admin"
  },
];
export default dashRoutes;
