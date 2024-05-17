import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PenIcon from "/images/pen.svg";
import "../../../style/community/community.css";
import PostList from "../../../components/community/PostList";
import PostListSkeleton from "../../../components/community/PostListSkeleton";
import { useGetCommunityPostsByCategory } from "../../../Queries/queriesAndMutations";
import Banner from '/images/communityBanner.jpg'
import ErrorPage from "../../error/ErrorPage";

const categories = [
  { category: "all", name: "전체" },
  { category: "health", name: "헬스" },
  { category: "diet", name: "식단" },
  { category: "QA", name: "Q & A" },
];


const Community = () => {
  const navigate = useNavigate();
  const [category, setCategoray] = useState(0);
  const { data : response, isFetching, error, isError } = useGetCommunityPostsByCategory(
    categories[category].category
  );

  const categoryInKor = (category) => {
    if (category === "all") return "일반";
    if (category === "health") return "헬스";
    if (category === "diet") return "식단";
    if (category === "QA") return "Q&A";
  };

  if(isError) {
    return <ErrorPage error={error} />
  }

  return (
    <div className="community-container">

      <div className="community-banner">
        <img src={Banner} alt="banner" className="banner-img" />
        <div className="banner-img-overlay" />

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

      <div className="postsWarp">
        <div className="postHeader">
          <div className="title">
            <h1>{categories[category].name} 글 보기 </h1>
            <span className="postsNum">{response?.data?.length}</span>
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
          ) : response?.data?.length === 0 ? (
            <p className="noPostsResult">
              {`${categoryInKor(categories[category].category)}`}에 관한 글이
              없습니다. 첫 글을 작성 해보세요.
            </p>
          ) : (
            response?.data?.map((post) => (
              <PostList post={post} key={post._id} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Community;
