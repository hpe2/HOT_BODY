import PtSearchResultDetailInfo from './PtSearchResultDetailInfo';
import Clock from "/images/clock.svg";
import Gym from "/images/gym.svg";
import Coin from "/images/coin.svg";
import {useNavigate} from 'react-router-dom';
import GymBanner from '/images/gym.jpg'

const PtSearchResultDetail = ({setIsDetailOpen, selectedTrainer}) => {
  const navigate = useNavigate();

  return (
  <div className="pt-search-result-detail">
    <div className="pt-search-result-detail-header">
      <h3>{selectedTrainer.ptProfileName} 트레이너</h3>
      <button className='close-result' onClick={() => setIsDetailOpen(false)}>x</button>
    </div>
    <img src={GymBanner} alt='gym_img' className='pt-search-result-detail-img' />

    <button 
      className='pt-search-result-navigate-btn box-shadow'
      onClick={() => navigate(`/pt/detail/${selectedTrainer._id}`)}
    >
      상세 정보
    </button>

    <div className="pt-search-result-detail-contents">
      <PtSearchResultDetailInfo icon={Clock} label="영업 시간" text="매일 10:00 ~ 23:00" />
      <PtSearchResultDetailInfo icon={Gym} label="위치" text={`${selectedTrainer.location.address}`} />
      <PtSearchResultDetailInfo icon={Coin} label="가격" text={`1회 ${selectedTrainer.price.toLocaleString('ko-KR')} 원`} />
    </div>

    {/* 트레이너 설명 */}
    <p className='pt-search-result-detail-intro'>
      <h3>트레이너 소개</h3>
      <div>
        <img src={selectedTrainer.ptProfileImage} alt='' />
        <p>{selectedTrainer.description.length > 100 ? `${selectedTrainer.description.slice(0, 100)}...` : selectedTrainer.description}</p>
      </div>
    </p>

  </div>
  );
};

export default PtSearchResultDetail;
