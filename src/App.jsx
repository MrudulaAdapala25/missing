import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import UserProfile from './components/user-profile/UserProfile';
import RoutingError from "./components/RoutingError";

import EditUser from "./components/edit-user/EditUser";
import Report from "./components/report/Report";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement:<RoutingError />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "report",
          element: <Report />,
        },
        {
          path:"edit-user",
          element:<EditUser />
        },
        {
          path:'user-profile',
          element:<UserProfile />,
          
            
          
        }
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;