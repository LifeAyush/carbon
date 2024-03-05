import React from "react";
import "./footer.css";
import footerlogo from "../../Assets/Images/footerlogo.svg";
import bg from "../../Assets/Images/Ftimg.png";

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
        <img className="footerlogo" src={footerlogo} alt="Carbon UTurn"></img>
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
            placeholder="Enter Your Email"
          ></input>
        </div>
        <div className="footersecondline">
          <div className="footerlist">
            <div>
              <h2>Solutions</h2>
            </div>
            <div>
              <ul>
                <li>E-Learning Modules</li>
                <li>Carbon Accounting Dashboard</li>
                <li>Registration</li>
                <li>Carbon Credit Marketplace</li>
              </ul>
            </div>
          </div>
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
