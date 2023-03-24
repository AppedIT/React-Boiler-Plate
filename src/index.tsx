import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { store } from "./data/store";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import { useAppDispatch } from "./data/hooks";
import { environment } from "./config";
import Home from "./components/pages/home";

const App = () => {
  let routes = [
    {
      path: "/",
      element: <div className="page">
        <Home />
        </div>,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    }
  ]

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router}/>
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Provider store={store}><App /></Provider>);
