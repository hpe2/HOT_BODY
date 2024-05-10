import React, { useState } from "react";
import "../../style/home/trainer.css";

const Trainers = () => {
  const [activeHero, setActiveHero] = useState(null);
  const heroesData = [
    {
      name: "이모찌",
      quote: "집가고 싶다",
      age: 50,
      appearances: "홍대 피트니스",
      cleanSheets: 280,
      imageUrl: "/images/trainer/health2.jpg",
    },
    {
      name: "정모찌",
      quote: "너무 힘들다",
      age: 10,
      appearances: "건대 피트니스",
      cleanSheets: 550,
      imageUrl: "/images/trainer/health3.jpg",
    },
    {
      name: "박모찌",
      quote: "놀고 먹고 싶다",
      age: 32,
      appearances: "강북 피트니스",
      cleanSheets: 450,
      imageUrl: "/images/trainer/health4.jpg",
    },
    {
      name: "최모찌",
      quote: "너는 운동 포기한다.",
      age: 25,
      appearances: "강서 피트니스",
      cleanSheets: 540,
      imageUrl: "/images/trainer/health5.jpg",
    },
    {
      name: "양모찌",
      quote: "당신 돈을 뜯어 먹고 싶다.",
      age: 31,
      appearances: "이태원 피트니스",
      cleanSheets: 520,
      imageUrl: "/images/trainer/health6.jpg",
    },
    {
      name: "걍모찌",
      quote: "뭘 야리냐.",
      age: 50,
      appearances: "노량진 피트니스",
      cleanSheets: 50,
      imageUrl: "/images/trainer/health7.jpg",
    },
    {
      name: "추모찌",
      quote: "패고 싶다.",
      age: 40,
      appearances: "한강 피트니스",
      cleanSheets: 510,
      imageUrl: "/images/trainer/health8.jpg",
    },
    {
      name: "대모찌",
      quote: "지옥을 경험 할 것...",
      age: 3000,
      appearances: "신도림 피트니스",
      cleanSheets: 540,
      imageUrl: "/images/trainer/health9.jpg",
    }
  ];

  const toggleHero = (id) => {
    setActiveHero((prev) => (prev === id ? null : id));
  };

  return (
    <div className="trainer_container">
      <div className="heroes">
        {heroesData.map((hero, index) => (
          <div
            key={index}
            className={`hero ${activeHero === index ? "active" : ""}`}
            onClick={() => toggleHero(index)}
            style={{
              display:
                activeHero === null || activeHero === index ? "block" : "none",
            }}
          >
            <div
              className="trainer_image"
              style={{ backgroundImage: `url(${hero.imageUrl})` }}
            ></div>
            <div className="hero-description">
              <p>
                {hero.name} <br />"{hero.quote}" <br />
                AGE: {hero.age} <br />
                GYM: {hero.appearances} <br />
                3대 {hero.cleanSheets}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
