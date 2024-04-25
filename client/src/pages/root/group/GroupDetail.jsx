import {useParams} from 'react-router-dom';
import '../../../style/group/groupDetail.css';
import CheckIcon from '/public/images/check.svg';
import PeopleIcon from '/public/images/people.svg'
import CalendarIcon from '/public/images/calendar.svg'
import LocationIcon from '/public/images/location.svg'
import BeatIcon from '/public/images/beat.svg'
import GroupMeetingList from '../../../components/group/GroupMeetingList';


const GroupDetail = () => {
  const {id} = useParams();

  return (
    <div className='group-detail-wrap'>
      <div className="group-detail-container box-shadow">

        <div className="group-detail-banner">
          <div className="group-detail-header box-shadow">
            <div className="group-detail-leader">
              <img src="" alt='leader-img' />
              <p>김호찌</p>
            </div>
            <div className="group-detail-info">
              <h2>수원역에서 헬스 한판</h2>
              <div className='group-detail-info-member'>
                <img src={PeopleIcon} alt='members' />
                <p>1/10명</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group-detail-content">

          <ul className="group-detail-tags">
            <li>
              <img src={CheckIcon} alt='check_icon' />
              초보자도 가능 !
            </li>
            <li>
              <img src={CheckIcon} alt='check_icon' />
              서로 도우면서 합시다!
            </li>
            <li>
              <img src={CheckIcon} alt='check_icon' />
              매너 있는 분들 원해요~
            </li>
          </ul>

          <div className="group-detail-recent-meeting">
            <h3>이 그룹에서 최근 등록된 약속 !</h3>
            <p><img src={CalendarIcon} alt="CalendarIcon" />2024-04-25</p>
            <p><img src={LocationIcon} alt="LocationIcon" />수원역 앙기모짐</p>
            <p><img src={BeatIcon} alt='BeatIcon' />그룹 활동 횟수 : 24 회</p>
          </div>

          <div className="group-detail-desc">
            <h3>모임 상세 설명 </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>

          <div className="group-detail-meeting-wrap">
            <h3>최근 등록된 약속</h3>
            <p className='group-detail-notice'>* 모임에 참여해야 약속에 참여할 수 있습니다.</p>
            <ul className='group-detail-meeting-lists'>
              <GroupMeetingList />
              <GroupMeetingList />
              <GroupMeetingList />
            </ul>
          </div>

          <button>모임 참여</button>


        </div>


      </div>
    </div>
  )
}

export default GroupDetail