import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import Contact from "./Contact";
import { Provider } from "react-redux";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
