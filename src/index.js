import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import App from "./App";
import Cart from "./Components/Cart";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/cart", element: <Cart />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
