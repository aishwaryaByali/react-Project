import { Link } from "react-router-dom";
import * as common from "../utils/common";
import { useState } from "react"; //named Import
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComp = () => {
  const [loginVal, setLoginVal] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={`${common.LOGO_URL}`} alt="food-app" />
      </div>
      <div className="nav-items">
        <ul>
          <li>OnLineStatus: {onlineStatus ? "✅" : "😥"}</li>
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
          <li>
            <Link to="/instaMart">Insta Mart</Link>
          </li>
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
