import { useEffect, useRef, useState } from 'react';
import '../../style/home/homeBanner.css';
import Community from '/images/community.jpeg';
import PT from '/images/man-back.jpeg';
import Group from '/images/group.jpeg';
import Event from '/images/event.jpeg';
import {useNavigate} from 'react-router-dom';
import HomeSliderCard from './HomeSliderCard';

const HomeBanner = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleSlideLeft = () => {
    if(sliderPosition - 350 <= 0){
      setSliderPosition(0)
    }else{
      setSliderPosition(sliderPosition - 350);
    }

    if(sliderPosition - 350 >= 0){
      setSliderPosition(sliderPosition - 350)
    }else if(sliderPosition == 0){
      setSliderPosition(sliderRef.current.offsetWidth - 600);
    }else {
      setSliderPosition(0);
    }
  }

  const handleSlideRight = () => {
    if(sliderPosition + 350 < sliderRef.current.offsetWidth - 600){
      setSliderPosition(sliderPosition + 350);
    }else if(sliderPosition == sliderRef.current.offsetWidth - 600){
      setSliderPosition(0)
    }else{
      setSliderPosition(sliderRef.current.offsetWidth - 600)
    }
  }

  const handleSetInterval = () => {
    setInterval(() => handleSlideRight, 1000)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideRight()
    }, 3000);

    return () => clearInterval(timer);
  }, [sliderPosition]);


  return (
    <div className='home-banner-container'>
      {/* text */}
      <div className='home-banner-text'>
        <p className='home-this-year'>2024</p>
        <h1 className='home-banner-title'>
          <span className='point-color'>핫바디</span>를 위한 여정<br/> 
          지금 떠나세요
        </h1>

        <ul className='home-banner-intro'>
          <li>핫바디를 통해 나에게 이상적인 트레이너를 찾고, 운동 파트너를 만나보세요.</li>
          <li>커뮤니티를 통해 당신의 목표에 활력을 불어넣고 영감을 얻으세요.</li>
        </ul>

        <div className="home-banner-link-btns">
          <button className='box-shadow' onClick={() => navigate('/community')}>커뮤니티 보기</button>
          <button className='box-shadow' onClick={() => navigate('/group')}>모임/PT 찾기</button>
        </div>
        
        <div className="home-banner-bottom-btns">
          <div className='home-banner-subscribe-btn' onClick={() => navigate('/subscribe')}>
            <p>구독시 PT <br/><h2 className='point-color'>1회 무료</h2></p>
            <p>구독 혜택<br/> 더보기 &#8594;</p>
          </div>

          <div className="home-banner-slider-btns">
            <button onClick={handleSlideLeft}> {'<'} </button>
            <button onClick={handleSlideRight}> {'>'} </button>
          </div>
        </div>

      </div>

      {/* slider images */}
      <div className="home-banner-slider-wrap">
        <div className="home-banner-slider-container">
          <ul 
            className='home-banner-slider-imgs' 
            style={{transform: `translateX(${-sliderPosition}px)`, transition: 'all 400ms ease-in-out'}}
            ref={sliderRef}
          >
            <HomeSliderCard 
              img={Community}
              link='/community'
              category='커뮤니티'
              text='다양한 정보를 찾으시나요?'
              totalText='현재 커뮤니티에 등록 된 게시글'
            />

            <HomeSliderCard 
              img={PT}
              link='/pt'
              category='PT'
              text='PT를 찾으시나요?'
              totalText='현재 등록된 트레이너'
              totalNum={'123 명'}
            />

            <HomeSliderCard 
              img={Group}
              link='/Group'
              category='모임'
              text='모임를 찾으시나요?'
              totalText='현재 개설된 모임'
            />
            
            <li className='home-banner-slider-img'>
              <img src={Event} alt='event' />
              <div className="home-banner-slider-img-overlay">
                <p className="slider-link" onClick={() => navigate(`/`)}>
                  이벤트 보기
                </p>
                <h1>[ 이벤트 ]</h1>
                <p>다양한 이벤트에 참여하고 <br/>푸짐한 혜택을 누리세요!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner