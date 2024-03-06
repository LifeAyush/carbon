import React from "react";
import "./stats.css";
import Scard from "../Scard/Scard";
import stats2 from "../../Assets/Images/stats-2.svg";
import stats1 from "../../Assets/Images/stats-1.svg";
import stats3 from "../../Assets/Images/stats-3.svg";
import stats4 from "../../Assets/Images/stats-4.svg";
import stats5 from "../../Assets/Images/stats-5.svg";
import bg from "../../Assets/Images/statsbg.png";

const Stats = () => {
  const sData = [
    {
      id: 1,
      img: stats1,
      name: "0.5-1 m",
      val: "Rise in global sea level ",
    },
    {
      id: 2,
      img: stats2,
      name: "$ 1.6 trillion",
      val: "Damage by river flooding",
    },
    {
      id: 3,
      img: stats3,
      name: "50%",
      val: "Increase in CO2 emissions",
    },
    {
      id: 4,
      img: stats4,
      name: "15x",
      val: "Increase in death rate due to extreme weather events",
    },
    {
      id: 5,
      img: stats5,
      name: "2-3 °C",
      val: "Rise in temperature as early as 2030",
    },
  ];

  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="main-2">
          <div className="heading-stats">
            <h1> We are committed to migrating</h1>
          </div>
          <div className="card-grid">
            {sData.map((group, id) => {
              return <Scard key={id} data={group} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
