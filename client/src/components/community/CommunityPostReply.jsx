import { useDeleteReply } from '../../Queries/queriesAndMutations';
import { useUserContext } from "../../context/AuthContext";
import BadgeIcon from '/images/badge.svg';

const CommunityPostReply = ({ content, postId }) => {
  const { user } = useUserContext();
  const { mutateAsync: deleteReply } = useDeleteReply();

  const handleDeleteReply = async () => {
    const replyData = {
      postId,
      replyId: content._id
    }
    const response = await deleteReply(replyData);
    if(response.status === 200){
      window.location.reload();
    }
  };
  // content : text, userId, userName, createdAt
  return (
    <li className="community-detail-reply-content" key={content.text + content.createdAt}>
      {content.userId === user._id && (
        <button onClick={handleDeleteReply}>x</button>
      )}
      {/* 작성자 & 작성 시간 */}
      <div className="community-detail-reply-list">
        <div className='community-detail-reply-info'>
          <p>{content.userName} {user.membership && <img src={BadgeIcon} alt='badge' />}</p>
          <div className="community-detail-reply-time">
            <p>{content.createdAt.split("T")[0]}</p>
            <p>{content.createdAt.split("T")[1].slice(0, 8)}</p>
          </div>
        </div>
        {/* 댓글 내용 */}
        <p className='community-detail-reply-text'>{content.text}</p>
      </div>

    </li>
  );
};

export default CommunityPostReply;
