// const reactheading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// console.log(reactheading);
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World!"),
    React.createElement("h1", {}, "Hello World! h1"),
  ])
);
console.log(heading);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(heading);
