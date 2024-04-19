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
    <div className="userInfo">
        <p>안녕하세요! <span><span className='username'>{user.name}</span> 님!</span></p>
        <button className="button" onClick={handleDailyPoint}>
            출석체크 <span>+ 10p</span>
        </button>
    </div>
  )
}

export default DailyInfo