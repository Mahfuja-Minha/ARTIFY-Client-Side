import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ExploreArtworks from "../pages/Explore-Artworks/ExploreArtworks";
import AddArtwork from "../pages/AddArtwork/AddArtwork";
import MyFavorites from "../pages/MyFavorites/MyFavorites";
import MyGallery from "../pages/MyGallery/MyGallery";
import PrivateRoute from "../component/privateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ArtDetails from "../pages/ArtDetails/ArtDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },

      {
        path: "/exploreArtworks",
        Component: ExploreArtworks,
      },
      {
        path: "/artDetails/:id",
        loader: ({ params }) =>
          fetch(`https://artify-server-psi.vercel.app/arts/${params.id}`),
        element: (
          <PrivateRoute>
            <ArtDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/addArtwork",
        element: (
          <PrivateRoute>
            <AddArtwork />
          </PrivateRoute>
        ),
      },
      {
        path: "/myGallery",
        element: (
          <PrivateRoute>
            <MyGallery />
          </PrivateRoute>
        ),
      },
      {
        path: "/myFavorites",
        element: (
          <PrivateRoute>
            <MyFavorites />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
