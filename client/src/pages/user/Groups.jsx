import React, { useState } from "react";
import "../../style/user/group.scss";
import { useUserContext } from "../../context/AuthContext";
import GroupInfo from "../../components/user/GroupInfo";


const Groups = () => {
  const {user} = useUserContext();
  const [pointDetail, setPointDetail] = useState(false);
  const GroupList = [
    {image:"/public/images/soccerball.png", title: '풋살모임👍⚽', mine:false, location:'전국', member:'149', meeting:'4'},
    {image:"/public/images/BM.png", title: '배드민턴 동호회🏸', mine:false, location:'전국', member:'129', meeting:'4'},
    {image:"/public/images/HPE.png", title: 'HPE모임', mine:false, location:'강남', member:'4', meeting:'0'},
    {image:"/public/images/emoji.png", title: '운동같이 합시다', mine:true, location:'강서', member:'1', meeting:'0'},
  ]

  return (
    <>
      <section className="groupContent">
        <div className="groupContainer">
          <div className="group">
            <h1>가입한 모임</h1>
            <div className="boxContainer">
            {GroupList.map((groups) => (
              groups.mine === false ? <GroupInfo image={groups.image} title={groups.title} location={groups.location} member={groups.member} meeting={groups.meeting}/> : ""
            ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="group">
            <h1>내 모임</h1>
            <div className="boxContainer">
            {GroupList.map((groups) => (
              groups.mine === true ? <GroupInfo image={groups.image} title={groups.title} location={groups.location} member={groups.member} meeting={groups.meeting}/> : ""
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Groups;