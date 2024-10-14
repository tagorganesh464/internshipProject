import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/rootlayout/RootLayout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ErrorPage from "./components/errorpage/ErrorPage"
import AddUser from "./components/adduser/AddUser";
import Users from "./components/users/Users";
import AddTask from "./components/addtask/AddTask";
import EmpDashboard from "./components/empdashboard/EmpDashboard";
import EmpProfile from "./components/empProfile/EmpProfile"
import UserDetails from "./components/userDetails/UserDetails"

function App() {

 

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path:"/add-user",
          element:<AddUser/>
        },
        {
          path:"/users",
          element:<Users/>
        },

        {
          path:"/emp-dashboard",
          element:<EmpDashboard/>
        },
        {
          path:"/add-task",
          element:<AddTask/>
        },
        {
          path:"/emp-profile",
          element:<EmpProfile/>
        },
        {
          path:"/user-details",
          element:<UserDetails/>
        }


      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={routerObj} />
     
    </div>
  );
}

export default App;