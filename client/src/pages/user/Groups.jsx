import "../../style/user/group.scss";
import { useUserContext } from "../../context/AuthContext";
import { useGetAllJoinedGroup } from "../../Queries/queriesAndMutations";

import Travel from "/images/travel.jpeg";
import Hobby from "/images/hobby.jpeg";
import WorkOut from "/images/workout.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Groups = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { data: groups, isFetching } = useGetAllJoinedGroup(
    user.join.group.length > 0 ? user.join.group : null
  );

  const categoryInKor = (category) => {
    if (category === "hobby") return "취미";
    else if (category === "workout") return "운동";
  };

  const selectImgByCategory = (category) => {
    if (category === "all" || category === "workout") return WorkOut;
    else if (category === "hobby") return Hobby;
    else return Travel;
  };

  useEffect(() => {
    if (!user._id) navigate("/");
  }, [user]);

  return (
    <>

      {isFetching ? (
        <h1>참여 모임을 조회하는 중입니다. . .</h1>
      ) : (
        <div className="flex-col">
          <h3>가입한 모임</h3>
          <ul className="box-shadow flex-col user-group-lists">
            {groups && groups.length > 0 ? (
              groups.map((group) => (
                <li key={group._id}>
                  <div className="flex-between font-sm">
                    <p className="user-group-category">
                      {categoryInKor(group.category)}
                    </p>
                    <p
                      className="point-color"
                      style={{cursor: 'pointer'}}
                      onClick={() => navigate(`/group/detail/${group._id}`)}
                    >
                      상세정보 보기 &#8640;
                    </p>
                  </div>

                    <div className="flex-align" style={{gap: '1.75rem'}}>
                      <img
                        className="user-group-img"
                        src={selectImgByCategory(group.category)}
                      />
                      <div className="flex-col">
                        <p>그룹명 : {group.title}</p>
                        <p>그룹장 : {group.leaderName}</p>
                        <p>
                          멤버 : {group.members.length}/{group.memberLimit}
                        </p>
                      </div>
                    </div>
                </li>
              ))
            ) : (
              <p>아직 가입한 모임이 없습니다.</p>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Groups;
