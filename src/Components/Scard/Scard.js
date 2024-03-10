import React from "react";
import "./scard.css";

const Scard = ({ data }) => {
  return (
    <div className="scard">
      <img className="scard-img" src={data.img} />
      <h1 className="scard-header-title">{data.name}</h1>
      <p className="scard-header-val">{data.val}</p>
    </div>
  );
};

export default Scard;
