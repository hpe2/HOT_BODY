import React, { useRef, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';

const PtInfoUpdate = ({setPtEdit}) => {
    const {user} = useUserContext(); //PersonalInfo 필요

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [purpose, setPurpose] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // API calling 
    }

  return (
    <form className="formField" onSubmit={handleSubmit}>
      <div className='inputNote height'>
        <span>키</span>
        <input type="number" value={height} placeholder='' /* onChange={(e) => setHeight(e.target.value) }*//>
      </div>
      <div className='inputNote weight'>
        <span>체중</span>
        <input type="number" value={weight} placeholder='' /* onChange={(e) => setHeight(e.target.value) }*//>
      </div>
      <div className='inputNote age'>
        <span>나이</span>
        <input type="number" value={age} placeholder='' /* onChange={(e) => setHeight(e.target.value) }*//>
      </div>
      <div className='inputNote height'>
        <span>성별</span>
        <select id="gender" placeholder=''>
          <option value="disabled" disabled selected hidden>선택</option>
          <option value="man">남자</option>
          <option value="woman">여자</option>
        </select>
      </div>
      <div className='inputNote height'>
        <span>연락처</span>
        <input type="number" value={phone} placeholder='' /* onChange={(e) => setHeight(e.target.value) }*//>
      </div>
      <div className='inputNote height'>
        <span>운동목적</span>
        <select id="purpose">
          <option value="disabled" disabled selected>선택</option>
          <option value="diet">다이어트</option>
          <option value="bulk">체중증가</option>
          <option value="diet">근력 강화(건강)</option>
          <option value="bulk">체력</option>
          <option value="diet">체형 교정</option>
          <option value="bulk">재활/통증 케어</option>
          <option value="diet">바프</option>
          <option value="bulk">대회 준비</option>
        </select>
      </div>
      <div className='buttons'>
        <input type="submit" value='저장하기'/>
        <input type="button" value='취소' onClick={() => {setPtEdit(false)}}/>
      </div>
    </form>
  )
}

export default PtInfoUpdate