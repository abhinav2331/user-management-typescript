import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />       
  },
  {
    path: "/signup",
    element: <Signup />   
  }
]);

const App:FC = () => {
  return (
    <div className="App">
      <Sidebar />  
      <RouterProvider router={router} />    
    </div>
  );
}

export default App;
