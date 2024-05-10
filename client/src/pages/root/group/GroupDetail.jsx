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
import { useState, useRef, useEffect } from 'react';
import GroupMeetingMore from '../../../components/group/GroupMeetingMore';
import GroupInput from '../../../components/group/GroupInput';
import { useUserContext } from '../../../context/AuthContext';


const GroupDetail = () => {
  const {id} = useParams();
  const {data: group, isFetching} = useGetGroupDetail(id);
  const {mutateAsync: joinGroup, isPending: isJoinning} = useJoinGroup(id);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  //추가
  const modalBackground = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const {isAuthenticated} = useUserContext();
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');
  const [locate, setLocate] = useState('');
  /* const {mutateAsync: createMeeting, isPending} = useCreateGroup(); */


  useEffect(() => {
    if(!isAuthenticated){
      toast.info('로그인 한 사용자만 이용할 수 있는 기능입니다.');
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const meetingData = {
      date,
      locate,
      tags,
    }
    console.log(meetingData)
    /* const res = await createMeeting(meetingData); */
    if(/* res.status === 200 */meetingData){
      toast.info('약속을 성공적으로 생성했습니다.');
      navigate('/group');
    }else{
      toast.info('약속을 생성하는데 실패했습니다.');
    }
  }

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
                <p className='more-group-meetings' onClick={() => setModalOpen(true)/* navigate(`/group/meeting/create/${group._id}`) */}>
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
      {
        modalOpen &&
        <div className={'group-meetings-modal-container'} ref={modalBackground} onClick={(e) => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className={'group-meetings-modal-content'}>
            <div className='group-meetings-modal-boxContainer'>
            <div className='data'>
              <div className='group-meetings-modal-inner-boxContainer'>
              <h1>약속 만들기</h1>
                <div className='group-creation-input date group-description'>
                  <p>날짜</p>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <GroupInput value={locate} setValue={setLocate} text='위치' />
                <GroupInput value={tags} setValue={setTags} text='태그' />
              </div>
              <button className='group-meetings-modal-btn' onClick={handleSubmit}>{/* {isPending ? 'Processing. . .' : */} 등록하기</button>
              <button className={'group-meetings-modal-close-btn'} onClick={() => setModalOpen(false)}>
                닫기
              </button>
            </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default GroupDetail