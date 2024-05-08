import React, { useState } from "react";
import "../../style/user/pt.scss";
import { useUserContext } from "../../context/AuthContext";
import PtReservation from "../../components/user/PtReservation";
import PtTrainerInfo from "../../components/user/PtTrainerInfo";
import Trainer2 from './../../../public/images/trainer2.jpg'
import Trainer3 from './../../../public/images/trainer3.jpg'
import Trainer4 from './../../../public/images/trainer4.jpg'
import Trainer5 from './../../../public/images/trainer5.jpg'



const Pt = () => {
  const {user} = useUserContext();
  const PtResevationList = [
    {trainerImage:Trainer3, price:50000, text:'지니의 요정헬스', trainerId: '홍길동', askedAt:'2024-04-12', wantAt:'2024-04-12', time:'18:30', location:'서울시 마포구 닥터헬스짐'},
    {trainerImage:Trainer2, price:44444, text:'지옥의 헬스', trainerId: '김길동', askedAt:'2024-04-13', wantAt:'2024-04-14', time:'19:30', location:'서울시 강서구 렛츠런'},
  ]
  const PtConsultingList = [
    {trainerImage:Trainer4, trainerId: '삼길동', chat:{text:'안녕하세요', createdAt:'2024-04-11'}},
    {trainerImage:Trainer5, trainerId: '사길동', chat:[{text:'안녕하세요', createdAt:'2024-04-12'},{text:'안녕히가세요', createdAt:'2024-04-13'}]},
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
            {PtConsultingList.map((reserve) => (
              <PtTrainerInfo image={reserve.trainerImage} trainer={reserve.trainerId} chat={reserve.chat}/>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Pt;