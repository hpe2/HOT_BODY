import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "/images/searchIcon.svg";
import PenIcon from "/images/pen.svg";

import "../../../style/community/community.css";
import PostList from "../../../components/community/PostList";
import PostListSkeleton from "../../../components/community/PostListSkeleton";
import { useGetCommunityPostsByCategory } from "../../../Queries/queriesAndMutations";

const categories = [
  { category: "all", name: "전체" },
  { category: "health", name: "헬스" },
  { category: "diet", name: "식단" },
  { category: "QA", name: "Q & A" },
];

const Community = () => {
  const navigate = useNavigate();
  const [category, setCategoray] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const {isFetching, data: posts} = useGetCommunityPostsByCategory(categories[category].category);

  const categoryInKor = (category) => {
    if(category === 'all') return '일반';
    if(category === 'health') return '헬스'
    if(category === 'diet') return '식단'
    if(category === 'QA') return 'Q&A'
  }

  return (
    <>
      <div className="community-container">
        <div className="community-banner">
          <ul className="community-category">
            {categories.map((categorylist, idx) => (
              <li
                key={idx}
                onClick={() => setCategoray(idx)}
                className={`${
                  categorylist.category === categories[category].category &&
                  "categoryActive"
                }`}
              >
                {categorylist.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="searchWrap">
          <img src={SearchIcon} alt="icon" className="searchIcon" />
          <input
            className="searchInput"
            placeholder="찾으시는 글이 있으신가요?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>

        <div className="postsWarp">
          <div className="postHeader">
            <div className="title">
              <h1>{categories[category].name} 글 보기 </h1>
              <span className="postsNum">{posts?.length}</span>
            </div>
            <button onClick={() => navigate("/community/write")}>
              <img src={PenIcon} alt="pen" className="penIcon" />
              글쓰기
            </button>
          </div>

          <ul className="postSection">
            {isFetching ? (
              <>
                <PostListSkeleton />
                <PostListSkeleton />
                <PostListSkeleton />
              </>
            ) : (
              posts.length === 0 ? (
                <p className='noPostsResult'>
                  {`${categoryInKor(categories[category].category)}`}에 관한 글이 없습니다. 첫 글을 작성 해보세요.
                </p>
              ) : (
                <>
                  {posts.map(post => (
                    <PostList post={post} key={post._id} /> 
                  ))}
                </>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Community;
