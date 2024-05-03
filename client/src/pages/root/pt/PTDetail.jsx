import "../../../style/pt/ptDetail.css";
import Calendar from "/public/images/calendar-point.svg";
import Chat from "/public/images/message.svg";
import Check from '/public/images/check.svg';
import Badge from '/public/images/badge.svg';
import PtDetailReview from '../../../components/pt/PtDetailReview';
import { useParams } from 'react-router-dom';
import { useGetTrainerDetail } from '../../../Queries/queriesAndMutations';

const PTDetail = () => {
  const {id} = useParams();
  const {data: trainer, isFetching} = useGetTrainerDetail(id);


  if(isFetching) {
    return <h1 className='flex-align'>데이터를 받아오는 중입니다. . .</h1>
  }

  return (
    <div className="pt-detail-wrap">
      <div className="pt-detail-container box-shadow">
        <img src="" alt="gym_img" className="pt-detail-gymImg" />

        {/* 트레이너 프로필 */}
        <div className="pt-detail-profile-wrap flex-align">
          <div className="pt-detail-profile">
            <img src="" alt="pt_profile" className="pt-detail-profieImg" />
            <div className="flex-col">
              <h3>{trainer.ptProfileName} 트레이너</h3>
              <p>{trainer.location.address}</p>
              <div className="flex-align">
                <p>후기: {trainer.reviews.length} 개</p>
              </div>
            </div>
          </div>

          <div className="flex-col pt-detail-btns">
            <button>
              <img src={Calendar} alt="" /> 예약하기
            </button>
            <button>
              <img src={Chat} alt="" /> 문의하기
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
