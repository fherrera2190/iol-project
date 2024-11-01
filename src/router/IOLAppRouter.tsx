import { createBrowserRouter } from "react-router-dom";
import { IngresarPage } from "../auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IngresarPage />,
    children: [],
  },
]);
