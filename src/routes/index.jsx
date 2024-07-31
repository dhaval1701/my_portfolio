// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../modules/pages/home";
import About from "../modules/pages/about";
import Contact from "../modules/pages/contact";
import Projects from "../modules/pages/projects";

export const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/about", element: <About />, exact: true },
  { path: "/contact", element: <Contact />, exact: true },
  { path: "/projects", element: <Projects />, exact: true },
];

const PageRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default PageRouter;
