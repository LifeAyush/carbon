import React from 'react'
import "./footer.css"
import bottomGraphic from "../../Assets/Ftimg.png";
import footerlogo from '../../Assets/footerlogo.svg';
import bg from "../../Assets/Ftimg.png";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
      }}
    >
      <div className="footerlogoaddress">
        <img className="footerlogo" src={footerlogo}></img>
        <div className="footeraddress">
          XYZ sector Gurgaon, India <br></br> +91 1234567890
        </div>
      </div>
      <div className="footercontent">
        <div className="footerfirstline">
          <h1 className="footerheading">Subscribe Newsletter!</h1>
          <input
            className="footeremail"
            type="email"
            placeholder="Enter Email"
          ></input>
        </div>
        <div className="footersecondline">
          <div className="footerlist">
            <div><h2>Solutions</h2></div>
            <div><ul>
              <li>Registration</li>
              <li>Insurance</li>
              <li>E-Learning Modules</li>
              <li>Carbon Credit Marketplace</li>
              <li>Carbon Accounting Dashboard</li>
            </ul>
          </div></div>
          <div className="footerlist">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footerlist">
            <h2>Legal</h2>
            <ul>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/*<img
        src={bottomGraphic}
        alt="Graphic"
        className="bottom-graphic non-draggable"
      /> */

