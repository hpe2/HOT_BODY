import React, { useRef, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';

const DailyInfo = () => {
    const {user} = useUserContext();
    const [point, setPoint] = useState(user.point);
    const [checkedToday, setCheckedToday] = useState(user.checkedToday);


    function earnDailyPoint(e){
        checkedToday === true ? alert('더 이상 획득할 수 없습니다') : setPoint(+1), setCheckedToday(false);
    }

    return (
    <div className="info">
        <span>Welcome</span>
        <p><strong> {user.name}</strong> 님!</p>
        <button className="button" onClick={earnDailyPoint}>
            <h3>출석체크 <small> + 1p</small></h3>
        </button>
    </div>
  )
}

export default DailyInfo