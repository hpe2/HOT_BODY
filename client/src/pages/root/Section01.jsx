import React from 'react';
import '/src/style/Section1.css'; // CSS 파일을 해당 컴포넌트와 같은 디렉토리에 위치시키세요.

function Section01() {
    return (
      <div className="section01">
        <div className="image-container">
          <img src="/public/images/트레이너1.jpg" alt="설명" /> {/* 이미지 경로와 alt 텍스트를 변경하세요 */}
        </div>
        <div className="content">
          <h2>이달의 트레이너 상 수상 or 글</h2>
          <p>상세한 텍스트 설명이 들어가는 공간입니다. 내용은 자유롭게 작성하실 수 있습니다...</p>
          <button>상세보기</button>
        </div>
      </div>
    );
  }
  
  export default Section01;
