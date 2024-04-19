const UserWroteList = ({post}) => {
  return (
    <tr>
      <td>{post.category}</td>
      <td>{post.title}</td>
      <td>{post.createdAt.slice(0, 10)}</td>
    </tr>
  );
};

export default UserWroteList;
