import {useParams} from 'react-router-dom';
import '../../../style/group/groupDetail.css';
import CheckIcon from '/public/images/check.svg';
import PeopleIcon from '/public/images/people.svg'
import CalendarIcon from '/public/images/calendar.svg'
import LocationIcon from '/public/images/location.svg'
import BeatIcon from '/public/images/beat.svg'
import GroupMeetingList from '../../../components/group/GroupMeetingList';
import { useGetGroupDetail } from '../../../Queries/queriesAndMutations';


const GroupDetail = () => {
  const {id} = useParams();
  const {data: group, isFetching} = useGetGroupDetail(id);

  if(isFetching){
    return (
      <h1>로딩중. . .</h1>
    )
  }

  return (
    <div className='group-detail-wrap'>
      <div className="group-detail-container box-shadow">

        <div className="group-detail-banner">
          <div className="group-detail-header box-shadow">
            <div className="group-detail-leader">
              <img src="" alt='leader-img' />
              <p>{group.leaderName}</p>
            </div>
            <div className="group-detail-info">
              <h2>{group.title}</h2>
              <div className='group-detail-info-member'>
                <img src={PeopleIcon} alt='members' />
                <p>{group.members.length}/{group.memberLimit}명</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group-detail-content">

          <ul className="group-detail-tags">
            {group.tags.split(',').map(tag => (
              <li>
                <img src={CheckIcon} alt='check_icon' />
                {tag}
              </li>
            ))}
          </ul>

          <div className="group-detail-recent-meeting">
            <h3>이 그룹에서 최근 등록된 약속 !</h3>
            <p><img src={CalendarIcon} alt="CalendarIcon" />2024-04-25</p>
            <p><img src={LocationIcon} alt="LocationIcon" />수원역 앙기모짐</p>
            <p><img src={BeatIcon} alt='BeatIcon' />그룹 활동 횟수 : 24 회</p>
          </div>

          <div className="group-detail-desc">
            <h3>모임 상세 설명 </h3>
            <p>{group.description}</p>
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