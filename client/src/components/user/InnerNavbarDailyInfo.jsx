import React, {useState, useEffect} from 'react'
import { useUserContext } from '../../context/AuthContext';
import {toast} from 'react-toastify';

const InnerNavbarDailyInfo = ({ value, setState }) => {
    const {user} = useUserContext();
    const [point, setPoint] = useState(user.point)
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        const lastChecked = localStorage.getItem('lastCheckedDate');
        const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD 형식

        if (!lastChecked || lastChecked !== today) {
        setIsButtonEnabled(true);
        }
    }, []);

    const handleCheckIn = () => {
        const today = new Date().toISOString().slice(0, 10); // 오늘 날짜 저장
        localStorage.setItem('lastCheckedDate', today);
        setIsButtonEnabled(false); // 버튼 비활성화
        setPoint(+5);
        toast.info('출석체크 완료! +5p');
    };

    return (
    <figure className="userInfo">
        <p>안녕하세요! <span><strong className='username'>{user.name}</strong> 님!</span></p>
        <button className="dailyButton" onClick={handleCheckIn} disabled={!isButtonEnabled}>
            {isButtonEnabled === true ? "출석체크 +5p": "출석체크 완료"}
        </button>
    </figure>
  )
}

export default InnerNavbarDailyInfo