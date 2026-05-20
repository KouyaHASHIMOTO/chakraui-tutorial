import { memo, type FC } from "react";
import { Routes, Route } from "react-router-dom";
import { homeRoutes } from "./HomeRouters";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/home/*"
        element={
          <Routes>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.children}
              />
            ))}
          </Routes>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
