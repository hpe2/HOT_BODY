import { useParams } from "react-router-dom";
import "../../../style/group/groupDetail.css";
import CheckIcon from "/images/check.svg";
import PeopleIcon from "/images/people.svg";
import CalendarIcon from "/images/calendar.svg";
import LocationIcon from "/images/location.svg";
import UserIcon from '/images/user-white.svg';
import BeatIcon from "/images/beat.svg";
import GroupMeetingList from "../../../components/group/GroupMeetingList";
import {
  useGetGroupDetail,
  useJoinGroup,
} from "../../../Queries/queriesAndMutations";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import { useUserContext } from "../../../context/AuthContext";
import CreateMeetingModal from "../../../components/group/CreateMeetingModal";

const GroupDetail = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetGroupDetail(id);
  const { mutateAsync: joinGroup, isPending: isJoinning } = useJoinGroup(id);

  //추가
  const modalBackground = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useUserContext();

  if (isFetching) {
    return <h1>로딩중. . .</h1>;
  }

  const handleJoinGroup = async () => {
    if(!user._id) return toast.info('로그인 사용자에게만 제공되는 기능입니다.')
    const response = await joinGroup(id);
    toast.info(response.data.message);
  };


  return (
    <div className="group-detail-wrap">
      <div className="group-detail-container box-shadow">
        <div className="group-detail-banner">
          <div className="group-detail-header box-shadow">
            <div className="group-detail-leader">
                <img src={UserIcon} alt="leader-img" />
              <p>그룹장 : {data.group.leaderName}</p>
            </div>
            <div className="group-detail-info">
              <h2>{data.group.title}</h2>
              <div className="group-detail-info-member">
                <img src={PeopleIcon} alt="members" />
                <p>
                  {data.group.members.length}/{data.group.memberLimit}명
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group-detail-content">
          <ul className="group-detail-tags">
            {data.group.tags.split(",").map((tag) => (
              <li>
                <img src={CheckIcon} alt="check_icon" />
                {tag}
              </li>
            ))}
          </ul>

          <div className="group-detail-recent-meeting">
            <h3>최근 등록 약속</h3>
            {data.meetings.length > 0 ? (
              <>
                <p>
                  <img src={CalendarIcon} alt="CalendarIcon" />
                  {data.meetings[0].date} &nbsp; ({data.meetings[0].time})
                </p>
                <p>
                  <img src={LocationIcon} alt="LocationIcon" />
                  {data.meetings[0].location}
                </p>
                <p>
                  <img src={BeatIcon} alt="BeatIcon" />
                  그룹 활동 횟수 : {data.meetings.length} 회
                </p>
              </>
            ) : (
              <p style={{ margin: "2rem 0" }}>
                아직 등록된 약속이 없습니다. 첫 약속을 생성 해보세요!
              </p>
            )}
          </div>

          <div className="group-detail-desc">
            <h3>모임 상세 설명 </h3>
            <p>{data.group.description}</p>
          </div>

          <div className="group-detail-meeting-wrap">
            <div className="group-detail-meeting-header">
              <div>
                <h3>등록된 약속</h3>
                <p className="group-detail-notice">
                  * 모임에 참여해야 약속에 참여할 수 있습니다.
                </p>
              </div>

              <div>
                {data.group.members.includes(user._id) && (
                  <p
                    className="more-group-meetings"
                    onClick={() => setModalOpen(true)}
                  >
                    약속 만들기 &nbsp; +
                  </p>
                )}
              </div>
            </div>
            {data.meetings.length === 0 && (
              <p>아직 등록된 약속이 없습니다. 첫 약속을 생성 해보세요.</p>
            )}
            <ul className="group-detail-meeting-lists">
              {data.meetings.map((meeting) => (
                <GroupMeetingList meeting={meeting} />
              ))}
            </ul>
          </div>

          <button onClick={handleJoinGroup}>
            {isJoinning ? "Processing. . ." : "모임 참여"}
          </button>
        </div>
      </div>
      {modalOpen && (
        <div
          className={"group-meetings-modal-container"}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <CreateMeetingModal groupId={id} setModalOpen={setModalOpen} />
        </div>
      )}
    </div>
  );
};

export default GroupDetail;
