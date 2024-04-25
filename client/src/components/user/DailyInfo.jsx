import React, {useState} from 'react'
import { useUserContext } from '../../context/AuthContext';
import {toast} from 'react-toastify';

const DailyInfo = ({ value, setState }) => {
    const {user} = useUserContext();
    const [point, setPoint] = useState(user.point)

    const handleDailyPoint = () => {
        if(value === true) {
            toast.info('이미 출석 체크 하셨습니다.')
        }else{
            {() => setState(true)}
            setPoint(+10);
            toast.info(`출석체크가 완료되었습니다.
            현재포인트: ${point}`);
        }
    }

    return (
    <figure className="userInfo">
        <p>안녕하세요! <span><strong className='username'>{user.name}</strong> 님!</span></p>
        <button className="dailyButton" onClick={handleDailyPoint}>
            출석체크<span>+ 10p</span>
        </button>
    </figure>
  )
}

export default DailyInfo