import CalendarIcon from '/images/calendar.svg';
import LocationIcon from '/images/location.svg';
import CheckIcon from '/images/check.svg';

const GroupMeetingList = ({meeting}) => {
  console.log(meeting);
  return (
    <div className='group-detail-meeting-list box-shadow'>
      
      <p>
        <img src={CalendarIcon} alt='calendar_icon' />
        {meeting.date}
      </p>
      <p>
        <img src={LocationIcon} alt='location_icon' />
        {meeting.location}
      </p>

      <ul className='group-detail-meeting-list-tags'>
        {meeting.tags.split(',').map(tag => (
          <li className='group-detail-meeting-list-tag' key={tag}>
            <img src={CheckIcon} alt='check_icon' />
            {tag}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default GroupMeetingList