import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../style/UserNavbar.scss";
import { IoIosArrowBack } from "react-icons/io";


const userNavLinks = [
  {
    link: "/profile/update",
    /* icon: icon, */
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
    <>
      <nav className="userNavContainer">
        <div className="UserNSB">
        <Link key= "대쉬보드로 돌아가기" to={"/profile"} id={"goBack"}><IoIosArrowBack /> 내 정보</Link>
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
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;