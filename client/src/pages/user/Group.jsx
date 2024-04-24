import React, { useState } from "react";
import "../../style/user/group.scss";
import { useUserContext } from "../../context/AuthContext";
import GroupInfo from "../../components/user/GroupInfo";


const Point = () => {
  const {user} = useUserContext();
  const [pointDetail, setPointDetail] = useState(false);

  return (
    <>
      <section className="groupContent">
        <div className="groupContainer">
          <div className="group">
            <h1>가입한 모임</h1>
            <div className="boxContainer">
              <GroupInfo/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="group">
            <h1>내 모임</h1>
              <GroupInfo/>
            </div>
          </div>
      </section>
    </>
  )
};

export default Point;