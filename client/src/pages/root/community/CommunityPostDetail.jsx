import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCommunityPostDetail } from "../../../Queries/queriesAndMutations";
import { toast } from "react-toastify";
import { useUserContext } from "../../../context/AuthContext";
import "../../../style/community/communityDetail.css";
import LikeIcon from "/images/thumbsup.svg";
import CommunityPostReply from '../../../components/community/CommunityPostReply';

const CommunityPostDetail = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { data: post, isFetching } = useGetCommunityPostDetail(id);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    if (post?.status === 400) {
      toast.info("글을 불러오는데 실패했습니다.");
      navigate("/community");
    }
  }, [id, isFetching]);

  console.log(post);
  console.log(user);

  const handleLikePost = () => {};

  const handleDeletePost = () => {};

  const handleSubmit = () => {};

  return (
    <div className="community-detail-wrap">
      {isFetching ? (
        <div className="community-detail-container">
          글 정보를 로딩 중입니다 . . .
        </div>
      ) : (
        <>
          <div className="community-detail-container">
            {/* content header */}
            <div className="community-detail-header">
              <h1>
                [ {post.category} ] {post.title}
              </h1>
              <ul className="tags">
                {post.tags.split(",").map((tag) => (
                  <li># {tag}</li>
                ))}
              </ul>

              <div className="flex-between">
                <p>작성자 : {post.writername}</p>
                <p>{post.createdAt.slice(0, 10)}</p>
              </div>
            </div>

            {/* content iamge */}
            <div className="community-detail-content">
              <img src={post.image} className="community-detail-img" />

              {/* content */}
              <p>{post.text}</p>
            </div>

            {/* like buttons */}
            <div className="community-detail-likeBtn">
              <img src={LikeIcon} alt="like" onClick={handleLikePost} />
              <button>{post.likes.length}</button>
            </div>
            {user._id === post.writerId && (
              // delete & edit button
              <div className="conmmunity-detail-updateBtns">
                <button onClick={() => navigate(`/community/edit/${id}`)}>
                  수정하기
                </button>
                <button onClick={handleDeletePost}>삭제하기</button>
              </div>
            )}
          </div>

          <div className="community-detail-container">
            {/* 댓글 작성자 */}
            <form className="community-detail-reply-writer"onSubmit={handleSubmit}>
              <p>댓글 작성자 이름 :</p>
              <input type='text' value={replyText} onChange={(e) => setReplyText(e.target.value)} />
              <button type="submit">작성</button>
            </form>

            {/* 댓글 나열 */}
            <h3 className='community-detail-reply-title'>댓글 {post.reply.length}개</h3>
            <ul className="community-detail-replies">
              {post.reply.map(content => (
                <CommunityPostReply content={content} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default CommunityPostDetail;
