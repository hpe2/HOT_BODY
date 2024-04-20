import React, { useRef } from 'react';
import '/src/style/Banner.css';

const Banner = () => {
  const sliderRef = useRef(null);

  const images = [
    '/images/트레이너1.jpg',
    '/images/트레이너2.jpg',
    '/images/트레이너3.jpg',
    '/images/트레이너3.jpg',
    '/images/트레이너3.jpg',
    '/images/트레이너3.jpg',
  ];

  // 한 번에 스크롤할 거리를 계산하는 함수 (카드 한 개의 너비)
  const scrollAmount = () => {
    return sliderRef.current ? sliderRef.current.firstChild.offsetWidth + 10 : 0; // 10은 margin 값
  };

  // 이전 버튼 클릭 이벤트 핸들러
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= scrollAmount();
    }
  };

  // 다음 버튼 클릭 이벤트 핸들러
  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount();
    }
  };

  return (
    <div className="banner">
      <div className="text-section">
        <h1>핫바디</h1>
        <p>우리 모두 핫바디가 되어 보아요.</p>
        <div class="button-container">
    <a href="https://www.example.com" class="link-button">
        행운의 돌림판
        <span class="tooltip-text">더 알아보기</span>
    </a>
    <br/>
    <br/>
    <a href="https://www.example.com" class="link-button">
        구독 알아보기
        <span class="tooltip-text">기본적으로 많은 혜택들이 있어요</span>
    </a>
</div>

      </div>
      <div className="slider-section">
        <span className="slider-leftBtn sliderBtn" onClick={handlePrevClick}>&lt;</span>
        <div className="card-container" ref={sliderRef}>
        {images.map((image, index) => (
            <div key={index} className="card">
               <img className="TeamPic" src={image} alt={`Team Picture ${index + 1}`} />
              <a href="#" className="Green-button">number {index + 1}</a>
            </div>
          ))}
        </div>
        <span className="slider-rightBtn sliderBtn" onClick={handleNextClick}>&gt;</span>
      </div>
    </div>
  );
};

export default Banner;
