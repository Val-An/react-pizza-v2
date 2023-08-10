import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import App from "./App";
import Cart from "./Pages/Cart";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CartEmpty from "./Pages/CartEmpty";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {path: "/cart", element: <Cart />},
      {path: "/cart-empty", element: <CartEmpty />},
      {path: "*", element: <NotFound />}
    ]},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
