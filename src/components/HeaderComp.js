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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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