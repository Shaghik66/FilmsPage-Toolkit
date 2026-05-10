import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../components/templates/Layout/Layout";
import { Home } from "../../components/pages/Home/Home";
import { Movie } from "../../components/pages/Movie/Movie";

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
        path: "/:id",
        element: <Movie />,
      },
    ],
  },
]);
