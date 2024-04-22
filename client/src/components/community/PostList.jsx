import BadgeIcon from '/images/badge.svg'
import ThumbIcon from '/images/thumbsup.svg'
import { useNavigate } from 'react-router-dom'

const PostList = ({post}) => {
  const navigate = useNavigate();

  const categoryInKor = (category) => {
    if(category === 'all') return '일반';
    if(category === 'health') return '헬스'
    if(category === 'diet') return '식단'
    if(category === 'QA') return 'Q&A'
  }

  return (
    <li className="postList" onClick={() => navigate(`/community/detail/${post._id}`)}>
      {post.image === "" ? (
        <div className="postNoImg">No Image</div>
      ): (
        <img src={post.image} className="postListImg" />
      )}
      <div className="postContent">
        <div className="contentTop">
          <ul className="tags">
            {post.tags && (
              post.tags.split(',').map(tag => (
                <li># {tag}</li>
              ))
            )}
          </ul>
          <p>{post.createdAt.slice(0, 10)}</p>
        </div>
        <h3>{`[${categoryInKor(post.category)}]`} {post.title}</h3>
        <p className="text">
          {post.text.length > 200 ? `${post.text.slice(0, 150)}...` : post.text}
        </p>
        <div className="contentBottom">
          <p className="writer">
            {post.membership && <img src={BadgeIcon} alt='badge' className='bagde' /> }
            <span>작성자 : {post.writername}</span>
          </p>
          <div className="likeButton">
            <img src={ThumbIcon} className='thumbIcon' />
            <p>{post.likes.length}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostList;
