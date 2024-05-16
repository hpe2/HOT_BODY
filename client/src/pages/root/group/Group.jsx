import { useState } from 'react';
import GroupListItem from '../../../components/group/GroupListItem';
import '../../../style/group/groupMain.css';
import PlusIcon from '/images/plus.svg'
import Travel from '/images/travel.jpeg'
import Hobby from '/images/hobby.jpeg'
import WorkOut from '/images/workout.jpeg'
import GroupBanner from '/images/GroupHobby.jpg';

import {useNavigate} from 'react-router-dom'
import {useGetGroups} from '../../../Queries/queriesAndMutations';
import PostListSkeleton from '../../../components/community/PostListSkeleton';
import ErrorPage from '../../error/ErrorPage';
import GroupListSkeleton from '../../../components/group/GroupListSkeleton';

const categories = [
  { category: "all", name: "전체" },
  {category: 'workout', name: '운동'},
  {category: 'hobby', name: '취미'},
  {category: 'travel', name: '여행'}
];

const Group = () => {
  const navigate = useNavigate();
  const [category, setCategoray] = useState(0);
  const {data: response, isFetching, error, isError} = useGetGroups(categories[category].category);

  const selectImgByCategory = (category) => {
    if(category === 'all' || category === 'workout') return WorkOut;
    else if(category === 'hobby') return Hobby;
    else return Travel
  }

  if(isError){
    return <ErrorPage error={error} />
  }

  return (
    <div className='group-main-wrap'>
      <div className='group-main-container'>

        {/* 배너 */}
        <div className="group-main-banner">
          <div className="group-banner-img-container">
            <img src={GroupBanner} alt='banner' className='group-banner-image' />
            <div className='group-banner-img-overlay' />
          </div>
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
          {isFetching ? (
            <>
              <GroupListSkeleton />
              <GroupListSkeleton />
              <GroupListSkeleton />
              <GroupListSkeleton />
              <GroupListSkeleton />
              <GroupListSkeleton />
            </>
          ): (
            response.map(group => (
              <GroupListItem group={group} img={selectImgByCategory(group.category)} />
            ))
          )}
        </div>


      </div>
    </div>
  )
}

export default Group