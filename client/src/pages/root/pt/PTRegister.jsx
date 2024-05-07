import '../../../style/pt/ptRegister.css';
import {useUserContext} from '../../../context/AuthContext'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import PtRegisterInput from '../../../components/pt/PtRegisterInput';
import ImgUploader from '../../../components/community/ImgUploader';
import { useRegisterTrainer } from '../../../Queries/queriesAndMutations';

const PTResiger = () => {
  const {user} = useUserContext();
  const navigate = useNavigate();
  const [speciality, setSpeciality] = useState('');
  const [certification, setCertifications] = useState('');
  const [location, setLocation] = useState('');
  const [ptProfileImage, setPtProfileImage] = useState('');
  const [price, setPrice] = useState('');
  const [ptProfileName, setPtProfileName] = useState('');
  const [description, setDescription] = useState('');
  const [isValidLocation, setIsValidLocation] = useState(false);
  const {mutateAsync: registerTrainer, isPending} = useRegisterTrainer();

  useEffect(() => {
    if(!user){
      toast.info('로그인 한 사용자만 이용 가능한 서비스 입니다.');
      navigate('/pt')
    }
    if(user.userType === 'trainer'){
      toast.info('이미 트레이너로 등록된 회원입니다.');
      navigate('/pt')
    }
  }, [user]);

  const [searchLocation, setSearchLocation] = useState();

  // 검색한 장소의 위치 정보(도로명, 위도, 경도)를 searchLocation에 저장하는 함수
  const handleSearch = async (e) => {
    e.preventDefault();
    if(location){
      // 검색한 지역의 정보 찾기 (주소명, 경도, 위도)
      let geocoder = new window.kakao.maps.services.Geocoder();
      const response = async (result, status) => {
        if(status === window.kakao.maps.services.Status.OK){
          const locationData = {
            address: result[0].address_name,
            lon: Number(result[0].x), // 경도
            lat: Number(result[0].y) // 위도
          }
          setSearchLocation(locationData);
          toast.info('사용 가능한 주소 입니다.');
          setIsValidLocation(true);
        }else{
          toast.info('올바른 주소를 입력해주세요.')
          setIsValidLocation(false);
        }
      }
      geocoder.addressSearch(location, response);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isValidLocation){
      return toast.info('주소를 먼저 확인하세요.');
    }
    const formData ={
      speciality,
      certification,
      ptProfileImage,
      location: searchLocation,
      price: Number(price),
      ptProfileName,
      description
    }
    const response = await registerTrainer(formData);
    if(response.status === 200){
      toast.info('트레이너 정보를 등록했습니다.')
      navigate('/pt')
    }else{
      if(response.data.message) toast.info(response.data.message)
      else toast.info('트레이너 등록에 실패했습니다.');
    }
  } 

  return (
    <div className='pt-register-wrap'>
      <div className="pt-register-container box-shadow">
        <h2 className='pt-register-title'>트레이너 등록하기</h2>

        <form className='flex-col pt-register-form' onSubmit={handleSubmit}>
          <PtRegisterInput label={'트레이너 이름'} value={ptProfileName} setState={setPtProfileName} />
          <div className="pt-register-location">
            <PtRegisterInput label={'장소'} value={location} setState={setLocation} placeholder="도로명을 입력해주세요." />
            <button onClick={handleSearch} className={`${isValidLocation ? 'location-valid' : 'location-invalid'}`}>주소 확인</button>
          </div>
          <PtRegisterInput label={'가격'} value={price} setState={setPrice} placeholder="1회 기준 (숫자만 입력)" />
          <PtRegisterInput label={'전문 분야'} value={speciality} setState={setSpeciality} placeholder="전문 분야에 대해 작성 바랍니다. 쉼표(,)로 구분. ex) 기초 체력, 바른 체형 ..." />
          <PtRegisterInput label={'자격 검증'} value={certification} setState={setCertifications} placeholder="자격증 또는 경력에 대해 작성 바랍니다.쉼표(,)로 구분." />
          <div className='pt-register-textarea-wrap'>
            <span>상세 설명</span>
            <textarea 
              value={description} 
              placeholder={'어떤 트레이너인지에 대해 작성 바랍니다. (성격, 운동 방식 등)'}
              onChange={(e) => setDescription(e.target.value)} 
              className='pt-register-input'
            />
          </div>
         <div className="flex-col pt-register-img-wrap">
          <p>트레이너 프로필 이미지</p>
          <ImgUploader image={ptProfileImage} setImage={setPtProfileImage} />
         </div>
          <button type='submit' className='pt-register-btn box-shadow'>{isPending ? 'Processing. . .' : '등록하기'}</button>
        </form>

      </div>  
    </div>
  )
}

export default PTResiger