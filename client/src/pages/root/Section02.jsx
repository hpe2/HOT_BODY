import React from 'react';
import '/src/style/Section2.css';  // CSS 파일을 해당 컴포넌트와 같은 디렉토리에 위치시키세요.

function Section02() {
  return (
    <div className="section02">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="card">
          <img src={`/images/트레이너${index + 1}.jpg`} alt={`트레이너 ${index + 1}`} />
          <div className="card-content">
            <h3>카드 {index + 1} 제목</h3>
            <p>카드 내용 설명이 들어갑니다...</p>
            <button>상세보기</button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Section02;
