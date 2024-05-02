import React, { useState } from "react";
import UserNavbar from "../../components/user/InnerNavbar";
import "../../style/user/point.scss";
import { useUserContext } from "../../context/AuthContext";
import PointInfo from "../../components/user/PointInfo";
import CouponInfo from "../../components/user/CouponInfo";


const Point = () => {
  const {user} = useUserContext();
  const [pointDetail, setPointDetail] = useState(false);

  return (
    <>
      <section className="pointContent">
        <div className="pointContainer">
          <div className="point">
            <h1>포인트</h1>
            <div className="boxContainer">
              <PointInfo/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="coupon">
            <h1>쿠폰</h1>
              <CouponInfo/>
            </div>
          </div>
      </section>
    </>
  )
};

export default Point;