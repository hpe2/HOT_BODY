
const HomeSliderCard = ({img, link, category, text, totalText}) => {
  return (
    <li className="home-banner-slider-img box-shadow">
      <img src={img} alt={img} />
      <div className="home-banner-slider-img-overlay">
        <p className="slider-link" onClick={() => navigate(`/${link}`)}>
          {category} 페이지로
        </p>
        <p>
          {text}
          <br />
          {totalText}&nbsp;<strong>10</strong>개 이상
        </p>
      </div>
    </li>
  );
};

export default HomeSliderCard;
