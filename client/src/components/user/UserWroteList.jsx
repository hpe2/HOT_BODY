import {useNavigate} from 'react-router-dom';

const UserWroteList = ({post}) => {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate(`/community/detail/${post._id}`)}>
      <td>{post.category}</td>
      <td>{post.title.length > 40 ? `${post.title.slice(0, 40)}...` : post.title}</td>
      <td>{post.createdAt.slice(0, 10)}</td>
    </tr>
  );
};

export default UserWroteList;
