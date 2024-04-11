import React from "react";
import Logo from "../../public/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/home.css";

const navLinks = [
  {
    link: "/home",
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
  const user = undefined;
  const navigate = useNavigate();

  return (
    <>
      <nav className="navContainer">
        <img src={Logo} alt="logo" className="logo" />

        <div className="linkWrap">
          {navLinks.map((nav) => (
            <NavLink
              to={`${nav.link}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active link" : "link"
              }
            >
              {nav.menuName}
            </NavLink>
          ))}
        </div>
        <button
          className="button"
          onClick={() => {
            user ? navigate("/profile") : navigate("/login");
          }}
        >
          {user ? "마이페이지" : "로그인 / 회원가입"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
