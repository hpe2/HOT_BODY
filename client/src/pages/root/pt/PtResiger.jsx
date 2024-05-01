import '../../../style/pt/ptRegister.css';
import {useUserContext} from '../../../context/AuthContext'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

const PtResiger = () => {
  const {user} = useUserContext();
  const navigate = useNavigate();
  const [speciality, setSpeciality] = useState('');
  const [certification, setCertifications] = useState('');
  const [location, setLocation] = useState('');
  const [gymImage, setGymImage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [price, setPrice] = useState(0);
  const [profileName, setProfileName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(!user){
      toast.info('로그인 한 사용자만 이용 가능한 서비스 입니다.');
      navigate('/')
    }
  }, [])

  // 필요 데이터 : userId, speciality, certifications, gymImage, profileImage, location, price, profileName, description, likes, review, reservations


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData ={

    }
  } 

  return (
    <div className='pt-register-wrap'>
      <div className="pt-register-container box-shadow">
        <h3 className='pt-register-title'>트레이너 등록하기</h3>

        <form>
          <button type='submit' className='pt-register-btn box-shadow'>등록하기</button>
        </form>

      </div>  
    </div>
  )
}

export default PtResiger