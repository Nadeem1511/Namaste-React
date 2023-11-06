import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "../../node_modules/react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-yellow-300 rounded-br-2xl border-2 border-yellow-600 ">
      <div className="w-[150px]">
        <img className="img" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex font-medium text-amber-700">
          <li className="p-3 m-2">Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-3 m-2 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 m-2 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3 m-2 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3 m-2 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-3 m-2 cursor-pointer">Cart</li>
          <button
            className="w-[85px] p-3 m-2 cursor-pointer text-yellow-300 bg-amber-700 rounded-lg"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
