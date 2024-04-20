import React from "react";
import Banner from './Banner';
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section3 from "./Section03";
import Section4 from "./Section04";
import Footer from "./Footer";


const Home = () => {
  return <div>
      <Banner />
      <Section01/>
      <Section02/>
      <Section3 />
      <Section4 />
      <Footer />
      
  </div>;
};

export default Home;