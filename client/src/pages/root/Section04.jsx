import React, { useRef } from 'react';
import '/src/style/Section4.css';

function Section4() {
  const cardContainerRef = useRef(null); // 카드 컨테이너에 대한 ref

  // 이전 버튼 클릭 이벤트 핸들러
  const handlePrevClick = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft -= 200; // 여기서 200은 예상 스크롤 양입니다.
    }
  };

  // 다음 버튼 클릭 이벤트 핸들러
  const handleNextClick = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft += 200; // 여기서 200은 예상 스크롤 양입니다.
    }
  };

  return (
    <div className="section4">
      <button onClick={handlePrevClick} className="scroll-button prev">&lt;</button>
      <div className="card-container" ref={cardContainerRef}>
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index} className="card">
            <p>리얼 후기</p>
          </div>
        ))}
      </div>
      <button onClick={handleNextClick} className="scroll-button next">&gt;</button>
    </div>
  );
}

export default Section4;
