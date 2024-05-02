import React, { useState } from "react";
import "../../style/user/pt.scss";
import { useUserContext } from "../../context/AuthContext";
import PtReservation from "../../components/user/PtReservation";
import PtTrainerInfo from "../../components/user/PtTrainerInfo";


const Pt = () => {
  const {user} = useUserContext();
  const PtResevationList = [
    {trainerImage:'🧞‍♂️', price:50000, text:'지니의 요정헬스', trainerId: '홍길동', askedAt:'2024-04-12', wantAt:'2024-04-12', time:'18:30', location:'서울시 마포구 닥터헬스짐'},
    {trainerImage:'👹', price:44444, text:'지옥의 헬스', trainerId: '김길동', askedAt:'2024-04-13', wantAt:'2024-04-14', time:'19:30', location:'서울시 강서구 렛츠런'},
  ]
  const PtChat = [
    {trainerId:'홍길동', userId: user.userId, text:'안녕하세요', createdAt:'2024-04-12'},
    {trainerId:'홍길동', userId: user.userId, text:'어쩌구', createdAt:'2024-04-12'},
    {trainerId:'홍길동', userId: user.userId, text:'저쩌구', createdAt:'2024-04-12'},
  ]

  return (
    <>
      <section className="ptContent">
        <div className="ptContainer">
          <div className="pt">
            <h1>예약 중</h1>
            {PtResevationList.map((reserve) => (
            <div className="boxContainer">
              {/* {user.PTReservation == true ? */}
              <PtReservation 
                image={reserve.trainerImage} text={reserve.text} price={reserve.price}
                trainer={reserve.trainerId} At={reserve.wantAt} time={reserve.time} location={reserve.location}/>
              {/* : "예약 내역이 없습니다"} */}
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="pt">
            <h1>상담 진행</h1>
            <div className="boxContainer">
            {PtResevationList.map((reserve) => (
              <PtTrainerInfo image={reserve.trainerImage} trainer={reserve.trainerId}/>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Pt;