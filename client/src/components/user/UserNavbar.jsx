import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../style/user/UserNavbar.scss";
import DailyInfo from "./DailyInfo";


const userNavLinks = [
  {
    link: "/profile/account",
    menuName: "계정",
  },
  {
    link: "/profile/wrote",
    menuName: "내가 쓴 글",
  },
  {
    link: "/profile/pt",
    menuName: "PT",
  },
  {
    link: "/profile/group",
    menuName: "참여모임",
  },
  {
    link: "/profile/point",
    menuName: "포인트/쿠폰",
  },
  {
    link: "/gogaek",
    menuName: "고객센터",
  },
];

const UserNavbar = () => {
  return (
      <nav className="userNavContainer">
      <DailyInfo/>
        <div className="UserNSB">
          {userNavLinks.map((usernav) => (
            <NavLink
              key={usernav.menuName}
              to={`${usernav.link}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "on userlink" : "userlink"
              }
            >
              {usernav.menuName}
            </NavLink>
          ))}
            <Link key="고객센터" to={"/gogaek"} className={"userlink"} target="_blank"/>
        </div>
      </nav>
  );
};

export default UserNavbar;