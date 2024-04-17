import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImgUploader from '../../../components/community/ImgUploader';
import axiosInstance from '../../../config/axios';
import { useUserContext } from '../../../context/AuthContext';

const categories = [
  {category: 'all', name: '전체'},
  {category: 'health', name: '헬스'},
  {category: 'diet', name: '식단'},
  {category: 'QA', name: 'Q & A'}
]
const CommunityNewPost = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUserContext();
  const { type } = useParams();
  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      category: categories[category].category,
      text,
      image,
      tags
    };
    if(!title && !text){
      return alert('내용을 입력해주세요.');
    }
    const res = await axiosInstance.post('/api/community/createPost', formData);
    if(res.status === 200){
      setCategory(0);
      setTitle("");
      setText("");
      setImage(null);
      setTags('');
    }
  };

  useEffect(() => {
    if(!isAuthenticated){ 
      alert('로그인 한 이용자만 사용할 수 있습니다.')
      navigate('/community');
    }
  }, []);

  return (
    <section className="communityPostingWrap">
      <div className="communityPostingContainer">
        <h2 className="postingType">
          {type === "create" ? "새로운 글 작성하기" : "글 수정하기"}
        </h2>
        <form className="communityPostForm" onSubmit={handleSubmit}>
          <div className="communityFormTop">
            <div className="communityTitleBox">
              <p className="boxTitle">제목 : </p>
              <input
                type="text"
                placeholder='제목을 입력하세요.'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <ul className="communityCategories">
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

          <div className="communityTextBox">
            <p className="boxTitle">내용 : </p>
            <textarea 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              placeholder='내용을 입력하세요.'
            />
          </div>

          <div className="communityTagBox">
            <p className="boxTitle">태그 : </p>
            <input
              type="text"
              value={tags}
              placeholder="태그는 쉼표(,) 단위로 구분 됩니다."
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <ImgUploader image={image} setImage={setImage} />

          <div className="postingBtns">
            <button
              className="communityCancelButton"
              onClick={() => navigate("/community")}
            >
              취소하기
            </button>
            <button type="submit" className="communityPostButton">
              작성하기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommunityNewPost;
