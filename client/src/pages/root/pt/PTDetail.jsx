import "../../../style/pt/ptDetail.css";
import Star from "/public/images/star.svg";
import Calendar from "/public/images/calendar-point.svg";
import Chat from "/public/images/message.svg";
import Check from '/public/images/check.svg';
import Badge from '/public/images/badge.svg';
import PtDetailReview from '../../../components/pt/PtDetailReview';

const PTDetail = () => {
  return (
    <div className="pt-detail-wrap">
      <div className="pt-detail-container box-shadow">
        <img src="" alt="gym_img" className="pt-detail-gymImg" />

        {/* 트레이너 프로필 */}
        <div className="pt-detail-profile-wrap flex-align">
          <div className="pt-detail-profile">
            <img src="" alt="pt_profile" className="pt-detail-profieImg" />
            <div className="flex-col">
              <h3>홍길동 트레이너</h3>
              <p>서울특별시 00구 00동 00짐</p>
              <div className="flex-align">
                <p>예약 건수 : 123 회, &nbsp;</p>
                <p>후기: 40 개</p>
              </div>
              <p className='flex-align'>
                <img src={Star} alt='star' className='pt-detail-star'/>
                <img src={Star} alt='star' className='pt-detail-star'/>
                <img src={Star} alt='star' className='pt-detail-star'/>
                <img src={Star} alt='star' className='pt-detail-star'/>
                <img src={Star} alt='star' className='pt-detail-star'/>

                4.5 / 5.0
              </p>
            </div>
          </div>

          <div className="flex-align pt-detail-btns">
            <button>
              <img src={Star} alt="" />
              <span>관심</span>
            </button>
            <button>
              <img src={Calendar} alt="" /> 예약하기
            </button>
            <button>
              <img src={Chat} alt="" /> 문의하기
            </button>
          </div>
        </div>

        {/* 트레이너 설명 */}
        <div className="pt-detail-descript flex-col">
          <h3>
            이 트레이너, <br />
            <span className="point-color">어떤 사람인가요?</span>
          </h3>
          <p>
            안녕하세요. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* 전문 분야 */}
        <div className="flex-col pt-detail-speciality">
          <h3>전문 분야</h3>
          <ul className='pt-detail-speciality-list'>
            <li><img src={Check} alt='check' />기초 체력</li>
            <li><img src={Check} alt='check' />바른 체형</li>
            <li><img src={Check} alt='check' />기능 개선</li>
            <li><img src={Check} alt='check' />바디프로필 벌크업</li>
          </ul>
        </div>

        {/* 자격 검증 */}
        <div className="pt-detail-certifications">
          <h3>자격 검증</h3>
          <ul className="pt-detail-certification-list">
            <li><img src={Badge} alt='check' />HYPERVOLT 컨디셔닝 테크닉 교육 과정 수료</li>
            <li><img src={Badge} alt='check' />(전) 혁 PT 매니저</li>
            <li><img src={Badge} alt='check' />(전) MN휘트니스 강남점 퍼스널 트레이너</li>
            <li><img src={Badge} alt='check' />(전) 다이아핏(DIAFIT) 매니저</li>
          </ul>
        </div>


        {/* 리뷰(댓글) */}
        <div className="pt-detail-reviews">
          <div className='pt-detail-review-header'> 
            <img src={Chat} alt='chat' /> 
            <h3>리뷰 <span className='point-color'>40</span>개</h3>
          </div>

          <ul className='pt-detail-review-lists box-shadow'>
            <PtDetailReview />
            <PtDetailReview />
            <PtDetailReview />
            <PtDetailReview />
          </ul>

        </div>




      </div>
    </div>
  );
};

export default PTDetail;
