import PeopleIcon from '/images/people.svg';
import {useNavigate} from 'react-router-dom';

const GroupListItem = ({group, img}) => {
  const navigate = useNavigate();
  const categoryInKor = (category) => {
    if(category === 'workout') return '운동'
    if(category === 'hobby') return '취미'
    if(category === 'travel') return '여행'
  }
  return (
    <div className="group-list-item box-shadow" onClick={() => navigate(`/group/detail/${group._id}`)}>
      <div className="group-list-img">
        <img src={img} alt='img' />
      </div>
      <div className="group-list-info">
        <p className="group-list-category">{categoryInKor(group.category)}</p>
        <p className="group-list-title">{group.title}</p>
        <div className="group-list-member">
          <img src={PeopleIcon} alt="people" />
          {group.members.length}/{group.memberLimit} 명
        </div>
        <p className="group-list-leader">그룹장 : {group.leaderName}</p>
      </div>
    </div>
  );
};

export default GroupListItem;
