import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImgUploader from '../../../components/community/ImgUploader';
import { useUserContext } from '../../../context/AuthContext';
import { useCreateCommunityPost, useEditCommunityPost, useGetCommunityPostDetail } from '../../../Queries/queriesAndMutations';
import {toast} from 'react-toastify';

const categories = [
  {category: 'all', name: '일반'},
  {category: 'health', name: '헬스'},
  {category: 'diet', name: '식단'},
  {category: 'QA', name: 'Q & A'}
];

const CommunityEditPost = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const { data: post } = useGetCommunityPostDetail(id);
    const {mutateAsync: editPost, isPending} = useEditCommunityPost(id)
    const [category, setCategory] = useState(0);
    const [title, setTitle] = useState(post?.title);
    const [text, setText] = useState(post?.text);
    const [image, setImage] = useState(post?.image);
    const [tags, setTags] = useState(post?.tags);
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const editedData = {
        title,
        category: categories[category].category,
        text,
        image,
        tags
      };

      if(!title && !text){
        return toast.info('내용을 입력해주세요.')
      }

      const res = await editPost(editedData);
      if(res.status === 200){
        setCategory(0);
        setTitle("");
        setText("");
        setImage(null);
        setTags('');
        toast.info(res.data.message);
        navigate('/community');
      }else{
        if(res.response.data.message) return toast.info(res.response.data.message);
        else toast.info('글 작성에 실패했습니다.');
      }
    };
  
  
    return (
      <section className="communityPostingWrap">
        <div className="communityPostingContainer">
          <h2 className="postingType">
            글 수정하기
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
                {isPending ? "Processing. . ." : "수정하기"}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };

export default CommunityEditPost