// const reactheading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// console.log(reactheading);
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/HeaderComp";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";

const AppLayout = () => {
  return (
    <div id="app">
      <HeaderComp />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/restaurants/:resId", element: <RestaurantDetails /> },
    ],
  },
]);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<RouterProvider router={appRouter} />);
