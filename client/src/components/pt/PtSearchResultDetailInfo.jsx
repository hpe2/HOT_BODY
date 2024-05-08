
const PtSearchResultDetailInfo = ({icon, label, text}) => {
  return (
    <div className="pt-search-result-detail-info">

      <div className="pt-search-result-detail-info-label">
        <img src={icon} alt="clock" />
        <p>{label}</p>
      </div>

      <p>{text}</p>
    </div>
  );
};

export default PtSearchResultDetailInfo;
