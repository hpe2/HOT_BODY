import "../../../style/pt/ptDetail.css";
import Calendar from "/images/calendar-point.svg";
import Chat from "/images/message.svg";
import Check from '/images/check.svg';
import Badge from '/images/badge.svg';
import PtDetailReview from '../../../components/pt/PtDetailReview';
import { useParams } from 'react-router-dom';
import { useGetTrainerDetail } from '../../../Queries/queriesAndMutations';
import { useState } from 'react';
import PTReservation from './PTReservation';
import { useUserContext } from '../../../context/AuthContext';
import {toast} from 'react-toastify';
import Gym from '/images/gym.jpg';

const PTDetail = () => {
  const {isAuthenticated} = useUserContext()
  const {id} = useParams();
  const {data: trainer, isFetching} = useGetTrainerDetail(id);
  const [isOpenReservation, setIsOpenReservation] = useState(false);

  const handleReservationModal = () => {
    if(!isAuthenticated){
      return toast.info('로그인 한 사용자에게 제공되는 기능입니다.')
    }
    setIsOpenReservation(true)
  }

  if(isFetching) {
    return <h1 className='flex-align'>데이터를 받아오는 중입니다. . .</h1>
  }

  return (
    <div className="pt-detail-wrap">
      {isOpenReservation && (
        <PTReservation id={id} img={trainer.ptProfileImage} price={trainer.price.toLocaleString('ko-KR')} setIsOpenReservation={setIsOpenReservation} />
      )}
      <div className="pt-detail-container box-shadow">
        <img src={Gym} alt="gym_img" className="pt-detail-gymImg" />

        {/* 트레이너 프로필 */}
        <div className="pt-detail-profile-wrap flex-align">
          <div className="pt-detail-profile">
            <img src={trainer.ptProfileImage} alt="pt_profile" className="pt-detail-profieImg" />
            <div className="flex-col">
              <h3>{trainer.ptProfileName} 트레이너</h3>
              <p>{trainer.location.address}</p>
              <div className="flex-align">
                <p>후기: {trainer.reviews.length} 개</p>
              </div>
            </div>
          </div>

          <div className="pt-detail-btns">
            <button onClick={handleReservationModal}>
              <img src={Calendar} alt="" /> 예약하기
            </button>
          </div>
        </div>

        {/* 트레이너 설명 */}
        <div className="pt-detail-descript flex-col">
          <h3>
            이 트레이너, <br />
            <span className="point-color">어떤 사람인가요?</span>
          </h3>
          <p>{trainer.description}</p>
        </div>

        {/* 전문 분야 */}
        <div className="flex-col pt-detail-speciality">
          <h3>전문 분야</h3>
          <ul className='pt-detail-speciality-list'>
            {trainer.speciality.split(',').map(list => (
              <li>
                <img src={Check} alt='check' />
                {list}
              </li>
            ))}
          </ul>
        </div>

        {/* 자격 검증 */}
        <div className="pt-detail-certifications">
          <h3>자격 검증</h3>
          <ul className="pt-detail-certification-list">
            {trainer.certification.split(',').map(list => (
              <li>
                <img src={Badge} alt='badge' />
                {list}
              </li>
            ))}
          </ul>
        </div>


        {/* 리뷰(댓글) */}
        <div className="pt-detail-reviews">
          <div className='pt-detail-review-header'> 
            <img src={Chat} alt='chat' /> 
            <h3>리뷰 <span className='point-color'>40</span>개</h3>
          </div>

          <ul className='pt-detail-review-lists box-shadow'>
            <PtDetailReview />
            <PtDetailReview />
            <PtDetailReview />
            <PtDetailReview />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default PTDetail;
