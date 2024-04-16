import React from "react";
import Logo from "/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import { useUserContext } from "../context/AuthContext";

const navLinks = [
  {
    link: "/",
    menuName: "홈",
  },
  {
    link: "/community",
    menuName: "커뮤니티",
  },
  {
    link: "/pt",
    menuName: "PT",
  },
  {
    link: "/group",
    menuName: "모임",
  },
  {
    link: "/subscribe",
    menuName: "구독",
  },
  {
    link: "/profile",
    menuName: "마이페이지",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { setUser, isAuthenticated, setIsAuthenticated } = useUserContext();

  const handleLogout = () => {
    setUser({});
    setIsAuthenticated(false);
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <nav className="navContainer">
      <img
        src={Logo}
        alt="logo"
        className="logo"
        onClick={() => navigate("/")}
      />

      <div className="linkWrap">
        {navLinks.map((nav) => (
          <NavLink
            key={nav.menuName}
            to={`${nav.link}`}
            className={({ isActive }) => (isActive ? "navActive navlink" : "navlink")}
          >
            {nav.menuName}
          </NavLink>
        ))}
      </div>
      {isAuthenticated ? (
        <button className="navButton" onClick={handleLogout}>로그아웃</button>
      ) : (
        <button className="navButton" onClick={() => navigate("/login")}>로그인 / 회원가입</button>
      )}
    </nav>
  );
};

export default Navbar;
