import React from 'react'
import { useUserContext } from '../../context/AuthContext';
import {toast} from 'react-toastify';

const DailyInfo = () => {
    const {user} = useUserContext();


    const handleDailyPoint = () => {
        if(checkedToday === true) {
            toast.info('이미 출석 체크 하셨습니다.')
        }else{
            // API calling...
        }
    }

    return (
    <figure className="userInfo">
        <p>안녕하세요! <span><strong className='username'>{user.name}</strong> 님!</span></p>
        <button className="dailyButton" onClick={handleDailyPoint}>
            출석체크 <span>+ 10p</span>
        </button>
    </figure>
  )
}

export default DailyInfo