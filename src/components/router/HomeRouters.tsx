import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { Setting } from "../pages/Setting";
import { UserManagement } from "../pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    children: <Home />,
  },
  {
    path: "/user_management",
    children: <UserManagement />,
  },
  {
    path: "/setting",
    children: <Setting />,
  },
  {
    path: "*",
    children: <Page404 />,
  },
];
