
const UserMemberPurchaseList = ({purchase}) => {
  return (
    <tr>
      <td>{purchase.date}</td>
      <td>{purchase.text > 40 ? `${purchase.text.slice(0, 40)}...` : purchase.text}</td>
      <td>{purchase.price}</td>
    </tr>
  );
};

export default UserMemberPurchaseList;
