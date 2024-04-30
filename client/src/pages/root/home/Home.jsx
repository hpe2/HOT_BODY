import HomeAd from "../../../components/home/HomeAd";
import HomeBanner from "../../../components/home/HomeBanner";
import HomeGroup from "../../../components/home/HomeGroup";
import HomeSubscribe from "../../../components/home/HomeSubscribe";
import "../../../style/home/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <HomeBanner />
      <HomeAd />
      <HomeGroup />
      <HomeSubscribe />
    </div>
  );
};

export default Home;
