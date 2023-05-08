import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './component/Provider/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from "./component/Routes/Routes"
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
