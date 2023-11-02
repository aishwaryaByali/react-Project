// const reactheading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// console.log(reactheading);
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/HeaderComp";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
// import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
const InstaSwiggyMart = lazy(() => import("./components/InstaSwiggyMart"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Aishwarya Byali",
    };
    setUserName(data.name);
  }, []);
  return (
    <div id="app">
      {/* <UserContext.Provider value={{ loggedInUser: userName }}> */}
      <HeaderComp />
      {/* </UserContext.Provider> */}
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
      {
        path: "/instaMart",
        element: (
          <Suspense fallback={<h1>Lazy Loading!!!</h1>}>
            <InstaSwiggyMart />
          </Suspense>
        ),
      },
    ],
  },
]);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<RouterProvider router={appRouter} />);
