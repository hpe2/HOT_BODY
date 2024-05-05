import { FaCheck } from "react-icons/fa";
import '../../style/sub/submain.css';

const SubClick = () => {
  return (
    <div className="background" id="content1">
      <div className="sub">
        <div className="submenu1">
          <p className="sub_pp">"HOT BODY에서만 누릴 수 있는 독점 <br></br>혜택을 경험하세요!"</p>
          <p>
           HOT BODY 구독 회원이 되시면 <br></br>특별한 혜택을 제공받을 수 있습니다.<br></br> 저희와 함께라면 운동이 더욱 즐거워집니다.
          </p>
          <p>
          재미있고 활발한 운동 생활!<br></br> 다양한 프로그램과 전문가의 지도 하에 <br></br>몸과 마음을 모두 만족시킬 수 있습니다.
          </p>
          <p>
          가격 대비 최고의 가치!<br></br> 단돈 4,900원으로 시작하는 우리의 <br></br>구독 서비스를 통해 헬스와 웰빙을 경험해 보세요.
          </p>
          <p>지금 바로 HOT BODY의 멤버가 되어 <br></br>건강한 변화를 만나보세요!</p>
          <button className="sub_btn">구독하러 가기</button>
        </div>
        <div className="submenu2">
          <p>어떤 혜택이 있을까?</p>
          <p>
            <FaCheck /> 카카오톡을 통해 받을 수 있는 식단 추천!
          </p>
          <p>
            <FaCheck /> 기본 회원들 보다 더 많이 받을 수 있는 포인트!
          </p>
          <p>
            <FaCheck /> 구독자분들 만이 참여 할 수 있는 실시간 이벤트!
          </p>
          <p>
            <FaCheck /> 구독자분들이 돋보일수 있는 구독 뱃지!
          </p>
          <p>
            <FaCheck /> 3개월 이상 구독자 분들의 한해 PT 1회권 지급!
          </p>
          <p>
            <FaCheck /> 그룹활동을 더욱 활발하게 하기 위해선<br></br> 모임 인원
            증가는 필수!
          </p>
          <p>
            <FaCheck /> 지금 시작해도 늦지 않았어!
          </p>
        </div>
      </div>
      <div className="faq-section">
      {/* <hr /> */}
      <h1 className="faq-title">구독 Q&amp;A</h1>
      <p className="QAmini">
          *자주 질문받았던 사항에 대해 작성해 두었습니다.
        </p>
      <div className="faq-item">
        <p className="faq-question">Q . 식단 추천 받으면 정말 살이 빠질까요?</p>
        <p className="faq-answer">A . 회원님의 마음가짐 없이는 그 무엇도 이루어 질 수 없습니다.
            <br></br> &nbsp; &nbsp; &nbsp;하지만 마음만 먹고 임해주신다면 저희는 언제나 보답해
            드릴수있습니다.</p>
      </div>
      <div className="faq-item">
        <p className="faq-question">Q . 실시간 이벤트 주기는 어떻게 되나요?</p>
        <p className="faq-answer">A . 주기는 명확하지 않지만 주 1회 이상은 진행 할 예정입니다.</p>
      </div>
      <div className="faq-item">
        <p className="faq-question">Q . PT 1회권만 받고 구독 끊어도 될까요?</p>
        <p className="faq-answer"> A. PT 1회권은 3개월 이상 구독하신 분들에게 드리는 혜택이기에 받고
            끊으셔도 무관합니다.</p>
      </div>
    </div>
    </div>
  );
};
export default SubClick;
