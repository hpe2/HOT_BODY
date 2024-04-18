import React, { useRef, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';

const DailyInfo = () => {
    const {user} = useUserContext();
    const [point, setPoint] = useState(user.point);
    const [daily, setDaily] = useState(true); //clickDate 활용?

    function earnDailyPoint(e){
        daily === false ? alert('더 이상 획득할 수 없습니다') : setPoint(+1), setDaily(false);
    }

    return (
    <div className="info">
        <span>Welcome
            <strong> {user.name}</strong>
            님!
        </span>
        <button className="button" onClick={earnDailyPoint}>
            <h3>출석체크</h3><p>+ 1 p</p>
        </button>
    </div>
  )
}

export default DailyInfo