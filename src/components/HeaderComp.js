import { Link } from "react-router-dom";
import * as common from "../utils/common";
import { useState } from "react"; //named Import
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComp = () => {
  const [loginVal, setLoginVal] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50 border-solid m-1 p-1 shadow-md">
      <div className="w-36 m-2 p-4">
        <img className="logo" src={`${common.LOGO_URL}`} alt="food-app" />
      </div>
      <div className="m-4 p-4">
        <ul className="flex p-4 m-1">
          <li className="p-3">OnlineStatus: {onlineStatus ? "✅" : "😥"}</li>
          <li className="p-3">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-3">Cart</li>
          <li className="p-3">
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
