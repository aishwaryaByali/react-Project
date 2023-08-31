// const reactheading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// console.log(reactheading);
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - links
 *  - Address
 *  - Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="food-app"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestoCard = (props) => {
  return (
    <div className="resto-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.bakingo.com/blog/wp-content/uploads/2023/04/15-best-restaurants-in-bangalore.jpg"
      />
      <h3>{props.name}</h3>
      <h5>Biryani</h5>
      <h5>4.3 starts</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-Container">
        <RestoCard name="Meghana Foods" />
        <RestoCard name="KFC" />
        <RestoCard name="Hotel 1" />
        {/* <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard /> */}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
