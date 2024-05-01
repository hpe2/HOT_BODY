import React, { useState } from 'react'
import UserDataInput from './UserDataInput';
import { useUpdateUserBodyInfo } from '../../Queries/queriesAndMutations';
import {toast} from 'react-toastify';
import { useUserContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';

const PtInfoUpdate = ({setPtEdit}) => {
  const {mutateAsync: updateUserBodyInfo, isPending} = useUpdateUserBodyInfo();
  const {checkAuthUser} = useUserContext();
  const navigate = useNavigate();


    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('man');
    const [phone, setPhone] = useState('');
    const [purpose, setPurpose] = useState('diet');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const bodyInfo = {
        height,
        weight,
        age,
        gender,
        phone,
        purpose
      }

      const res = await updateUserBodyInfo(bodyInfo);
  
      if(res.status === 200){
        toast.info('정보를 수정했습니다.');
        checkAuthUser();
        navigate('/');
      }else{
        if(res.response.data.message) return toast.info(res.response.data.message);
        else toast.info('정보 수정에 실패했습니다.');
      }
    };

    const purposeList = [
      {value: 'diet', text:'다이어트'},
      {value: 'bulk', text:'체중증가'},
      {value: 'muscle', text:'근력 강화(건강)'},
      {value: 'health', text:'체력'},
      {value: 'balance', text:'체형 교정'},
      {value: 'physicalCare', text:'재활/통증 케어'},
      {value: 'bodyProfile', text:'바프'},
      {value: 'competition', text:'대회 준비'},
    ]

  return (
    <form className="formField" onSubmit={handleSubmit}>
      <UserDataInput dataName='키' type='number' value={height} setState={setHeight} />
      <UserDataInput dataName='체중' type='number' value={weight} setState={setWeight} />
      <UserDataInput dataName='나이' type='number' value={age} setState={setAge} />
      <UserDataInput dataName='연락처' type='number' value={phone} setState={setPhone} />

      
      <div className='inputNote height'>
        <span>성별</span>
        <select id="gender" onChange={(e) => setGender(e.target.value)}>
          <option value="man" defaultValue>남자</option>
          <option value="woman">여자</option>
        </select>
      </div>
      <div className='inputNote height'>
        <span>운동목적</span>
        
        <select id="purpose" onChange={(e) => setPurpose(e.target.value)}>
          {purposeList.map(list => (
            <option value={list.value}>
              {list.text}
            </option>
          ))}
        </select>
      </div>
      <div className='buttons'>
        <button className='PtEditButton' type="submit">{isPending ? 'Processing. . .': '수정하기'}</button>
        <button className='PtEditButton cancle' type="button" onClick={() => {setPtEdit(false)}}>취소하기</button>
      </div>
    </form>
  )
}

export default PtInfoUpdate