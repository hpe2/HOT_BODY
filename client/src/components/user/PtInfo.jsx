import React, { useRef, useState } from 'react'
import { useUserContext } from '../../context/AuthContext';

const PtInfoUpdate = ({setPtEdit}) => {
    const {user} = useUserContext(); //PersonalInfo 필요

    const [height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [purpose, setPurpose] = useState('');


  return (
    <form className="formField">
      <div className='inputNote personalHeight'>
        <span>키</span>
        <span className='inputContent'>user.personalInfo.height</span>
      </div>
      <div className='inputNote id'>
        <span>체중</span>
        <span className='inputContent'>user.personalInfo.weight</span>
      </div>
      <div className='inputNote id'>
        <span>나이</span>
        <span className='inputContent'>user.personalInfo.age</span>
      </div>
      <div className='inputNote id'>
        <span>성별</span>
        <span className='inputContent'>user.personalInfo.gender</span>
      </div>
      <div className='inputNote id'>
        <span>번호</span>
        <span className='inputContent'>user.personalInfo.phone</span>
      </div>
      <div className='inputNote id'>
        <span>운동목적</span>
        <span className='inputContent'>user.personalInfo.purpose</span>
      </div>
      <div className='buttons'>
        <input type="button" value='수정하기' onClick={() => {setPtEdit(true)}}></input>
      </div>
    </form>
  )
}

export default PtInfoUpdate