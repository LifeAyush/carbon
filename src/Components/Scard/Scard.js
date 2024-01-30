import React from "react";
import "./scard.css";

const Scard = ({ data }) => {
  return (
    <div className="scard">
      <div
        className="scard-img"
        style={{
          backgroundImage: `url(${data.img})`,
          // height: "110px",

          backgroundSize: "cover",

          // width: "112px",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="scard-body">
        <div className="scard-header">
          <h1 className="scard-header-title">{data.name}</h1>
          <h4 className="scard-header-val">{data.val}</h4>
        </div>
      </div>
    </div>
  );
};

export default Scard;
