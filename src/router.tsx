import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export const Provider = () => {
  return <RouterProvider router={router} />;
};
