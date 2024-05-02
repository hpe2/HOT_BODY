import CalendarIcon from '/public/images/calendar.svg';
import LocationIcon from '/public/images/location.svg';
import CheckIcon from '/public/images/check.svg';

const GroupMeetingList = () => {
  return (
    <div className='group-detail-meeting-list box-shadow'>
      
      <p>
        <img src={CalendarIcon} alt='calendar_icon' />
        2024-04-25
      </p>
      <p>
        <img src={LocationIcon} alt='location_icon' />
        수원역 앙기모짐
      </p>

      <ul className='group-detail-meeting-list-tags'>
        <li className='group-detail-meeting-list-tag'>
          <img src={CheckIcon} alt='check_icon' />
          수원역에서 같이 운동 도와주면서 합시다.
        </li>
        <li className='group-detail-meeting-list-tag'>
          <img src={CheckIcon} alt='check_icon' />
          끝나고 술 한잔도 가능!
        </li>
        <li className='group-detail-meeting-list-tag'>
          <img src={CheckIcon} alt='check_icon' />
          매너 있는 분으로
        </li>
        <li className='group-detail-meeting-list-tag'>
          <img src={CheckIcon} alt='check_icon' />
          헬린이는 사절입니다.
        </li>
      </ul>

      <button>신청하기</button>
    </div>
  )
}

export default GroupMeetingList