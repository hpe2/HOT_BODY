import React from "react";

const PtSearchResult = ({setIsDetailOpen}) => {
  return (
    <li className="pt-search-result" onClick={() => setIsDetailOpen(true)}>
      <img src="" alt="pt-profile" />
      <div className="pt-search-detail">
        <h3 className="pt-search-detail-name">홍길동 트레이너</h3>
        <p>소개 글이 들어갈 자리입니다. 소개 글이 들어갈 자리입니다.</p>
        <p>위치 : 서울특별시 00구 00동</p>
        <p className="pt-search-detail-price">
          가격 : <span>50,000 원(won)</span>
        </p>
      </div>
    </li>
  );
};

export default PtSearchResult;
