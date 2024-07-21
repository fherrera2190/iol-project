import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IOLApp from "./IOLApp";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={}>
      <IOLApp />
    </RouterProvider>
  </React.StrictMode>
);
