import { useState } from "react";
import GroupInput from "./GroupInput";
import { useCreateNewMeeting } from '../../Queries/queriesAndMutations';

const CreateMeetingModal = ({groupId, setModalOpen}) => {
  const {mutateAsync: createMeeting, isPending} = useCreateNewMeeting(groupId);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tags, setTags] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const meetingData = {
      date,
      location,
      time,
      tags,
    }

    await createMeeting({groupId, meetingData});
    setModalOpen(false);
  }

  return (
    <div className="group-meetings-modal-content">
      <div className="group-meetings-modal-boxContainer">
        <div className="data">
          <div className="group-meetings-modal-inner-boxContainer">
            <h1 className="meeting-title">약속 만들기</h1>
            <div className="meeting-upper">
              <div className="meeting-upper-left">
                <div className="group-creation-input date group-description">
                  <p>날짜</p>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="group-creation-input time group-description">
                  <p>시간</p>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="meeting-upper-right">
                <span className="day">{date.slice(5, 7)}월</span>
                <span className="date">{date.slice(8, 11)}</span>
                <span className="time">
                  {time.split(":") >= 1200 ? "오후" : "오전"}
                  {time}시
                </span>
              </div>
            </div>
            <GroupInput value={location} setValue={setLocation} text="위치" placeholder={'위치를 입력해주세요.'} />
            <GroupInput value={tags} setValue={setTags} text="태그" placeholder={'태그는 콤마(,) 단위로 구분됩니다.'} />
          </div>
          <button className="group-meetings-modal-btn" onClick={handleSubmit}>
            {/* {isPending ? 'Processing. . .' : */} 등록하기
          </button>
          <button
            className={"group-meetings-modal-close-btn"}
            onClick={() => setModalOpen(false)}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMeetingModal;
