import * as common from "../utils/common";

const HeaderComp = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={`${common.LOGO_URL}`} alt="food-app" />
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

export default HeaderComp;
