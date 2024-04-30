import PtSearchResultDetailInfo from './PtSearchResultDetailInfo';
import Clock from "/public/images/clock.svg";
import Gym from "/public/images/gym.svg";
import Coin from "/public/images/coin.svg";
import {useNavigate} from 'react-router-dom';

const PtSearchResultDetail = ({setIsDetailOpen}) => {
  const navigate = useNavigate();

  return (
  <div className="pt-search-result-detail">
    <div className="pt-search-result-detail-header">
      <h3>홍길동 트레이너</h3>
      <button className='close-result' onClick={() => setIsDetailOpen(false)}>x</button>
    </div>
    <img src='' alt='gym_img' className='pt-search-result-detail-img' />

    <button 
      className='pt-search-result-navigate-btn box-shadow'
      onClick={() => navigate('/pt/detail')}
    >
      상세 정보
    </button>

    <div className="pt-search-result-detail-contents">
      <PtSearchResultDetailInfo icon={Clock} label="영업 시간" text="매일 10:00 ~ 23:00" />
      <PtSearchResultDetailInfo icon={Gym} label="위치" text="서울 영등포구 영등포동4가 442 타임스퀘어 1층 112호" />
      <PtSearchResultDetailInfo icon={Coin} label="가격" text="1회 50,000 원" />
    </div>

    {/* 트레이너 설명 */}
    <p className='pt-search-result-detail-intro'>
      <h3>트레이너 소개</h3>
      <div>
        <img src='' alt='' />
        <p>소개 글이 들어갈 자리입니다. 소개 글이 들어갈 자리입니다. 소개 글이 들어갈 자리입니다. 소개 글이 들어갈 자리입니다. 소개 글이 들어갈 자리입니다. 소개 글이 들어갈 자리입니다.</p>
      </div>
    </p>

  </div>
  );
};

export default PtSearchResultDetail;
