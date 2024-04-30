import '../../style/home/homeAd.css';
import Profile from '/public/images/man-profile.jpeg'

const HomeAdFirst = () => {
  return (
    <div className='home-ad-container'>
      <div className="home-ad-img box-shadow">
        <img src={Profile} alt='home-ad-image' />
      </div>

      <div className="home-ad-content box-shadow">
        <h1 className='home-ad-content-title'>이달의 트레이너</h1>
        <p>4월 가장 많은 리뷰와 관심을 받은 트레이너는 아무개님 입니다.</p>
        <p>아무개 트레이너에 대한 상세 정보와 예약 가능 여부가 궁금하신가요?</p>

        <button className='home-ad-link-btn'>상세보기</button>
      </div>
    </div>
  )
}

export default HomeAdFirst