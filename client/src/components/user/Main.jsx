import React from "react";
import Logo from "../../../public/images/logo.png";
import {NavLink} from "react-router-dom";
import "../../style/main.scss";
import { useUserContext } from "../../context/AuthContext";

const navLinks = [
  {
    link: "/profile/update",
    menuName: "계정",
    logo: Logo,
    content: "개인 프로필 설정 및 수정",
  },
  {
    link: "/profile/wrote",
    logo: "",
    menuName: "내가 쓴 글",
    content: "내가 쓴 전체 글 조회",
  },
  {
    link: "/profile/pt",
    logo: "",
    menuName: "PT",
    content: "PT수업 예약 및 상담내역 조회",
  },
  {
    link: "/profile/group",
    logo: "",
    menuName: "참여모임",
    content: "현재 참여 중인 모임 및 생성 모임 목록 조회",
  },
  {
    link: "/profile/point",
    logo: "",
    menuName: "포인트/쿠폰",
    content: "포인트 및 쿠폰 이용내역 조회",
  },
  {
    link: "/gogaek",
    logo: Logo,
    menuName: "고객센터",
  },
];
const Main = () => {

  return(
    <main>
      <ul className="list-account">
        {navLinks.map((nav) => (
          <NavLink
                to={`${nav.link}`}
                className={ "link" }
              >
                <li className="list-accounts">
                  <div className="menus">
                    <div className="contents">
                      <div class="list-account__icon"><img src={nav.logo} alt="logo" className="logo" /></div>
                      <h3>{nav.menuName}</h3>
                      <p>{nav.content}</p>
                    </div>
                  </div>
                </li>
          </NavLink>
        ))}
      </ul>
    </main>
  )
};

export default Main;
