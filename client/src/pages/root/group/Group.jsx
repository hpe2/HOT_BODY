import { useEffect, useState } from 'react';
import GroupListItem from '../../../components/group/GroupListItem';
import '../../../style/group/groupMain.css';
import PlusIcon from '/public/images/plus.svg'
import {useNavigate} from 'react-router-dom'
import {useGetGroups} from '../../../Queries/queriesAndMutations';

const categories = [
  { category: "all", name: "전체" },
  {category: 'workout', name: '운동'},
  {category: 'hobby', name: '취미'},
  {category: 'travel', name: '여행'}
];

const Group = () => {
  const navigate = useNavigate();
  const [category, setCategoray] = useState(0);
  const {data: groups, isFetching} = useGetGroups(categories[category].category);

  if(isFetching){
    return (
      <h1>로딩중. . .</h1>
    )
  }

  console.log(groups);

  return (
    <div className='group-main-wrap'>
      <div className='group-main-container'>

        {/* 배너 */}
        <div className="group-main-banner">
          <div className='group-banner-image'>Banner Image</div>
          <div className='group-banner-menu'>
            <h1>{categories[category].name}</h1>
            <ul>
            {categories.map((categorylist, idx) => (
              <li
                key={idx}
                onClick={() => setCategoray(idx)}
                className={`${
                  categorylist.category === categories[category].category &&
                  "categoryActive"
                }`}
              >
                {categorylist.name}
              </li>
            ))}
            </ul>
          </div>
        </div>

        <button className='group-main-button' onClick={() => navigate('/group/create')}>
          <img src={PlusIcon} alt='plus' />
          그룹 생성
        </button>

        {/* 내용 */}
        <div className="group-main-content">
          {groups.data.map(group => (
            <GroupListItem group={group} />
          ))}
        </div>


      </div>
    </div>
  )
}

export default Group