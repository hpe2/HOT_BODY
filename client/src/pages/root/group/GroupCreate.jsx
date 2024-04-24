import { useEffect, useState } from 'react';
import { useCreateGroup } from '../../../Queries/queriesAndMutations'
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import '../../../style/group/groupCreation.css';
import GroupInput from '../../../components/group/GroupInput';
import { useUserContext } from '../../../context/AuthContext';

const categories = [
  {category: 'workout', name: '운동'},
  {category: 'hobby', name: '취미'},
  {category: 'travel', name: '여행'}
];

const GroupCreate = () => {
  const {mutateAsync: createGroup, isPending} = useCreateGroup();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState(0);
  const {isAuthenticated} = useUserContext();

  useEffect(() => {
    if(!isAuthenticated){
      toast.info('로그인 한 사용자만 이용할 수 있는 기능입니다.');
      navigate('/group');
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const groupData = {
      title,
      description,
      image, 
      tags,
      category: categories[category].category
    }
    const res = await createGroup(groupData);
    if(res.status === 200){
      toast.info('모임을 성공적으로 생성했습니다.');
      navigate('/group');
    }else{
      toast.info('모임을 생성하는데 실패했습니다.');
    }
  }

  return (
    <div className='group-creation-wrap'>
      <div className="group-creation-container">
        <h2>새로운 모임 만들기</h2>

        <div className="group-creation-info">
          <GroupInput value={title} setValue={setTitle} text='그룹 이름' />
          <div className='group-creation-category'>
            <p>카테고리</p>
            <ul className="groupCategories">
              {categories.map((_, idx) => (
                <li
                  key={idx}
                  className={`categoryCheck ${idx === category && "postingActive"}`}
                  onClick={() => setCategory(idx)}
                >
                  {categories[idx].name}
                </li>
              ))}
            </ul>
          </div>
          <GroupInput type="group" value={description} setValue={setDescription} text='그룹 설명' />
          <GroupInput value={tags} setValue={setTags} text='태그' />
        </div>
        <button onClick={handleSubmit}>{isPending ? 'Processing. . .' : '작성하기'}</button>
      </div>
    </div>
  )
}

export default GroupCreate