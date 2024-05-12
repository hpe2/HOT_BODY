import "../../style/user/pt.scss";
import { useUserContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGetTrainerDetail } from "../../Queries/queriesAndMutations";

const Pt = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUserContext();
  const { data: trainer } = useGetTrainerDetail(
    user.userType ? user.trainerId : null
  );

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const userTypeKor = (type) => {
    if (type == "general") return "일반";
    else if (type == "trainer") return "트레이너";
    else if (type == "admin") return "관리자";
  };

  const processInKor = (process) => {
    if (process == "waiting") return "수락 대기";
    else if (process == "accepted") return "예약 확정";
  };


  return (
    <div className="user-pt-wrap flex-col">
      <h1>
        {user.name}님은
        <span className="point-color">
          {" "}
          '{userTypeKor(user.userType)}'
        </span>{" "}
        등급 입니다.
      </h1>
      {user.userType === "general" && (
        <button onClick={() => navigate("/pt/register")} className="user-profile-pt-regist-btn">
          트레이너 등록하기
        </button>
      )}

      {user.userType === "trainer" && (
        <div className="flex-col">
          <>
            <h3 style={{ marginTop: "2rem" }}>나의 PT 정보</h3>
            <div
              className="box-shadow"
              style={{ padding: "1.5rem", borderRadius: "10px" }}
            >
              <div
                className="flex-between font-sm"
                style={{ marginBottom: "1rem" }}
              >
                <p>트레이너 등록일 : {trainer?.createdAt.slice(0, 10)}</p>
                <p
                  className="user-pt-detail-link"
                  onClick={() => navigate(`/pt/detail/${trainer?._id}`)}
                >
                  상세정보 보기 &#8640;
                </p>
              </div>
              <div className="flex-align">
                <img
                  src={trainer?.ptProfileImage}
                  alt="pt-img"
                  className="user-pt-trainer-img"
                />
                <div className="user-pt-trainer">
                  <h3>트레이너명 : {trainer?.ptProfileName}</h3>
                  <p>위치 : {trainer?.location.address}</p>
                  <p>
                    PT 1회 가격 : {trainer?.price.toLocaleString("ko-KR")}{" "}
                    원(won)
                  </p>
                </div>
              </div>

            </div>
          </>
          <>
            <h3 style={{ marginTop: "5rem" }}>PT 신청 관리</h3>
            <ul
              className="box-shadow pt-reservation-lists"
              style={{ padding: "1.5rem 1.5rem 0", borderRadius: "10px" }}
            >
              {trainer?.reservations.length > 0 &&
                trainer?.reservations.map((list, idx) => (
                  <li className="flex-between" key={idx}>
                    <div className="flex-col">
                      <p>
                        신청자 :{" "}
                        <span className="point-color">{list.userName}</span>
                      </p>
                      <div className="font-sm">
                        <p>희망 수업일 : {list.date} </p>
                        <p>시간 : {list.time}</p>
                      </div>
                    </div>

                    <div className="flex-col">
                      <p className="pt-process-state">
                        {processInKor(list.process)} 상태
                      </p>
                      {list.process === "waiting" && (
                        <button className="user-pt-confirm-btn box-shadow">
                          예약 확정하기
                        </button>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </>
        </div>
      )}

      {user?.PTReservation?.length > 0 ? (
        <>
          <h3 className="user-pt-title">예약 요청 현황</h3>
          <ul className="flex-col box-shadow pt-reservation-lists">
            {user?.PTReservation?.map((pt, idx) => (
              <li className="flex-col" key={idx}>
                <div className="flex-between font-sm">
                  <p>신청 수강 날짜 : {pt.date}</p>
                  <p
                    onClick={() => navigate(`/pt/detail/${pt.trainerId}`)}
                    className="user-pt-detail-link"
                  >
                    트레이너 상세 정보 &#8640;
                  </p>
                </div>
                <div className="flex-between">
                  <div className="flex-align">
                    <img
                      src={pt.trainerImg}
                      alt="trainerImg"
                      className="user-pt-trainer-img"
                    />
                    <div className="user-pt-trainer">
                      <h3>{pt.trainerName} 트레이너</h3>
                      <p>가격 (1회 기준) : {pt.price}</p>
                      <p>수강 시간 : {pt.time}</p>
                    </div>
                  </div>
                  <p className="pt-process-state">{processInKor(pt.process)}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h3 className="user-pt-title">예약 요청 현황</h3>
          <ul className="flex-col box-shadow pt-reservation-lists" style={{paddingBottom: '1.25rem'}}>
            아직 예약 내역이 없습니다.
          </ul>
        </>
      )}
    </div>
  );
};

export default Pt;
