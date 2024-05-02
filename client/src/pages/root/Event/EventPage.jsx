
import Intro from "../../../components/user/Intro";
import "../../../style/event/event.css"

const EventPage = () => {
  return (
    <div className="event-container">
      <div className="float-info">EVENT</div>
      <Intro/>
      <button className="goButton">목록보기</button>
    </div>
  );
};

export default EventPage;
