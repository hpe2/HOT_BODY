import HomeAd from "../../../components/home/HomeAd";
import HomeBanner from "../../../components/home/HomeBanner";
import Trainers from '../../../components/home/Trainers';
import "../../../style/home/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <HomeBanner />
      <HomeAd />
      <Trainers />
    </div>
  );
};

export default Home;
