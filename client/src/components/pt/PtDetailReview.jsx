import Comma from "/images/comma.svg";

const PtDetailReview = () => {
  return (
    <li className="pt-detail-review box-shadow">
      {/* 유저 정보 */}
      <div className="pt-detail-review-user flex-col">
        <div className="flex-between">
          <div>
            <h3>유저 이름 (유저 아이디)</h3>
            <p>2024.04.30</p>
          </div>
          <p>4.5 / 5.0</p>
        </div>
      </div>

      {/* 말풍선 */}
      <div className="pt-detail-review-text flex-col">
        <img src={Comma} alt="comma" className="comma" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </li>
  );
};

export default PtDetailReview;
