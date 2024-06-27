import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.jsx'
import ErrorPage from "./errorPage/errorPage.jsx";
import { TopBar } from './topBar/topBar';
import { Register } from './register/register';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopBar/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
