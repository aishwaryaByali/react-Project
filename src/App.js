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

const AppLayout = () => {
  return (
    <div id="app">
      <HeaderComp />
      <Body />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
