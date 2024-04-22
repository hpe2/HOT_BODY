import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useDeleteCommunityPost,
  useGetCommunityPostDetail,
  useLikeCommunityPost,
  useReplyCommunityPost,
} from "../../../Queries/queriesAndMutations";
import { toast } from "react-toastify";
import { useUserContext } from "../../../context/AuthContext";
import "../../../style/community/communityDetail.css";
import LikeIcon from "/images/thumbsup.svg";
import CommunityPostReply from "../../../components/community/CommunityPostReply";

const categoryInKor = (category) => {
  if(category === 'all') return '일반';
  if(category === 'health') return '헬스'
  if(category === 'diet') return '식단'
  if(category === 'QA') return 'Q&A'
}

const CommunityPostDetail = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { data: post, isFetching } = useGetCommunityPostDetail(id);
  const { mutateAsync: likePost } = useLikeCommunityPost();
  const {mutateAsync: deletePost, isPending} = useDeleteCommunityPost(id)
  const { mutateAsync: replyPost } = useReplyCommunityPost();
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    if (post?.status === 400) {
      toast.info("글을 불러오는데 실패했습니다.");
      navigate("/community");
    }
  }, [id, isFetching]);

  const handleLikePost = async () => {
    if (!user.userId) {
      toast.info("로그인 한 유저만 사용할 수 있는 기능입니다.");
      return;
    }
    const res = await likePost(id);
    if (res.status === 200) window.location.reload();
    else toast.info("좋아요 기능을 처리하는데 오류가 있습니다.");
  };

  const handleDeletePost = async () => {
    const res = await deletePost();
    if(res.status === 200){
      toast.info('글을 성공적으로 삭제했습니다.');
      navigate('/community');
    }else{
      toast.info('글을 삭제하는데 실패했습니다.');
    }
  };

  const handleReply = async () => {
    if (replyText.length === 0) {
      return toast.info("내용을 입력해주세요.");
    }
    const replyData = {
      postId: id,
      text: replyText,
    };

    const res = await replyPost(replyData);
    if (res.status === 200) {
      window.location.reload();
    }
  };

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
                [ {categoryInKor(post.category)} ] {post.title}
              </h1>
              <ul className="tags">
                {post.tags.split(",").map((tag) => (
                  <li key={tag}># {tag}</li>
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
            <div className="community-detail-likeBtn" onClick={handleLikePost}>
              <img src={LikeIcon} alt="like" />
              <button>{post.likes.length}</button>
            </div>
            {user._id === post.writerId && (
              // delete & edit button
              <div className="conmmunity-detail-updateBtns">
                <button onClick={() => navigate(`/community/edit/${id}`)}>
                  수정하기
                </button>
                <button disabled={!user.userId} onClick={handleDeletePost}>
                  삭제하기
                </button>
              </div>
            )}
          </div>

          {/* 댓글 */}

          <div className="community-detail-container">
            {user.userId && (
              // 댓글 작성자
              <div className="community-detail-reply-writer">
                <p>{user.name} :</p>
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button onClick={handleReply}>작성</button>
              </div>
            )}

            {/* 댓글 나열 */}
            <h3 className="community-detail-reply-title">
              댓글 {post.reply.length}개
            </h3>
            <ul className="community-detail-replies">
              {post.reply.map((content) => (
                <CommunityPostReply content={content} postId={id} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default CommunityPostDetail;
