import '../../style/home/homeGroup.css';
import {useNavigate} from 'react-router-dom';

const HomeGroup = () => {
  const navigate = useNavigate();
  return (
    <div className='home-group-container'>
      <div className="home-group-title">
        <h2>최근 인기 모임에 가입해보세요</h2>
        <p onClick={() => navigate('/community')}>모임 더보기 &#8594;</p>
      </div>

      <ul className="home-group-wrap">
        <li className='box-shadow'>모임 01</li>
        <li className='box-shadow'>모임 02</li>
        <li className='box-shadow'>모임 03</li>
        <li className='box-shadow'>모임 04</li>
      </ul>
    </div>
  )
}

export default HomeGroup