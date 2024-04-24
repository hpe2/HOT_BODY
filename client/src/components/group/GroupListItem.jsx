import PeopleIcon from '/public/images/people.svg';

const GroupListItem = ({group}) => {
  const categoryInKor = (category) => {
    if(category === 'workout') return '운동'
    if(category === 'hobby') return '취미'
    if(category === 'travel') return '여행'
  }
  return (
    <div className="group-list-item box-shadow">
      <div className="group-list-img">Group Img</div>
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
