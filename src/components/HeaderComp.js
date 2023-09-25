import { Link } from "react-router-dom";
import * as common from "../utils/common";
import { useState } from "react"; //named Import

const HeaderComp = () => {
  const [loginVal, setLoginVal] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={`${common.LOGO_URL}`} alt="food-app" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginVal === "Login"
                ? setLoginVal("Logout")
                : setLoginVal("Login");
            }}
          >
            {loginVal}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComp;
