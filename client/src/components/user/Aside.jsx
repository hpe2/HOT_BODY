import React from "react";
import "../../style/aside.scss";

const Aside = () => {

  return(
    <aside className="aside">
      <div className="aside__heading">
        <span>Welcome <strong>홍길동</strong> 님!</span>
        <h2>내 정보</h2>
      </div>
      <div className="aside__row">
        <div className="mem-status">
          <div className="innertext">
            <h3>Hot Body+</h3> <p>구독중</p>
          </div>
        </div>
        <div className="daily">
          <button
            className="button"
          >
            <h4>출석체크</h4> <p>+ 1 point</p>
          </button>
        </div>
      </div>
    </aside>
  )
};

export default Aside;
