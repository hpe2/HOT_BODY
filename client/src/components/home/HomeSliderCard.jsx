
const HomeSliderCard = ({img, link, category, text, totalText, totalNum}) => {
  return (
    <li className="home-banner-slider-img box-shadow">
      <img src={img} alt={img} />
      <div className="home-banner-slider-img-overlay">
        <p className="slider-link" onClick={() => navigate(`/${link}`)}>
          {category} 페이지로
        </p>
        <h1>[ {category} ]</h1>
        <p>
          {text}
          <br />
          {totalText} &nbsp; <strong>{totalNum}</strong>
        </p>
      </div>
    </li>
  );
};

export default HomeSliderCard;
