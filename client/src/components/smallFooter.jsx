import Logo from "/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/user/smallfooter.scss";
import { useUserContext } from "../context/AuthContext";

const smallFooter = () => {
    return (
      <div className="small-footer-wrap">
        <div className="small-footer-container">
          <ul className="small-footer-menu-lists">
            <li>About</li>
            <li>Community</li>
            <li>PT</li>
            <li>Group</li>
            <li>Subscribe</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="small-footer-low">
          <img
          src={Logo}
          alt="logo"
          className="logo"/>
          <span className="copyright">&copy; 2024 All right reserved by hot body</span>
        </div>
      </div>
    );
  };
  
  export default smallFooter;
  