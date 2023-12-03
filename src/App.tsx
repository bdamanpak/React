import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./Components/Layout/Layout"
import { Register } from "./Pages/Register"
import { Login } from "./Pages/Login";
import { PrivateLayout } from "./Components/Layout/PrivateLayout";
import { Homepage } from "./Pages/Homepage";
import Cookies  from 'js-cookie';

const router = createBrowserRouter([{
  path: "/",
  element: <Layout></Layout>,
  children: [{
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
]
},
{
  path: "/auth",
  element: <PrivateLayout />,
  children: [
    {
      path: "/auth/homepage",
      element: <Homepage />
    }
  ]
}
]);

export const App = () => {
  return(
    <RouterProvider router={router} />
  )
}