import React from "react";

const PtSearchResult = ({trainer, setIsDetailOpen, setSelectedTrainer}) => {
  
  const handleClick = () => {
    setIsDetailOpen(true);
    setSelectedTrainer(trainer);
  }

  return (
    <li className="pt-search-result" onClick={handleClick}>
      <img src={trainer.ptProfileImage} alt="pt-profile" />
      <div className="pt-search-detail">
        <h3 className="pt-search-detail-name">{trainer.ptProfileName} 트레이너</h3>
        <p>{trainer.description.length > 50 ? `${trainer.description.slice(0, 50)}...` : trainer.description}</p>
        <p>위치 : {trainer.location.address}</p>
        <p className="pt-search-detail-price">
          가격 : <span>{trainer.price.toLocaleString('ko-KR')} 원(won)</span>
        </p>
      </div>
    </li>
  );
};

export default PtSearchResult;
