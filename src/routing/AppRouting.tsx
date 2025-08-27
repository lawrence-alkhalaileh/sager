import { createBrowserRouter } from "react-router";
import { Dashboard, MapComponent } from "@/pages/z-index";
import { PathNotFound } from "@/errors/PathNotFound";
import HomeLayout from "@/layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <PathNotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/map",
        element: <MapComponent />,
      },
    ],
  },
]);
