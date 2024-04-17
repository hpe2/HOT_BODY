import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '/images/searchIcon.svg';
import PenIcon from '/images/pen.svg'


import '../../../style/community.css'
import PostList from '../../../components/community/PostList';

const categories = [
  {category: 'all', name: '전체'},
  {category: 'health', name: '헬스'},
  {category: 'diet', name: '식단'},
  {category: 'QA', name: 'Q & A'}
]

const Community = () => {
  const navigate = useNavigate();
  const [category, setCategoray] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <div className='container'>


        <div className="banner">
          <ul className="category">
            {categories.map((categorylist, idx) => (
              <li 
                key={idx}
                onClick={() => setCategoray(idx)}
                className={`${categorylist.category === categories[category].category && 'categoryActive'}`}
              >
                {categorylist.name}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="searchWrap">
          <img src={SearchIcon} alt='icon' className='searchIcon' />
          <input className="searchInput" placeholder='찾으시는 글이 있으신가요?' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
          </input>
        </div>

        <div className="bestPosts">
          <h1>{categories[category].name} 베스트 글</h1>
          <ul className='bestPostsList'>
            <li className="bestPost"></li>
            <li className="bestPost"></li>
            <li className="bestPost"></li>
            <li className="bestPost"></li>
          </ul>
        </div>

        <div className="postsWarp">
          <div className="postHeader">
            <div className="title">
              <h1>{categories[category].name} 글 보기 </h1>
              <span className='postsNum'>199</span>
            </div>
            <button onClick={() => navigate('/community/create')}>
              <img src={PenIcon}  alt='pen' className='penIcon' />
              글쓰기
            </button>
          </div>

          <ul className="postSection">
            <PostList />
            <PostList />
            <PostList />
            <PostList />
          </ul>
        </div>
        
      </div>
    </>
  )
}

export default Community