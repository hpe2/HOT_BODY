import BadgeIcon from '../../../public/images/badge.svg'
import ThumbIcon from '../../../public/images/thumbsup.svg'


const PostList = () => {
  return (
    <li className="postList">
      <img src="" className="img" />
      <div className="postContent">
        <div className="contentTop">
          <ul className="tags">
            <li># 태그01</li>
            <li># 태그02</li>
            <li># 태그03</li>
          </ul>
          <p>2024-04-15</p>
        </div>
        <h3>[헬스] 1년만에 000 탈출한 썰 푼다.</h3>
        <p className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="contentBottom">
          <p className="writer">
            <img src={BadgeIcon} alt='badge' className='bagde' />
            <span>작성자 : 핫바디지박령</span>
          </p>
          <div className="likeButton">
            <img src={ThumbIcon} className='thumbIcon' />
            <p>199</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PostList;
