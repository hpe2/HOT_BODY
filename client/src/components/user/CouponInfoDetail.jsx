
const CouponInfoDetail = ({detail}) => {
  return (
    <tr>
      <td>{detail.condition}</td>
      <td>{detail.notice.length > 40 ? `${detail.notice.slice(0, 40)}...` : detail.notice}</td>
    </tr>
  );
};

export default CouponInfoDetail;
