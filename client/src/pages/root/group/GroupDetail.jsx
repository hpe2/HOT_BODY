import {useParams, useNavigate} from 'react-router-dom';
import '../../../style/group/groupDetail.css';
import CheckIcon from '/images/check.svg';
import PeopleIcon from '/images/people.svg'
import CalendarIcon from '/images/calendar.svg'
import LocationIcon from '/images/location.svg'
import BeatIcon from '/images/beat.svg'
import GroupMeetingList from '../../../components/group/GroupMeetingList';
import { useGetGroupDetail, useJoinGroup } from '../../../Queries/queriesAndMutations';
import {toast} from 'react-toastify';
import { useState } from 'react';
import GroupMeetingMore from '../../../components/group/GroupMeetingMore';

const GroupDetail = () => {
  const {id} = useParams();
  const {data: group, isFetching} = useGetGroupDetail(id);
  const {mutateAsync: joinGroup, isPending: isJoinning} = useJoinGroup(id);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  if(isFetching){
    return (
      <h1>로딩중. . .</h1>
    )
  }

  const handleJoinGroup = async () => {
    const response = await joinGroup(id);
    toast.info(response.data.message);
  }


  return (
    <div className='group-detail-wrap'>
      {isOpen && <GroupMeetingMore />}
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
            <div className='group-detail-meeting-header'>
              <div>
                <h3>최근 등록된 약속</h3>
                <p className='group-detail-notice'>* 모임에 참여해야 약속에 참여할 수 있습니다.</p>
              </div>
              
              <div>
                <p className='more-group-meetings' onClick={() => setIsOpen(true)}>
                  약속 더보기 &#8594;	
                </p>
                <p className='more-group-meetings' onClick={() => navigate(`/group/meeting/create/${group._id}`)}>
                  약속 만들기 &nbsp; +	
                </p>
              </div>
              
            </div>
            <ul className='group-detail-meeting-lists'>
              <GroupMeetingList />
              <GroupMeetingList />
              <GroupMeetingList />
            </ul>
          </div>

          <button onClick={handleJoinGroup}>{isJoinning ? 'Processing. . .' : '모임 참여'}</button>


        </div>


      </div>
    </div>
  )
}

export default GroupDetail