import '../../style/home/homeAd.css';
import Profile from '/images/man-profile.jpeg'

const HomeAdFirst = () => {
  return (
    <div className='home-ad-container'>
      <div className="home-ad-img box-shadow">
        <img src={Profile} alt='home-ad-image' />
      </div>

      <div className="home-ad-content box-shadow">
        <h1 className='home-ad-content-title'>이달의 트레이너 8인</h1>
        <p>현재 많은 리뷰와 관심을 받고 있는 트레이너는 총 8명 입니다.</p>
        <p>트레이너에 대한 상세 정보와 예약 가능 여부가 궁금하신가요?</p>
        <p>아래 소개글을 확인 하세요!</p>
      </div>
    </div>
  )
}

export default HomeAdFirst