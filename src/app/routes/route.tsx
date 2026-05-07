import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../components/templates/Layout/Layout";
import { Home } from "../../components/pages/Home/Home";
import { Movies } from "../../components/pages/Movies/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);
